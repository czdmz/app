import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      name:"qinhao",
      age:23,
      sex:"男"
  },
  mutations: {
    setage(state,val){
      state.age=val;
    },
    setname(state,val){
      state.name=val;
    },
    setsex(state,val){
      state.sex=val;
    }
  },
  actions: {
    actionssetsex(context,val){
      context.commit("setsex",val)
    }
  },
  modules: {

  },
  getters:{
    getage(state){
      return state.age
    },
    getname(state){
      return state.name
    },
    getsex(state){
      return state.sex
    }
  }
})
