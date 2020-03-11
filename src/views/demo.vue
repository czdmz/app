<template>
  <div class="demo">
      <h1>demo</h1>
      <input type="text" v-model="text">
      <input type="button" value="添加" @click='push'>
      <ul class="list">
          <li v-for="(val,index) in data" :key='index'>{{val}}</li>
      </ul>
      <son v-model="soninput">
          <!-- 具名插槽的使用 -->
          <template v-slot:top>
               <h3>我是top</h3>
          </template>
          <template v-slot:bottom>
            <h3>我是bottom</h3>
          </template>
          <!-- 通过插槽访问子级组件的数据 -->
           <template v-slot:top='objdata'>
               <div>{{objdata.sondata.obj.name}}</div>
               <h3>我是top</h3>
          </template>
          <template v-slot:bottom>
            <h3>我是bottom</h3>
          </template>
      </son>
      <!-- 通过路由的name导航；通过params传值 -->
      <input type="button" value="跳转到demo2,name" @click='$router.push({name:"demo2",params:{name:"qinhao"}})'>
        <!-- 通过路径path导航,通过query传值-->
      <input type="button" value="跳转到demo2,path" @click='$router.push({path:"/demo2",query:{name:"qinhao"}})'>

      <input type="button" value="更改value" @click='soninput="更改了"'>

      <!-- mixin混入 -->


  </div>
</template>

<script>
import son from 'components/son.vue'
import {mixin} from 'common/mixin.js'
  export default {
    name:'demo',
    props:{},
    data () {
      return {
          data:['1','2','3'],
          text:'',
          soninput:'我是秦豪'
      };
    },
    // 混入方式
    mixins: [mixin],
    watch:{
        soninput(val){
            console.log(val)
        }
    },
    components: {
        son
    },

    computed: {},

    methods: {
        push(){
            if( this.text !=''){
                 this.data.push(this.text)
           this.text='';
            }
        },
        change(val){
            console.log(val)
        }
    },

  }

</script>
<style lang='stylus' scoped>
.demo
    .list li
        color :blue
</style>