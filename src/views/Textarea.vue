<template>
  <div class="sl-sms-wrap">
    <div>
      <el-button type="text" v-for="item of labelList" :key="item.value" @click="addLabel(item.label)">
        {{item.name}}
      </el-button>
    </div>
    <el-input id="demo" type="textarea" :rows="4" v-model="textarea">
    </el-input>
    <sl-separator-color color="orange"></sl-separator-color>
  </div>
</template>

<script>
 import { ueCustomLabelTranslate as labelList} from '@/constants/enumConstants';
 import slSeparatorColor from '@/components/Colors';
  export default {
    components: {
      slSeparatorColor
    },
    data() {
      return {
        labelList: labelList,
        textarea: '12345678910111213141516171819120'
      }
    },
    methods: {
      addLabel(label){
        let textarea  = document.querySelector('#demo');
        let startPos = textarea.selectionStart;
        let endPos = textarea.selectionEnd;
        let len = startPos + label.length; 
        // textarea.setRangeText(label);
        this.textarea = this.textarea.slice(0,startPos) + label + this.textarea.slice(startPos);//兼容EDGE
        this.$nextTick(() => {
          textarea.focus();
          textarea.selectionStart = textarea.selectionEnd = len;
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