<template>
  <div class="upload-post-block">
    <!-- 截图页面 -->
    <transition name="slide-fade">
      <!-- post -->
      <div class="to-handle" v-if="img">
        <div class="item post clearfix">
          <div class="left fl">
            <p class="label">上传图片</p>
            <croppa 
              v-model="model.post"
              :show-remove-button="false" 
              :quality="1.5"
              :initial-image="img" 
              :accept="'image/*'" 
              :width="postWidth/2" 
              :height="postHeight/2" 
              initial-size="cover" 
              initial-position="center" 
              :prevent-white-space="true"
              @move="img_change('post')"
              @zoom="img_change('post')"
            >
            </croppa>
          </div>
          <div class="right fl">
            <p class="label">预览效果</p>
            <img class="show-demo" :src="demo.post">
          </div>
        </div>
        <!-- avatar -->
        <div class="item avatar clearfix">
          <div class="left fl">
            <p class="label">上传图片</p>
            <croppa 
              v-model="model.avatar"
              :show-remove-button="false" 
              :initial-image="img" 
              :accept="'image/*'" 
              :quality="0.8"
              :width="avatarWidth" 
              :height="avatarHeight" 
              initial-size="cover" 
              initial-position="center" 
              :prevent-white-space="true"
              @new-image-drawn="img_loaded"
              @move="img_change('avatar')"
              @zoom="img_change('avatar')"
            >
            </croppa>
            <p class="tips">
              注：滚动鼠标可缩放图片大小，同时也可拖动图片截取你想要展示的内容，缩略图将在订单信息中使用。
            </p>
          </div>
          <div class="right fl">
            <p class="label">预览效果</p>
            <img class="show-demo" :src="demo.avatar">
            <p>缩略图展示</p>
            <div class="btns">
              <button @click="cancel">返回</button>
              <button @click.once="finish">完成</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 展示页面 -->
    <div class="to-show" v-if="!img">
      <!-- 已存在 -->
      <img v-if="!demo.post" :src="post">
      <!-- 截图生产 -->
      <img v-if="demo.post" :src="demo.post">
      <!-- 提示 -->
      <div v-if="!demo.post&&!post" class="no-img">
        <h1 class="mb-50">图片</h1>
        <p class="m-fs">注：图片大小小于5M（jpg/png/gif/bmp）</p>
      </div>
      <input type="file" @change="get_img($event)">
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      postWidth:{
        type:Number,
        default:750
      },
      postHeight:{
        type:Number,
        default:430
      },
      avatarWidth:{
        type:Number,
        default:128
      },
      avatarHeight:{
        type:Number,
        default:128
      },
      post: {
        type: String
      }
    },
    data() {
      return {
        img:null,
        model:{
          post:null,
          avatar:null
        },
        demo:{
          post:null,
          avatar:null
        }
      }
    },
    created(){

    },
    methods: {
      img_loaded(){
        this.demo.post=this.model.post.generateDataUrl();
        this.demo.avatar=this.model.avatar.generateDataUrl();
      },
      img_change: _.debounce(//节流处理
        function (type) {
          type=='post'?
          this.demo.post=this.model.post.generateDataUrl():
          this.demo.avatar=this.model.avatar.generateDataUrl();
        },100
      ),
      get_img(e){
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
          this.img=e.target.result;
        }
        reader.readAsDataURL(file);
      },
      finish(){
        let option={
          header:{
            action:'F0002',
            ...this.$base,
            sessionid:this.sessionid
          },
          imageList:[
            {imageType:"image/png",imageBase64:this.demo.post.substring(22)},
						{imageType:"image/png",imageBase64:this.demo.avatar.substring(22)}
          ]
        }
        this.$http.post('', option)
        .then((res) => {
          if (res.header.code == 0) {
            this.$emit('update:post',res.data[0]);
            this.$emit('update:avatar',res.data[1]);
            this.cancel();
          } else {
            this.$message(res.header.msg)
          }
        })
      },
      cancel(){
        this.img=null;
      }
    },
    computed: {
      sessionid() {
        return this.$store.state.sessionid; 
      }
    },
  }
</script>

<style lang="scss">
  .upload-post-block{
    width:400px;
    height: 230px;
    .to-handle{
      width: 600px;
      height: 600px;
      position: fixed;
      top: 0;left: 0;bottom: 0;right: 0;
      margin:auto;
      background-color: #fff;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
      padding-left: 20px;
      z-index: 2000;
      p{
        font-size: 14px;
        padding: 20px 0;
        &.label{
          font-size: 16px;
        }
        &.tips{
          font-size: 12px;
          line-height: 17px;
          color:$grey71;
          width: 135px;
          position: absolute;
          top:63px;
          right: 0;
          padding: 0;
        }
      }
      .item{
        height: 280px;
        .left{
          width:375px;
          position: relative;
        }
        .right{
          width: 120px;
          margin-left:40px;
        }
      }
      .show-demo{
        width: 120px;
        display: block;
        border-radius: 4px;
      }
      .btns{
        display: flex;
        align-items: center;
        justify-content: space-between;
        button{
          width: 50px;
          height: 28px;
          border-radius: 4px;
          text-align: center;
          color:#fff;
          &:first-child{
            background-color: #98B7E3;
          }
          &:last-child{
            background-color: #2A5DA7
          }
        }
      }
    }
    .to-show{
      height: 100%;
      position: relative;
      box-sizing: border-box;
      .no-img{
        height: 100%;
        background: $goldc9;
        box-sizing: border-box;
        padding-top: 80px;
        color: white;
        text-align: center;
        .m-fs{
          font-size: 10px;
        }
      }
      input{
        display: block;
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        z-index: 100;
        opacity:0;
        padding: 0;
        margin: 0;
      }
      img{
        display: block;
        width:400px;
      }
    } 
  }
</style>