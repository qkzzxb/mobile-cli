<template>
  <div>
    <slot-children>
      <h3 slot-scope="scope">{{scope.cpu}}<br>{{scope.gpu}}</h3>
    </slot-children>
  </div>
</template>

<script>
  import slotChildren from '@/components/slotChildren'
  export default {
    components:{slotChildren}
  }
</script>

<style lang="scss">
  .c-red{
    color:red
  }
  .c-blue{
    color:blue;
  }
</style>