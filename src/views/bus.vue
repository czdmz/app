<template>
  <div class="bus">
    <!-- localStorage与sessionstorage复习-->
    <!-- localStorage.setItem('key','val')
    localStorage.removeItem("key")
    localStorage.getItem("key") -->
    <!-- sessionStorage.setItem()
    sessionStorage.getItem()
    sessionStorage.removeItem('key');
    sessionStorage.clear(); -->
    <!-- 事件总线复习 -->
    <div>事件总线页面</div>
    <input type="button" value="发射事件总线事件" @click="tobus">
    <backbotton></backbotton>
  </div>
</template>

<script>
import backbotton from 'components/backbutton'
  export default {
    name:'',
    props:{},
    data () {
      return {

      };
    },

    components: {
        backbotton
    },

    computed: {},

    methods: {
        tobus(){
            // 事件总线的发射
            this.$bus.$emit('tobus','我是bus页面传递过来的');
        }
    },

  }

</script>
<style lang='' scoped>

</style>