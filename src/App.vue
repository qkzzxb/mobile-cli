<template>
  <div id="app">
    <router-view></router-view>
    <div id="modal" v-if="modal_show" @touchmove.prevent ></div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      modal_show:false
    }
  },
  created(){
    bus.$on('model_open',val => {
      this.modal_show=true;
    });
    bus.$on('model_close',val => {
      this.modal_show=false;
    });
    // this.$http.post('url')
    // .then((res)=>{
    //   console.log(res)
    // })
    // bus.$emit('test','测试');
  }
} 
</script>
<style lang="scss">
  body, h1, h2, h3, h4, h5, h6, hr, p, dl, dt, dd, ul, ol, li, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
  }
  ul, ol {
    list-style: none;
  }
  .pic{
    >img{
        display: block;
        width: 100%;
      } 
    }
  .fr {
    float: right;
  }
  .fl {
    float: left;
  }
  .clearfix {
    &:after {
        content: "\200b";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
  }
  .text-center {
      text-align: center;
  }
  input{
    outline:none;
    border: none;
  }
  ::-webkit-input-placeholder{
    color:#adadad;
  }
  .bg-img{
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height:100vh;
    max-width:540px;
    margin:0 auto;
  }
  #modal{
    width: 100vw;
    height: 100vh;
    background-color:rgba(0, 0, 0, .8);
    position: fixed;
    z-index: 90;
    top:0;
    left:0;
  }
  .mt-05{
    margin-top: px2rem(5);
  }
  .mt-10{
    margin-top: px2rem(10);
  }
  .mt-15{
    margin-top: px2rem(15);
  }
  .mt-20{
    margin-top: px2rem(20);
  }
  .mt-25{
    margin-top: px2rem(25);
  }
  .mt-30{
    margin-top: px2rem(30);
  }
  .mt-35{
    margin-top: px2rem(35);
  }
  .mt-40{
    margin-top: px2rem(40);
  }
  .mt-45{
    margin-top: px2rem(45);
  }
  .mt-50{
    margin-top: px2rem(50);
  }
  .mt-55{
    margin-top: px2rem(55);
  }
  .mb-05{
    margin-bottom: px2rem(5);
  }
  .mb-10{
    margin-bottom: px2rem(10);
  }
  .mb-15{
    margin-bottom: px2rem(15);
  }
  .mb-20{
    margin-bottom: px2rem(20);
  }
  .mb-25{
    margin-bottom: px2rem(25);
  }
  .mb-30{
    margin-bottom: px2rem(30);
  }
  .mb-35{
    margin-bottom: px2rem(35);
  }
  .mb-40{
    margin-bottom: px2rem(40);
  }
  .mb-45{
    margin-bottom: px2rem(45);
  }
  .mb-50{
    margin-bottom: px2rem(50);
  }
  .mb-55{
    margin-bottom: px2rem(55);
  }
  .pt-05{
    padding-top:px2rem(5);
  }
  .pt-10{
    padding-top:px2rem(10);
  }
  .pt-15{
    padding-top:px2rem(15);
  }
  .pt-20{
    padding-top:px2rem(20);
  }
  .pt-25{
    padding-top:px2rem(25);
  }
  .pt-30{
    padding-top:px2rem(30);
  }
  .pt-35{
    padding-top:px2rem(35);
  }
  .pt-40{
    padding-top:px2rem(40);
  }
  .pt-45{
    padding-top:px2rem(45);
  }
  .pt-50{
    padding-top:px2rem(50);
  }
  .pb-05{
    padding-bottom: px2rem(5)
  }
  .pb-10{
    padding-bottom: px2rem(10)
  }
  .pb-15{
    padding-bottom: px2rem(15)
  }
  .pb-20{
    padding-bottom: px2rem(20)
  }
  .pb-25{
    padding-bottom: px2rem(25)
  }
  .pb-30{
    padding-bottom: px2rem(30)
  }
  .pb-35{
    padding-bottom: px2rem(35)
  }
  .pb-40{
    padding-bottom: px2rem(40)
  }
  .pb-45{
    padding-bottom: px2rem(45)
  }
  .pb-50{
    padding-bottom: px2rem(50)
  }
</style>
