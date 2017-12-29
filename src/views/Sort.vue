<template>
  <div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageList:[
          {name: "richText-1514174540857mB56Pw6dJO_1500_1278.jpg", original: "一.jpg", size: "99697", state: "SUCCESS", type: ".jpg"},
          {name: "richText-1514174541153jbXRUEXSoS_375_264.jpg", original: "4.jpg", size: "99697", state: "SUCCESS", type: ".jpg"},
          {name: "richText-1514174540247HEOWebETlB_1363_1600.jpg", original: "1.jpg", size: "99697", state: "SUCCESS", type: ".jpg"},
          {name: "richText-1514174540619win35ofUrU_375_255.jpg", original: "2.jpg", size: "99697", state: "SUCCESS", type: ".jpg"}
        ]
      }
    },
    created(){
      console.log(this.imageList.sort(this.sort));
    },
    methods: {
      sort(obj1,obj2) {
        let num1=Number(obj1.original.substring(0,obj1.original.lastIndexOf('.')));
        let num2=Number(obj2.original.substring(0,obj2.original.lastIndexOf('.')));
        if(isNaN(num1) || isNaN(num2)){
          return 0;
        }else{
          return num1-num2;
        }
      },
    },
  }
</script>

<style scoped>

</style>