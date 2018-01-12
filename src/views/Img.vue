<template>
  <div>
    <input type="file" @change="submit">
  </div>
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