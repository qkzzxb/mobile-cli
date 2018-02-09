<template>
  <div>
    ver
  </div>
</template>

<script>
// let aresult;
// while((aresult = re.exec(astr)) !== null){
//   console.log(aresult);
// }
// let areg = /\{+(.+?)\}+/g; 
let areg = /.+?(?=\})/g; 
let astr = '亲爱的{ user_name }}},你{{{ user2_name }的{{ 美好 }}已经抵达！';
// let areg = /[0-9a-z]{2}(?=aa)/g; 
// let areg = /(?<=aa)[0-9a-z]{2}/g; 
// let astr = '12332aa438aaf';
console.log(areg.exec(astr));
console.log(astr.match(areg));
  let str = '亲爱的{ user_name },你{ user2_name }的{ 美好 }已经抵达！';
  let list = ['user_name','user2_name','美好'];
  let reg = /\{(.+?)\}/g; 
  // let reg = /\{[^\{\}]*\}/g; 
  let reg2 = /^[^\{]*\{[^\{\}]*\}[^\}]*$/;
  function verStr(arr){
    for(let item of arr){
      let result = reg2.test(item);
      if(!result){
        return [false, `${item}标签有错误`];
      }
    }
    return [true];
  }
  function doInit(){
    let arr = str.match(reg);
    let verResult = verStr(arr);
    if(verResult[0]){
      let allHas =arr.every((item) =>{
      /* let itemVal = item.replace(/\{|\}|\s/g, '');//获取变量名
      let oneHas = list.some((label) =>{
        return label == itemVal;
      }) */
      list.forEach((item) => {
        if(arr.indexOf(item)<0){
          console.log(`${item}标签不在变量列表中`);
        }
      })
      if(!oneHas){
          
        }
        return oneHas;
      })
      if(allHas){
        console.log(`该模板可用`);
      }
    }else{
      console.log(verResult[1])
    }
  }
  // doInit();
</script>