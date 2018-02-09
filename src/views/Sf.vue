<style lang="scss">
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
      .sl-editor-textarea-user-tag-inner{
        min-width: 80px;
        .el-icon-close{
          color:red;
        }
      }
      input{
        display: inline-block;
        width: 80px;
        min-width: 80px;
        height:100%;
        border: none;
        font-size: 14px;
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
          :key="tag"
          v-for="(tag, $index) of tags">
          <span v-if="$index != tagModel.index" class="sl-editor-textarea-user-tag-inner">
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
      <p v-if="isRepeat">标签重复</p>
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
        tags: ['标签一', '标签二', '标签三'],
        tagModel:{
          index: -1,
          value:''
        },
        inputValue: '', 
        isRepeat: false
      }
    },
    mounted(){
      this.inputFocus();
    },
    methods: {
      inputFocus(){
        this.$nextTick(() => {
          this.$refs.inputEdit.focus();
        })
      },
      inputComplete() {
        let inputValue = this.inputValue.trim();
        let tagHas = this.tags.some((item) => {
          return item == inputValue
        })
        this.isRepeat = tagHas;
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
        let value = this.tagModel.value.trim();
        if(value){
          this.tags.splice(this.tagModel.index, 1, value);
        }else{
          this.tagDelete(this.tagModel.index);
        }
        this.tagModel.index = -1;
        this.$nextTick(() => {
          this.$refs.inputEdit.focus();
        })
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
