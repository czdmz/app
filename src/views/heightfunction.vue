<template>
  <div class="heightfunction">
      <input type="button" value="返回" @click="$router.back()">
        我是heightfunction页面
         <input type="button" value="点击执行函数" @click="go">
  </div>
</template>

<script>

  export default {
    name:'',
    props:{},
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    methods: {
        go(){
        var arr=[1,2,3,4,5];
        var obj={
            name:"qinhao",
            age:"23",
            sex:"男"
        }
        // <!-- filter的使用 -->
        // var qwe=arr.filter((val,index)=>{
        //        return val>3
        // })
        // <!-- map的使用 -->
    //    var qwe=arr.map((item,index)=>{
    //         return item+=10;
    //     })
    //     console.log(arr)
        // <!-- find的使用 -->
    //    var qwe= arr.find((item,index)=>{
    //         return item>3
    //     })
    //     console.log(qwe)
        // <!-- reduce的使用 -->
    // var qwe=arr.reduce((init,index)=>{
    //      return init+index
    // },10)
    // console.log(qwe)
        // <!-- foreach的使用-->
    //    arr.forEach((val,index)=>{
    //        arr[index]+=10
    //     })
    //     console.log(arr)
        // obj.forEach((val,index)=>{
        //  console.log(val)
        // })
        // for(let item of arr){
        //     console.log(item)
        // }
        }
    },

  }

</script>
<style lang='' scoped>

</style>