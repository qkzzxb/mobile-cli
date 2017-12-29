<script>
  export default {
    name:'rainbow',
    props: {
      num: {
        type: Number,
        default: 3,
        validator: function (value) {
          return value >0 && value <=7
        }
      }
    },
    render(){
      let componentList=[
        <div style = {{ height: '30px', backgroundColor: '#FF0000'}}>红色</div>,
        <div style = {{ height: '30px', backgroundColor: '#FF7F00'}}>橙色</div>,
        <div style = {{ height: '30px', backgroundColor: '#FFFF00'}}>黄色</div>,
        <div style = {{ height: '30px', backgroundColor: '#00FF00'}}>绿色</div>,
        <div style = {{ height: '30px', backgroundColor: '#00FFFF'}}>青色</div>,
        <div style = {{ height: '30px', backgroundColor: '#0000FF'}}>蓝色</div>,
        <div style = {{ height: '30px', backgroundColor: '#8B00FF'}}>紫色</div>,
      ]
      let result=[];
      for(let n = 0 ; n < this.num ; n++ ){
          result.push(componentList.splice( parseInt(Math.random() * componentList.length),1));
        }
      return(
        <div class="colors">
          {result}
        </div>
      )
    }
  }
</script>

<style lang="scss">
  .colors{
    font-size: 16px;
    line-height: 30px;
    text-align: center;
  }
</style>