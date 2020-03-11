<template>
  <div class="son">
      <h1>son</h1>
      <!-- 具名插槽与向父级暴露数据 -->
        <slot name='top' :sondata='{obj,sex}'></slot>
        <slot name='bottom'></slot>
        <input type="text" :value='value' @input='$emit("input",$event.target.value)'>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
        value:""
    },
    data () {
      return {
          obj:{
              name:"qinhao",
              age:12
          },
          sex:'男'
      };
    },

    components: {},

    computed: {},

    methods: {},

  }

</script>
<style lang='' scoped>

</style>