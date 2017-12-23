<template>
  <div>
    <slot-children>
      <h1 slot="header">H这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">F这里有一些联系信息</p>
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