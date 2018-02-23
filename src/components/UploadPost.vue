<template>
  <div class="upload-img-croppa-wrap">
    <!-- 截图页面 -->
    <el-dialog
      title="上传图片"
      :visible.sync="dialogVisible"
      width="80%">
      <div class="upload-img-croppa-inner">
        <croppa 
          v-model="model"
          :show-remove-button="false" 
          :quality="4"
          :initial-image="img" 
          :accept="'image/*'" 
          :width="width/2" 
          :height="height/2" 
          initial-size="cover" 
          initial-position="center" 
          :prevent-white-space="true">
        </croppa>
        <p class="tips">注：滚动鼠标可缩放图片大小，同时也可拖动图片截取你想要展示的内容。</p>
        <el-button-group style="margin-left: auto;">
          <el-button type="primary" @click="finish">保存</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-button-group>
      </div>
    </el-dialog>
    <!-- 展示页面 -->
    <div class="upload-img-croppa-else" v-if="!dialogVisible" :style="{width:width/2 + 'px', height:height/2 + 'px'}">
      <!-- 已存在 -->
      <img v-if="valueCopy && !demo" :src="valueCopy">
      <!-- 截图生产 -->
      <img v-else-if="valueCopy && demo" :src="demo">
      <!-- 提示 -->
      <div v-else-if="!demo && !valueCopy" class="no-img">
        <p>注：图片大小小于5M（jpg/png/gif/bmp）</p>
      </div>
      <input type="file" @change="get_img($event)">
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      width: {
        type: Number,
        default: 750
      },
      height: {
        type: Number,
        default: 430
      },
      value: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        model: null,
        img: null,
        demo: null
      };
    },
    methods: {
      get_img(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = e => {
          this.img = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      finish() {
        // this.demo = 'https://vuefe.cn/images/stdlib.png';
        // this.valueCopy= 'https://vuefe.cn/images/stdlib.png';
        let base64 = this.img.replace(/data:image\/jpe?g;base64,|/g,'');
        let params = {
          base64 : base64
        }
        this.cancel();
        this.$http.post('/api/upload/v2', params)
        .then((res) => {
          this.demo = this.img;
          this.valueCopy= res.url;
        })
      },
      cancel() {
        this.dialogVisible = false;
      }
    },
    computed: {
      valueCopy: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit("input", val);
        }
      },
      dialogVisible:{
        get(){
          return !!this.img;
        },
        set(bool){
          if(!bool){
            this.img = null;
          }
        }
      }
      // user_id() {
      //   return this.$store.state.uid;
      // }
    }
  };
</script>

<style lang="scss">
.upload-img-croppa-wrap {
  display: inline-block;
  .upload-img-croppa-inner {
    background-color: #fff;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    p {
      font-size: 14px;
      padding: 20px 0;
      &.tips {
        line-height: 17px;
        color: $grey71;
        width: 100%;
      }
    }
    .show-demo {
      display: block;
      border-radius: 4px;
    }
  }
  .upload-img-croppa-else{
    min-height: 100px;
    min-width: 100px;
    box-sizing: border-box;
    position: relative;
    .no-img {
      display: flex;
      width: 100%;
      height: 100%;
      background: $goldc9;
      box-sizing: border-box;
      padding: 80px 20px 20px;
      color: white;
      p{
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 1.5;
        height: 21px;
        align-self: flex-end;
      }
    }
    input {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      opacity: 0;
      padding: 0;
      margin: 0;
    }
    img {
      display: block;
      width: 400px;
    }
  }
}
</style>