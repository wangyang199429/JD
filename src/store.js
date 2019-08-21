import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store= new Vuex.Store({
  state: {
    token:'',
    //添加到购物车
    cartarry:JSON.parse(localStorage.getItem('cartarry'))||[],
  },
  mutations: {
    //设置vue的token
    settoken(state,token){
      state.token=token
    },
    //添加商品到购物车
    tocart(state,tag){
      let goods=state.cartarry.find(v=>v.title==tag.label)
      if(goods){
        goods.cartCount+=1
      }else{
        state.cartarry.push({title:tag.label,cartCount:1})
      }
    },
    cartadd(state,index){
      state.cartarry[index].cartCount++
    },
    cartremove(state,index){
      if(state.cartarry[index].cartCount>1){
          state.cartarry[index].cartCount--
      }else{
          if(window.confirm("确定移除商品？")){
              state.cartarry.splice(index,1)
          }
      }
    },
    cartclear(state){
      if(window.confirm("确认清空购物车？")){
        state.cartarry=[]
      }
      
    }
  
  },
  actions: {

  },
  //相当于vue的计算属性
  getters:{
    countsum:state=>{
      let num=0;
      state.cartarry.forEach(v=>{
        num+=v.cartCount
      })
      return num
    }
  }
})
//监听每次调研mutatons的时候，都会进这个方法，然后做一些自己想做的处理
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartarry',JSON.stringify(state.cartarry))
})
export default store