<template>
  <div>
    <div>
      <mt-field label="用户名" v-model="model.name"></mt-field>
      <mt-field label="密码" v-model="model.password"></mt-field>
      <mt-field label="密码" v-model="model.repassword"></mt-field>
      <mt-field label="简介" v-model="model.bio"></mt-field>
      <mt-button plain @click="signup">注册</mt-button>
    </div>
    <div>
      <mt-button plain @click="signout">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model:{
          name:'qqqqq',
          password:'a123456',
          repassword:'a123456',
          gender:'m',
          avatar:'https://vuefe.cn/images/logo.png',
          bio:'descdesc',
        }
      }
    },
    methods: {
      signup() {
        this.$http.post('/signup',this.model)
        .then((resp) => {
          console.log(resp);
        })
      },
      signout(){
        this.$http.post('/signout')
        .then((resp)=>{
          console.log(resp);
        })
      }
    },
  }
</script>

<style scoped>

</style>