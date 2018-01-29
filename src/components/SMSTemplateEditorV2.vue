 <template>
  <div>
    <script :id="editorId" name="content" type="text/plain" style="width: 400px">
    </script>
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
    nameObject:{
      type: Object,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
    customLabelTranslate: {
      type: Array,
      required: true
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
        this.ueditor.setContent(this.row.content );
        this.ueditor.addListener("contentChange", () => {
          this.ueditorContent = this.ueditor.getPlainTxt();
          this.tableContentChange();
        })
      })
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
        if(vm.row.variable.length > 0){
          vm.row.variable.forEach( label => {
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
          items.push(
            {
              label: '暂无可用数据',
              value: '',
              renderLabelHtml: function() {
                return "<span style='color: #ccc; font-size: 12px;'>暂无可用数据</span>";
              }
            }
          )
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
    tableContentChange(){
      let newData = {
        id: this.row.id,
        content: this.ueditorContent
      }
      this.$emit('tableContentChange', newData);
    }
  },
  watch: {
    'row.id'(id){
      if(id){
        this.editorReady();
      }
    },
  },
  beforeDestroy(){
    this.ueditor.removeListener("contentChange");
  }
};
</script>