<template>
  <div class="sl-sms-wrap">
    <div>
      <el-button type="text" v-for="item of labelList" :key="item.value" @click="addLabel(item)">
        {{item.name}}
      </el-button>
    </div>
    <el-input id="demo" type="textarea" :rows="4" v-model="textarea">
    </el-input>
  </div>
</template>

<script>
 import { ueCustomLabelTranslate as labelList} from '@/constants/enumConstants';
  export default {
    data() {
      return {
        labelList: labelList,
        textarea:''
      }
    },
    methods: {
      addLabel(item) {
        this.setFocus(item.label)
      },
      setFocus(label){
        let obj  = document.querySelector('#demo');
        let startPos = obj.selectionStart;
        let endPos = obj.selectionEnd;
        let len = startPos + label.length; 
        // obj.setRangeText(label);
        this.textarea = this.textarea.slice(0,startPos) + label + this.textarea.slice(startPos);//兼容EDGE
        this.$nextTick(() => {
          obj.focus();
          obj.selectionStart = obj.selectionEnd = len;
        })
      }
    },
  }
</script>

<style lang="scss">
  .sl-sms-wrap{
    width: 500px;
    margin: 0 auto;
  }
</style>