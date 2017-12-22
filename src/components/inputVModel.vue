<template>
  <div>
    <input type="text" v-model="currentValue">
  </div>
</template>

<script>
  export default {
    name:'input-v-model',
    props: {
      'value': {
        type: String,
        required:true
      },
    },
    computed: {
      currentValue:{
        get(){
          return this.value;
        },
        set(val){
          this.$emit('input',val)
        }
      }
    },
  }
</script>