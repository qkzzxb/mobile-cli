<template>
  <div id="app">
    <h1 class="text-center">
      mapState:{{name}}{{is_login}}{{id}}{{psw}}
    </h1>
    <router-view></router-view>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: 'app',
  computed: {
    ...mapState([
        'name',
        'is_login',
        'id',
        'psw'
      ])
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

