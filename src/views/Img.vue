<template>
  <el-upload
  class="upload-demo"
  drag
  action="/pie/upload"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>

<script>
  import lrz from 'lrz';
  export default {
    created(){
    },
    methods: {
      submit(e) {
        let file = e.target.files[0];
        lrz(file)
        .then(function (rst) {
            console.log(rst);
        })
        .catch(function (err) {
        })
        .always(function () {
        });
      }
    },
  }
</script>