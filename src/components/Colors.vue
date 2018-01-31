<template>
  <div>
    <div class="sl-separatpr-module-wrapper" :class="classObject">
    <!-- <div class="sl-separatpr-module-wrapper" :class="[color ? 'sl-separator-module-' + color : '']"> -->
      title
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sl-separator-color',
    props: {
      color: {
        type: String,
        default: ''
      }
    },
    computed: {
      classObject() {
        let className = `sl-separator-module-${this.color}`;
        let colorObj = {};
        colorObj[className] = true;
        console.log(colorObj);
        return {
          [`sl-separator-module-${this.color}`] : true
        };
      }
    },
  }
</script>

<style lang="scss">
  .sl-separatpr-module-wrapper{
    border-left: 6px solid #42b096;
    padding: 10px 10px;
    margin-top: 10px;
    background: #ecf0f5;
    margin-bottom: 10px;
    &.sl-separator-module-orange{
      border-left: 6px solid #ff782e;
    }
  }
</style>