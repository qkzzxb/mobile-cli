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
    }
  }
</script>

<style lang="scss">

</style>