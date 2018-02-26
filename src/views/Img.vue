<template>
  <div>
    <upload-post v-model="url"></upload-post>
    <!-- <el-button @click="setCookies">set cookies</el-button> -->
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
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">

</style>