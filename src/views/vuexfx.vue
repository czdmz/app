<template>
  <div class="vuexfx">
    <div>vuex复习</div>
    <div>姓名：{{name}}</div>
    <div>年龄：{{age}}</div>
    <div>性别：{{sex}}</div>
    <input type="button" value="修改age" @click="setage(10)">
    <input type="button" value="修改name" @click="setname('dapeng')">
    <input type="button" value="修改sex" @click="setsex">
  </div>
</template>

<script>
// mapGetters,mapMutations映射的引入
import {mapGetters,mapMutations} from 'vuex'
  export default {
    name:'',
    props:{},
    data () {
      return {
      };
    },

    components: {},

    computed: {
        // mapGetters的使用
        // 相当于把getters中的方法写到computed中
       ...mapGetters({age:"getage",name:"getname",sex:"getsex"})
    },

    methods: {
        // mapMutations的使用
        // 相当于把mutations中的方法写到methods中
         ...mapMutations({setage:"setage",setname:'setname'}),
         setsex(){
             setTimeout(()=>{
                //actions的调用
                this.$store.dispatch('actionssetsex','女')
             },1000)
         }
    },

  }

</script>
<style lang='' scoped>

</style>