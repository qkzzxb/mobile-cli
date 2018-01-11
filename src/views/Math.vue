<template>
  <div>

  </div>
</template>

<script>
  console.log( 0.3 - 0.1 );                   // 0.19999999999999998
  let x = new BigNumber(0.3);
  x.minus(0.1);
  console.log(x)
  export default {
    created(){
      let person = {
        name: 'pie',
        age: '24',
        hobby: {
          games: ['lol','hubg'],
          sport: ['football', 'tableball']
        },
        speak(){
          console.log(this.name);
        }
      }
      let else1 = _.clone(person);
      console.log(else1);
      let else2 = _.cloneDeep(person);
      console.log(else2);
    }
  }
</script>

<style scoped>

</style>