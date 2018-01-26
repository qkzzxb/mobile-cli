 <template>
  <div class="pi-talbe-editor-wrap" :style="{top: offsetTop+ 'px'}">
    <div class="pi-talbe-editor-inner">
      <script :id="editorId" name="content" type="text/plain" style="width: 400px">
      </script>
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
    value: {
      type: String,
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
      editorId: 'sl_ueditor_' + stringUtils.nextId(),
      ueditor: {},
      ueditorContent:''
    };
  },
  mounted(){
    this.editorReady();
  },
  methods: {
    editorReady(editorInstance) {
      let vm = this;
      this.ueditor = UE.getEditor(vm.editorId,vm.ueditorConfig);
      this.registerCombox();
      this.ueditor.addListener("contentChange", () => {
        this.ueditorContent = this.ueditor.getPlainTxt();
        this.validateContent()
        .then(()=>{
          this.rowContent = this.ueditorContent;
        })
      })
    },
    registerCombox(){
      let vm = this;
      UE.registerUI("模板标签",function(editor, uiName) {
        editor.registerCommand(uiName, {
          execCommand: function(cmdName, value) {
            this.execCommand('insertHtml', value);
            return true;
          },
        });
        var items = [];
        vm.customLabelTranslate.forEach(item => {
          items.push({
            name: item.name,
            label: item.label,
            value: item.label,
            renderLabelHtml: function() {
              return (
                this.label
              );
            }
          })
        });
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
      },0,vm.editorId);
    },
    validateContent(){
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
        value = value.replace(new RegExp(item.label,'g'),item.value);
      })
      return value;
    }
  },
  computed: {
    rowContent: {
      get(){
        return this.value;
      },
      set(val){
        this.$emit('input', val)
      }
    }
  },
  watch: {
    id(){
      this.ueditor.setContent(this.rowContent);
    }
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
