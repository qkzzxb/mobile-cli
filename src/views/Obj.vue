<template>
  <div>

  </div>
</template>

<script>
  /* var obj = { foo: "bar", baz: 42 }; 
  var map = new Map(Object.entries(obj));
  map.set('main',false);
  console.log(map); // Map { foo: "bar", baz: 42 } */
  var o, d;
o = {};
o.bar = 42 ;
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptors(o);
console.log(d);
  export default {
    
  }
</script>