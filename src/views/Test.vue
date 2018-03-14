<template>
  <div class="text-center">
    <el-button type="info" @click="test">TEST</el-button>
    <el-button type="info" @click="login">login</el-button>
    <el-button type="info" @click="auth">auth</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        token: '11111'
      }
    },
    methods: {
      test() {
        this.$http.get('/test/1')
        .then(resp => {
          this.token = resp.token;
        })
      },
      login(){
        let params ={
          password: 'password'
        }
        this.$http.post('/api/login', params)
        .then(resp => {
          this.token = resp.token;
        })
      },
      auth(){
        let token = this.token;
        let instance = this.$http.create({
          headers:{
            "Authorization": 'Bearer '+token
          }
        });
        instance.post('/api/auth');
      },
    },
  }
</script>