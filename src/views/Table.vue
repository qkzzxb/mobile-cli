<template>
  <div>
    <el-table
      @cell-click="setTableContent"
      :data="template_list"
      style="100%">
      <el-table-column label="模板名"
        prop="title"
        width="180">
      </el-table-column>
      <el-table-column label="内容" width="360">
        <template slot-scope="scope">
          <div class="sl-sms-wechat-demo">
            <div class="sl-sms-wechat-demo-header">
              {{scope.row.title}}
            </div>
            <div class="sl-sms-wechat-demo-content" 
              v-html="lableTransform(scope.row.content)">
            </div>
            <div class="sl-sms-wechat-demo-footer">
              详情
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="编辑" width="420">
        <template slot-scope="scope" v-if="scope.row.show">
          <SMSEditor
            :ref="'sl-sms-ediotr'+scope.row.template_id"
            :nameObject="nameObject"
            :row="scope.row" 
            :customLabelTranslate="customLabelTranslate"
            @tableContentChange="tableContentChange"
          ></SMSEditor>
          <el-button type="primary" size="mini" @click="saveTemplate(scope.row)" style="margin-top:10px; float:right;">保存</el-button>
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
        templateObj: {
          nickname:{
            name: '用户XYZ',
            color: '#990033'
          },
          orderId: {
            name: '订单号:「3061607603」',
            color: '#996699'
          },
          sequenceId: {
            name: '流水号:「18034283211」',
            color: '#FF6666'
          },
          verCode: {
            name: '验证码643539',
            color: '#333399'
          },
          notice: {
            name: '恭喜你购买成功！',
            color: '#CCFFFF'
          },
          goods: {
            name:  '商品名称:巧克力',
            color: '#FFCCCC'
          },
          price: {
            name: '价格:39.8元',
            color: 'green'
          },
          date: {
            name: '日期:2014年9月22日',
            color: 'blue'
          },
          remark: {
            name: '欢迎再次购买！',
            color: 'pink'
          },
        },
        nameObject: {
          nickname: '昵称',
          orderId: '订单号',
          sequenceId: '流水号',
          verCode: '验证码',
          notice: '购买成功通知',
          goods: '商品名',
          price: '价格',
          date: '时间',
          remark: '备注',
        },
        customLabelTranslate:[
          { label: '{ {nickname} }',   value: 'nickname'},
          { label: '{ {orderId} }', value: 'orderId'},
          { label: '{ {sequenceId} }', value: 'sequenceId'},
          { label: '{ {verCode} }', value: 'verCode'},
          { label: '{ {notice} }', value: 'notice'},
          { label: '{ {goods} }', value: 'goods'},
          { label: '{ {price} }', value: 'price'},
          { label: '{ {date} }', value: 'date'},
          { label: '{ {remark} }', value: 'remark'}
        ],
        template_list: [
          { template_id: 'iPk5sOIt5X_004',
            title: "购买成功通知",
            content: "{ {notice} }\n{ {goods} }\n{ {price} }\n{ {date} }\n{ {remark} }",
            variable: ['nickname', 'orderId', 'sequenceId', 'verCode', 'notice', 'goods', 'price', 'date', 'remark'],
            show: false
          },
          { template_id: 'iPk5sOIt5X_001',
            title: "商场促销",
            content:
              "尊敬的{ {nickname} },\n商场购买不参加返券活动的化妆品现金满100 元可参加抽奖活动，百分百中奖，奖品最小为面值40 元百货券，惊喜多多！",
            variable: ['nickname', 'orderId', 'sequenceId', 'verCode'],
            show: false
          },
          { template_id: 'iPk5sOIt5X_002',
            title: "饿了么",
            content:
              "【饿了么】您在「派客鸡排（回龙店）」下的{ {orderId} } 退款成功，27.58元退款已经原路返还至您的支付账户。订单对应的交易{流水号}，可前往「微信支付」查询退款详情。",
            variable: ['orderId', 'verCode'],
            show: false 
          },
          { template_id: 'iPk5sOIt5X_003',
            title: "建设银行",
            content:"14:18发的{验证码}，您在使用中国建设银行普通纪念币预约服务。任何索要验证码的都是骗子，千万别给！[建设银行]",
            variable: [],
            show: false
          },
        ]
      }
    },
    created(){
      this.transfromToUE();
    },
    methods: {
      setTableContent(row){
        let smsEditor =  this.$refs['sl-sms-ediotr' + row.template_id];
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
          if(this.templateObj[item.value].color){
            content = content.replace(new RegExp(item.label,'g'), '<span style="color:'+this.templateObj[item.value].color +'">'+this.templateObj[item.value].name+'</span>');
          }else{
            content = content.replace(new RegExp(item.label,'g'),this.templateObj[item.value].name);
          }
        })
        return content;
      },
      tableContentChange(obj){
        this.template_list.forEach((item) => {
          if(item.template_id == obj.template_id){
            item.content = obj.content;
          }
        })
      },
      transfromToUE(){
        this.template_list.forEach((item) => {
          item.content = item.content.replace(/\n/g,'<br/>');
        })
      },
      saveTemplate(row){
        this.$refs['sl-sms-ediotr' + row.template_id].validateContent()
        .then(() => {
          let content = row.content;
          content = content.replace(/<\/p><p>/g, '\n');
          content = content.replace(/<br\/>/g, '\n');
          content = content.replace(/<p>/g, '');
          content = content.replace(/<\/p>/g, '');
          console.log(JSON.stringify(content));
        })
        .catch((err) => {
          this.$message.error(err);
        })
      }
    }
  }
</script>
<style lang="scss">
  .sl-sms-wechat-demo{
    width: 290px;
    box-sizing: border-box;
    border-radius: 5px;
    border:solid 1px #d0d0d0;
    background-color: #fff;
    padding: 10px;
    color:#333;
    font-size: 14px;
    .sl-sms-wechat-demo-header{
      padding: 5px 0 14px;
      font-size: 16px;
      font-weight: 700;
    }
    .sl-sms-wechat-demo-content{
      padding-bottom: 14px
    }
    .sl-sms-wechat-demo-footer{
      padding-top: 5px;
      border-top: 1px solid #f4f4f4;
      background: url('~@/assets/img/arrow-right.png') no-repeat right 10px/16px;
    }
  }
</style>

