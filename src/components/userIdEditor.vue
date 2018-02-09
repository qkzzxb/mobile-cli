<style lang="less">
  .sl-editor-textarea-user-wrapper{
    width:360px;
    padding:20px;
  }
  .sl-editor-textarea-user-main{
    border:1px solid #ccc;
    min-height: 100px;
    padding: 10px;
  }
  .sl-editor-textarea-user-header{
    display: flex;
    flex-wrap: wrap;
    .sl-editor-textarea-user-tag{
        height:32px;
        line-height: 32px;
        margin-right: 10px;
        font-size: 14px;
        position: relative;
      .sl-editor-textarea-user-tag-inner{
        min-width: 80px;
        border-bottom: 1px dotted #ff4949;
        .el-icon-close{
          color: #ff4949;
          margin-left: 2px;
        }
      }
      input{
        display: inline-block;
        height:100%;
        border: none;
        font-size: 14px;
        position: absolute;
        top:0;
        left:0;
        z-index: 100;
        width: 100%;
      }
    }
    .sl-editor-textarea-user-input{
      input{
        display:inline-block;
        width:auto;
        min-width:100px;
        width: 100px;
        border: none;
        height:32px;
        line-height: 32px;
        padding-left: 10px;
      }
    }
  }
  .sl-editor-textarea-user-footer{
    color:#ccc;
    padding:5px;
  }
</style>

<template>
  <div class="sl-editor-textarea-user-wrapper">
    <div class="sl-editor-textarea-user-main" @click="inputFocus">
      <div class="sl-editor-textarea-user-header">
        <div class="sl-editor-textarea-user-tag"
          :key="$index"
          v-for="(tag, $index) of tags">
          <span class="sl-editor-textarea-user-tag-inner">
            <span @dblclick="tagEdit(tag, $index)">{{tag}}</span>
            <i class="el-icon-close" @click.stop="tagDelete($index)"></i>
          </span>
          <input :ref="'tagEdit'+$index" v-if="$index == tagModel.index" type="text"
            v-model="tagModel.value" @keyup.space="tagComplete" @keyup.enter="tagComplete" @blur="tagComplete" @click.stop/>
        </div>
        <div class="sl-editor-textarea-user-input" v-if="tagModel.index == -1">
          <input type="text" ref="inputEdit" v-model="inputValue" @keyup.space="inputComplete" @keyup.enter="inputComplete" @blur="inputComplete">
        </div>
      </div>
    </div>
    <div class="sl-editor-textarea-user-footer">
      <p v-if="isInputRepeat" style="color:#ff4949;">标签重复</p>
      <p>以空格或回车键隔开</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'sl-editor-textarea-user',
    props: {
      value: {
        type: Array,
        required: true
      },
    },
    data(){
      return {
        tagModel:{
          index: -1,
          value:''
        },
        inputValue: '', 
        isInputRepeat: false,
        isTagRepeat:false
      }
    },
    mounted(){
      this.inputFocus();
    },
    methods: {
      inputFocus(){
        if(!this.isTagRepeat){
          this.$nextTick(() => {
            this.$refs.inputEdit.focus();
          })
        }
      },
      inputComplete() {
        this.inputValue = this.inputValue.replace(/\s*/g,'');
        let inputValue = this.inputValue.trim();
        let tagHas = this.tags.some((item) => {//input输入重复
          return item == inputValue
        })
        this.isInputRepeat = tagHas;
        if (!tagHas && inputValue) {
          this.tags.push(inputValue);
          this.inputValue = '';
          this.inputFocus();
        }
      },
      tagEdit(value, index){
        this.tagModel.index = index;
        this.tagModel.value = value;
        this.$nextTick(() => {
          this.$refs['tagEdit'+this.tagModel.index][0].focus();
        });
      },
      tagDelete(index) {
        this.tags.splice(index, 1);
      },
      tagComplete(){
        this.tagModel.value = this.tagModel.value.replace(/\s*/g,'');
        let tagValue = this.tagModel.value;
        if(tagValue){
          let tagHas = this.tags.some((item) => {//tag修改后重复
            return item == tagValue;
          })
          this.isTagRepeat = tagHas;
          this.tags.splice(this.tagModel.index, 1, tagValue);
        }else{
          this.tagDelete(this.tagModel.index);
        }
        if(!this.isTagRepeat){
          this.tagModel.index = -1;
        }
      }
    },
    computed: {
      tags: {
        get(){
          return this.value;
        },
        set(arr){
          this.$emit('input', arr);
        }
      }
    },
  }
</script>
