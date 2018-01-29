 <template>
  <div class="pi-talbe-editor-wrap" :style="{top: offsetTop+ 'px'}">
    <div class="pi-talbe-editor-inner">
      <!-- <script :id="editorId" name="content" type="text/plain" style="width: 400px">
      </script> -->
    </div>
  </div>
</template>
<script>
import stringUtils from '@/utils/stringUtils';
import '../../static/ueditor/ueditor.config.js';
import '../../static/ueditor/ueditor.all.js';
export default {
  name:'sl-SMS-template-editor',
  props: {
    model:{
      type: Object,
      required: true,
    },
    rowContent: {
      type: String,
      required: true,
    },
    variable:{
      type: Array,
      default: []
    },
    nameObject:{
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    customLabelTranslate: {
      type: Array,
      required: true
    },
    offsetTop:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ueditorConfig: {
        toolbars: [[]]
      },
      editorId: 'sl_ueditor_'+ stringUtils.nextId(),
      ueditor: {},
      ueditorContent:'',
      parentClass: '.pi-talbe-editor-inner'
    };
  },
  mounted(){
    this.editorReady();
  },
  methods: {
    editorReady() {
      let vm = this;
      this.registerCombox();
      this.ueditor = UE.getEditor(vm.editorId, vm.ueditorConfig);
      this.ueditor.ready(() => {
        this.ueditor.setContent(this.rowContent );
        this.ueditor.addListener("contentChange", () => {
          this.ueditorContent = this.ueditor.getPlainTxt();
          this.tableContentChange();
        })
      })
    },
    newEditor(){
      let newEditor = document.createElement('script');
      this.editorId = 'sl_ueditor_'+ stringUtils.nextId();
      newEditor.id = this.editorId;
      newEditor.name = 'content';
      newEditor.type = 'text/plain';
      newEditor.style.width = '400px';
      let parent = document.querySelector(this.parentClass);
      parent.appendChild(newEditor);
    },
    deletEditor(){
      let oldEditor = document.querySelector(`#${this.editorId}`);
      if(oldEditor){
        let parent = document.querySelector(this.parentClass);
        parent.removeChild(oldEditor);
      }
    },
    registerCombox() {
      let vm = this;
      UE.registerUI("模板标签", function(editor, uiName) {
        editor.registerCommand(uiName, {
          execCommand: function(cmdName, value) {
            this.execCommand('insertHtml', value);
            return true;
          },
        });
        var items = [];
        if(vm.variable.length > 0){
          vm.variable.forEach( label => {
            items.push({
              label: vm.nameObject[label],
              value: '{' + vm.nameObject[label] + '}',
              renderLabelHtml: function() {
                return (
                  this.label
                );
              }
            })
          });
        }else{
          items = [
            {
              label: '暂无可用数据',
              value: '',
              renderLabelHtml: function() {
                return "<span style='color: #ccc'>暂无可用数据</span>";
              }
            }
          ]
        }
        var combox = new UE.ui.Combox({
          editor: editor,
          items: items,
          onselect: function(t, index) {
            editor.execCommand(uiName, this.items[index].value);
          },
          title: uiName,
          initValue: uiName
        });
        return combox;
      }, 0, vm.editorId);
    },
    validateContent() {
      let arr = this.ueditorContent.match(/\{(.+?)\}/g);
      return new Promise((resolve, reject) => {
        if(arr){
          for(let label of arr){
            let auth = this.customLabelTranslate.some((item) => {
              return item.label == label
            })
            if(!auth){
              reject(`${label}为非法标签`);
            }
          }
          resolve()
        }else{
          resolve()
        }
      })
    },
    lableTransform(value) {
      this.customLabelTranslate.forEach((item) => {
        value = value.replace(new RegExp(item.label,'g'),this.model[item.value]);
      })
      return value;
    },
    tableContentChange(){
      let newData = {
        id: this.id,
        content: this.ueditorContent
      }
      this.$emit('tableContentChange', newData);
    }
  },
  watch: {
    id(id){
      if(id){
        this.deletEditor();
        this.newEditor();
        this.editorReady();
      }
    },
  },
  beforeDestroy(){
    this.ueditor.removeListener("contentChange");
  }
};
</script>
<style lang="scss">
  .pi-talbe-editor-wrap{
    position: absolute;
    right:20px ;
  }
</style>
