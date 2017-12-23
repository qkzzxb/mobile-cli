<template>
  <div>
    <p  class="color-item" 
        v-for="color of showColors" :key="color.value"
        :style="{background:color.value}"
    >{{color.value}}</p>
  </div>
</template>

<script>
  export default {
    name:'rainbow',
    props: {
      num: {
        type: Number,
        default:3,
        validator: function (value) {
          return value >0 && value <=7
        }
      },
    },
    data() {
      return {
        colors:[
          {label:'红色',value:'#FF0000'},
          {label:'橙色',value:'#FF7F00'},
          {label:'黄色',value:'#FFFF00'},
          {label:'绿色',value:'#00FF00'},
          {label:'青色',value:'#00FFFF'},
          {label:'蓝色',value:'#0000FF'},
          {label:'紫色',value:'#8B00FF'}
        ],
        showColors:[]
      }
    },
    created(){
      if(this.num<0 || this.num>7){
        console.log('非法数字');
      }else{
        this.getShowColors();
      }
    },
    methods: {
      getShowColors(){
        for(let n=0;n<this.num;n++){
          let length=this.colors.length;
          let index=parseInt(Math.random()*length);
          this.showColors.push(...this.colors.splice(index,1));
        }
      }
    },
  }
</script>

<style lang="scss">
  .color-item{
    height: px2rem(60);
    text-align: center;
    // color:#fff;
  }
</style>