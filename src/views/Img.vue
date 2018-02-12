<template>
  <div>
    <upload-post v-model="url"></upload-post>
    <p>
      233
      455
    </p>
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
      this.$http.post('/api/upload/v2')
      .then((res) => {
        console.log(res);
      })
    }
  }
</script>

<style lang="scss">

</style>