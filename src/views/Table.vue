<template>
  <div>
    <el-table
      @cell-click="setTableContent"
      :data="tableData"
      style="100%">
      <el-table-column label="模板名"
        prop="name"
        width="180">
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <div>{{ lableTransform(scope.row.content) }}</div>
        </template>
      </el-table-column>
      <el-table-column label="编辑" width="500">
        <template slot-scope="scope" v-if="scope.row.show">
          <SMSEditor
            :ref="'sl-sms-ediotr'+scope.row.id"
            :model="obj"
            :nameObject="nameObject"
            :row="scope.row" 
            :customLabelTranslate="customLabelTranslate"
            @tableContentChange="tableContentChange"
          ></SMSEditor>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import SMSEditor from '@/components/SMSTemplateEditorV2';
  export default {
    components: {
      SMSEditor
    },
    data() {
      return {
        obj: {
          name: '用户名XYZ',
          order: '订单「3061607603」',
          sequence: '流水号为「18034283211」',
          verCode: '验证码643539'
        },
        nameObject: {
          name: '昵称',
          order: '订单号',
          sequence: '流水号',
          verCode: '验证码'
        },
        customLabelTranslate:[
          { label: '{昵称}',   value: 'name'},
          { label: '{订单号}', value: 'order'},
          { label: '{流水号}', value: 'sequence'},
          { label: '{验证码}', value: 'verCode'}
        ],
        tableData: [
          { id:'001',
            name: "商场促销",
            content:
              "尊敬的{昵称},商场购买不参加返券活动的化妆品现金满100 元可参加抽奖活动，百分百中奖，奖品最小为面值40 元百货券，惊喜多多！",
            variable: ['name', 'order', 'sequence', 'verCode'],
            show:false
          },
          { id:'002',
            name: "饿了么",
            content:
              "【饿了么】您在「派客鸡排（回龙店）」下的{订单号} 退款成功，27.58元退款已经原路返还至您的支付账户。订单对应的交易{流水号}，可前往「微信支付」查询退款详情。",
            variable: ['order', 'verCode'],
            show:false 
          },
          { id:'003',
            name: "建设银行",
            content:"14:18发的{验证码}，您在使用中国建设银行普通纪念币预约服务。任何索要验证码的都是骗子，千万别给！[建设银行]",
            variable: [],
            show:false
          }
        ],
      }
    },
    methods: {
      setTableContent(row){
        console.log(this.$refs);
        let smsEditor =  this.$refs['sl-sms-ediotr' + row.id];
        if(smsEditor){
          smsEditor.validateContent()
          .then(() => {
            row.show = true;
          })
          .catch((err) => {
            this.$message.error(err);
          })
        }else{
           row.show = true;
        }
      },
      lableTransform(content){
        this.customLabelTranslate.forEach((item) => {
          content = content.replace(new RegExp(item.label,'g'),this.obj[item.value]);
        })
        return content;
      },
      tableContentChange(obj){
        this.tableData.forEach((item) => {
          if(item.id == obj.id){
            item.content = obj.content;
          }
        })
      }
    }
  }
</script>
