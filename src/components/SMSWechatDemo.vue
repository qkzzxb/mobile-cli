<template>
  <div class="sl-sms-wechat-demo">
    <div class="sl-sms-wechat-demo-header">
      {{model.title}}
    </div>
    <div class="sl-sms-wechat-demo-content" 
      v-html="model.content">
    </div>
    <div class="sl-sms-wechat-demo-footer">
      详情
    </div>
  </div>
</template>

<script>
  export default {
    name:'sl-sms-wechat-demo',
    props: {
      model: {
        type: Object,
        required: true
      },
    },
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