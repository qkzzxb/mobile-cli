<template>
  <div>
    <h1>Hello JS</h1>
    <button @click.stop="doPromiseAll">doPromiseAll</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      doPromiseAll() {
        let vm=this;
        let p1 = new Promise(function (resolve, reject) {
          setTimeout(()=>{
            resolve('p1');
          },500)
          /* vm.$http.get('/product/brand/brand')
          .then(()=>{
            resolve('p3');
          }) */
        });
        let p2 = new Promise(function (resolve, reject) {
          setTimeout(()=>{
            resolve('p2');
          },2500)
        });
        Promise.all([p1, p2])
        .then(function (results) {
            console.log(results);
        });
      }
    }
  };
</script>
<style lang="scss">

</style>
