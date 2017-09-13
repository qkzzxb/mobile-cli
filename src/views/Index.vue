<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>
      <div class="inner">1</div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="inner">2</div>
    </mt-swipe-item>
    <mt-swipe-item>
      <div class="inner">3</div>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
  export default {
    
  };
</script>
<style lang="scss">
  .mint-swipe{
    width: 100vw;
    height:px2rem(200);
  }
  .inner{
    height: 100%;
    text-align: center;
    line-height:px2rem(200);
    background: red;
    color:white;
    &:nth-child(2){
        background: blue;
    }
    &:nth-child(3){
        background: yellow;
    }
  }
</style>
