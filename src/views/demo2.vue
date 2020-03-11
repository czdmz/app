<template>
  <div class='demo2'>
    我是demo2
    <!-- 页面的返回 -->
    <input type="button" value='返回' @click='$router.back()'>
    <!-- 绑定class与style的方式 -->
    <!-- 方式1 -->
    <!-- <div :class="{active:isactive}">动态绑定我的样式方式1</div> -->
    <!-- 方式2 -->
    <!-- <div :class="[btn,isactive?'active':'']">动态绑定我的样式方式2</div> -->
    <input type="button" value="点击更换样式" @click="isactive=!isactive">
    <!-- 导航到heightfunction -->
    <input type="button" value="导航到heightfunction" @click="$router.push('/heightfunction')">
    <input type="button" value="前往事件总线页面" @click="$router.push('/bus')">
    <input type="button" value="前往事件vuexfx页面" @click="$router.push('/vuexfx')">
  </div>
</template>

<script>
import {mixin} from 'common/mixin.js'
import fo from 'common/module'
  export default {
    name:'demo2',
    props:{},
    data () {
      return {
          isactive:true,
          btn:'btn'
      };
    },
    created(){
        // console.log(this.$route.query)
        // console.log(this.$route.params)
        // 事件总线的监听
        this.$bus.$on('tobus',this.tobus);
        fo();
    },
    mixins:[mixin],
    mounted(){
    },
    components: {},

    computed: {},

    methods: {
      tobus(val){
        console.log(val)
      }
    },

  }

</script>
<style lang='stylus' scoped>

.active
    color:red
.btn
    font-size :50px
</style>