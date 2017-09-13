<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
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
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
  }
  .text-center {
      text-align: center;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height:100vh;
  }
</style>
