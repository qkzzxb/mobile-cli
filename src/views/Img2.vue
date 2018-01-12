<template>
  <div>
    <input type="file" @change="submit">
    <div v-if="imgs" id="imgs">
      <div class="img">
        <img :src="imgs.img1.url">
        {{imgs.img1.size}}
      </div>
      <div class="img">
        <img :src="imgs.img2.url">
        {{imgs.img2.size}}
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        imgs: null
      }
    },
    methods: {
      submit(e) {
        let file = e.target.files[0];
        let form = new FormData();
        form.append('file', file);
        this.$http.post('/uploader',form)
        .then((resp) => {
          this.imgs = resp;
        })  
      }
    },
  }
</script>
<style lang="scss">
  #imgs{
    display: flex;
    padding: 30px;
    .img{
      flex:1;
      margin: 30px;
      img{
        display: block;
        width: 100%;
      }
    }
  }
</style>
