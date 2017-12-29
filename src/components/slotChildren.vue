<template>
  <div class="text-center">
    <h1>这是我的电脑</h1>
    <main>
      <slot :gpu="gpu"></slot>
      <slot :cpu="cpu"></slot>
    </main>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cpu:'',
        gpu:'',
        cpuArr:['i5 7500','Ryzen 5 1500X','Ryzen 7 1700','i7 7700K','i7 8700K'],
        gpuArr:['七彩虹iGame1050Ti 烈焰战神U-4GD5','影驰GeForce GTX 1060 GAMER 6GB','索泰GeForce GTX 1070-8GD5 至尊Plus OC','微星GeForce GTX 1060 GAMING X 6G','耕升GTX 1080Ti 追风版-11G','铭瑄 GT 1030 变形金刚2G','华硕ROG STRIX-GTX 1070-O8G-GAMING']
      }
    },
    created(){
      this.setCpuGpu();
    },
    methods: {
      setCpuGpu() {
        setInterval(()=>{
          this.cpu=this.cpuArr[parseInt(this.cpuArr.length * Math.random())];
          this.gpu=this.gpuArr[parseInt(this.gpuArr.length * Math.random())];
        },800)
      }
    },
  }
</script>

<style lang="scss">

</style>