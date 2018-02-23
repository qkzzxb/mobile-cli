<template>
  <div>
    <!-- <upload-post v-model="url"></upload-post> -->
    <el-button @click="setCookies">set cookies</el-button>
  </div>
</template>

<script>
  import uploadPost from '@/components/UploadPost';
  export default {
    components:{
      uploadPost
    },
    data() {
      return {
        // url: 'https://vuefe.cn/images/logo.png',
        url: ''
      }
    },
    created(){
      console.log(`
        登录(success) -> token -> 请求 + token
        .then res
        .catch login
      `)
    },
    methods: {
      setCookies() {
        this.$basil.set('test',{name: '问问开', psw: '233'});
      }
    },
  }
</script>

<style lang="scss">

</style>