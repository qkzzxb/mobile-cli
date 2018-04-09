<template>
  <div>
    <bp-TMap :lat.sync="formModel.lat" :lng.sync="formModel.lng"  v-model="formModel.address"></bp-TMap>
    <el-button @click="test">测试</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formModel: {
          lat: "",
          lng: "",
          address: ""
        },
      }
    },
    methods: {
      test() {
        console.log(this.formModel);
      }
    },
  }
</script>