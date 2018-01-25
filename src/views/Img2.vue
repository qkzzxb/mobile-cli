<template>
  <div>
    <el-date-picker
      v-model="timer"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template> 

<script>
  export default {
    data() {
      return {
        timer:[new Date(), new Date()]
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
