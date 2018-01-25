 <template>
  <div class="pi-table">
    <div class="pi-table-inner">
      <el-table
        @cell-click="rowClick"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="模板名"
          width="180">
        </el-table-column>
        <el-table-column
          label="内容">
          <template slot-scope="scope">
            <div>{{scope.row.content | transform}}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <VueUEditor @ready="editorReady" :ueditorConfig="ueditorConfig" ueditorPath="/static/ueditor/" style="width: 400px;"></VueUEditor>
  </div>
</template>
<script>
import VueUEditor from "vue-ueditor";
const Transformation = [
  { label: '{{昵称}}', value: ' 用户XYZ '},
  { label: '{{订单号}}', value: ' 订单号12345 '},
  { label: '{{运单号}}', value: ' 运单号7878787 '},
]
export default {
  components: {
    VueUEditor
  },
  data() {
    return {
      tableData: [
        {
          id:'001',
          name: "商场促销",
          content:
            "尊敬的{{昵称}}商场购买不参加返券活动的化妆品现金满100 元可参加抽奖活动，百分百中奖，奖    品最小为面值40 元百货券，惊喜多多！"
        },
        {
          id:'002',
          name: "淘宝",
          content:
            "亲！狗猫粮全年最底价来袭，双11快结束了，错过等明年火速抢购，雷米高哈宠邦专卖店  退订回TD"
        },
        {
          id:'003',
          name: "罗蒙官方旗舰店",
          content:
            "全年zui低价，zui后6小时，全面补货，全场3免一，3免一，3免一！戳此 ***** 退订TD"
        }
      ],
      content: "<h1>Some initial content</h1>",
      ueditorConfig: {
        toolbars: [[]]
      },
      ueditor:{},
      selectId:''

    };
  },
  methods: {
    editorReady(editorInstance) {
      this.ueditor = editorInstance;
      // editorInstance.setContent("");
      editorInstance.setPlainTxt("");
      editorInstance.addListener("contentChange", () => {
        this.tableData.forEach((item) =>{
          if(item.id == this.selectId){
            item.content = editorInstance.getContent();
            // item.content = editorInstance.getPlainTxt();
          }
        })
      });
      this.addCombox();
    },
    addCombox() {
      let editor = this.ueditor;
      let uiName = '自定义插入' 
      UE.registerUI("combox",function(editor, uiName) {
          //注册按钮执行时的command命令,用uiName作为command名字，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function(cmdName, value) {
              this.execCommand('insertHtml', "<span>{{"+value+"}}</span>");
              return true;
            },
            queryCommandValue: function() {
              return this.queryCommandValue("inserthtml");
            }
          });
          //创建下拉菜单中的键值对，这里我用字体大小作为例子
          var items = [];
          for (var i = 0, ci;(ci = ['昵称','订单号','运单号'][i++]);) {
            items.push({
              label: '{{' + ci + '}}',
              value: ci,
              renderLabelHtml: function() {
                return (
                  "<span style='fontSize:14px'>" +this.label +"</span>"
                );
              }
            });
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
          editor.addListener("selectionchange", function(type, causeByUi, uiReady) {
            if (!uiReady) {
              var state = editor.queryCommandState(uiName);
              if (state == -1) {
                combox.setDisabled(true);
              } else {
                combox.setDisabled(false);
                var value = editor.queryCommandValue(uiName);
                if (!value) {
                  combox.setValue(uiName);
                  return;
                }
                value && (value = value.replace(/['"]/g, "").split(",")[0]);
                combox.setValue(value);
              }
            }
          });
          return combox;
        },
      );
    },
    rowClick(row){
      this.selectId = row.id;
      this.ueditor.setContent(row.content);
    }
  },
  filters: {
    transform: function(str) {
      Transformation.forEach((item) => {
        str = str.replace(new RegExp(item.label,'g'),item.value);
      })
      return str;
    }
  }
};
</script>
<style lang="scss">
.pi-table {
  display: flex;
  .pi-table-inner {
    width: 600px;
    margin-right: 50px;
  }
  .pi-talbe-editor {
    width: 300px;
  }
}
</style>
