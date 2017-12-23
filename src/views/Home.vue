<template>
  <div>
    <h1>mapState:</h1>
    <p class="text-center">{{name}}&emsp;&emsp;{{is_login}}&emsp;&emsp;{{id}}&emsp;&emsp;{{psw}}</p>
    <h1>Promise.All:</h1>
    <button @click.stop="doPromiseAll">doPromiseAll</button>
    <h1>组件v-model绑定:</h1>
    <input-v-model v-model="data1"></input-v-model>
    <p>{{data1}}</p>
    <p>Rainbow</p>
    <rainbow :num="3"></rainbow>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import inputVModel from '@/components/inputVModel'
  import Rainbow from '@/components/Rainbow'
  export default {
    components:{inputVModel,Rainbow},
    data() {
      return {
        data1:''
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
    },
    computed: {
    ...mapState([
        'name',
        'is_login',
        'id',
        'psw'
      ])
    },
  };
</script>
<style lang="scss">
  h1{
    &:not(:first-child){
      margin-top: px2rem(60);
    }
    padding-bottom: px2rem(20);
  }
</style>
