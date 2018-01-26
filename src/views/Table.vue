<template>
  <div>
    <el-table
      @cell-click="setTableContent"
      :data="tableData"
      style="width: 600px">
      <el-table-column
        prop="name"
        label="模板名"
        width="180">
      </el-table-column>
      <el-table-column
        label="内容">
        <template slot-scope="scope">
          <div>{{ lableTransform(scope.row.content) }}</div>
        </template>
      </el-table-column>
    </el-table>
    <SMSTemplateEditor ref="smsEditor" 
      v-model="rowContent" 
      :id="rowId" :offsetTop="offsetTop" :customLabelTranslate="customLabelTranslate" />
  </div>
</template>

<script>
  import SMSTemplateEditor from '@/components/SMSTemplateEditor';
  export default {
    components: {
      SMSTemplateEditor
    },
    data() {
      return {
        tableData: [
          { id:'001',
            name: "商场促销",
            content:
              "尊敬的{昵称},商场购买不参加返券活动的化妆品现金满100 元可参加抽奖活动，百分百中奖，奖品最小为面值40 元百货券，惊喜多多！"},
          { id:'002',
            name: "饿了么",
            content:
              "【饿了么】您在「派客鸡排（回龙店）」下的{订单号} 退款成功，27.58元退款已经原路返还至您的支付账户。订单对应的交易{流水号}，可前往「微信支付」查询退款详情。"},
          { id:'003',
            name: "建设银行",
            content:"14:18发的{验证码}，您在使用中国建设银行普通纪念币预约服务。任何索要验证码的都是骗子，千万别给！[建设银行]"}],
        customLabelTranslate:[
          { name: '昵称',   label: '{昵称}',   value: '用户XYZ'},
          { name: '订单号', label: '{订单号}', value: '订单「3061607603」'},
          { name: '流水号', label: '{流水号}', value: '流水号为「18034283211」'},
          { name: '验证码', label: '{验证码}', value: '验证码643539'}
        ],
        offsetTop:0,
        rowContent:'',
        rowId:''
      }
    },
    methods: {
      setTableContent(row, column, cell){
        this.$refs.smsEditor.validateContent()
        .then(() => {
          let offsetTop = cell.offsetTop;
          while (cell.offsetParent && cell.offsetParent.offsetTop){
            offsetTop += cell.offsetParent.offsetTop;
            cell = cell.offsetParent;
          }
          this.offsetTop = offsetTop;
          this.rowContent = row.content;
          this.rowId = row.id;
        })
        .catch((err) => {
          this.$message.error(err);
        })
      },
      lableTransform(value){
        return this.$refs.smsEditor.lableTransform(value);
      },
    },
    watch: {
      rowContent(value) {
        this.tableData.forEach((item) => {
          if(item.id == this.rowId){
            item.content = value;
          }
        })
      }
    }
  }
</script>
