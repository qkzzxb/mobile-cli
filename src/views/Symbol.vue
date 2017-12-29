<template>
  <div>

  </div>
</template>

<script>
  /* let s1 = Symbol('foo');
  let s2 = Symbol('foo');
  let demo = {
    [s1]: 's1',
    [s2]: 's2'
  }
  console.log(demo[s1]);
  console.log(demo[s2]); */
  const COLOR_RED    = Symbol();
  const COLOR_GREEN  = Symbol();
  export default {
    created(){
      console.log(this.getComplement(COLOR_RED));
    },
    methods: {
      getComplement(color) {
        switch (color) {
        case COLOR_RED:
          return 'red';
        case COLOR_GREEN:
          return 'green';
        default:
          return('Undefined color');
        }
      }
    },
  }
</script>

<style>

</style>