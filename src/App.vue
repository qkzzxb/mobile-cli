<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import utils from '@/utils/simpleUtils'
export default {
  name: 'app',
  data() {
    return {
      data1:[7,10,5,20,2,66,3]
    }
  },
  created(){
    // console.log(this.data1.sort(this.sort));
  },
  methods: {
    sort(val1,val2) {
      return val2-val1
    }
  },
}
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height:100vh;
    width:100vw;
    overflow-x: hidden;
    margin:0 auto;
    line-height: 1.1666667;
  }
</style>

