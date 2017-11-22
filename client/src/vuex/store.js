import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  // dataUser: []
  items: [],
  cartshop: [],
  checkout:[]
}

const mutations= {
  resultItem(state,payload){
  console.log('payloadnya resultiem',payload)
  state.items= payload
  },
  addToCart(state,payload){
    console.log('payload',payload);
    const idItemInCart = state.cartshop.findIndex((itemInCart)=>{
      console.log('data name item ',itemInCart.nameItem);
      return itemInCart.nameItem === payload.nameItem
    })
    if(idItemInCart === -1){
      console.log('payload dari addt ocart',payload);
      payload.quantity = 1
      state.cartshop.push(payload)
    }else{
      state.cartshop[idItemInCart].quantity += 1
    }
  },
  setCart(state,payload){
    // console.log('inipayload setcart',payload)
    // console.log('carthsop',cartshop);
    state.cartshop = payload
  },
  isiCheckout(state, payload){
    let newTrans = state.cartshop.findIndex(function(thiscart){
      return thiscart._id === payload._id
    })
    if(newTrans === -1){
      payload.quantity = 1
      state.checkout.push(payload)
    }else{
      state.checkout[newTrans.quantity +=1]
    }
    console.log('checkout payload',payload);
    state.checkout.push(payload)
    // console.log('isi checkout',checkout);
  },
  resultCheckout(state,payload){
    state.checkout = payload
  }


}
const actions = {
  dataItem({commit}){
    http.get('/item')
    .then(({data})=>{
      console.log('dataItem',data)
      commit ('resultItem', data)
    })
    .catch(err =>{
      console.error(err)
    })
  },
  addCart ({commit}, data){
    console.log('hasil addcart',data);
    commit('addToCart', data)
  },
  getDataCart({commit}){
    http.get('/cart')
    .then(({data})=>{
      commit('setCart',data)
    })
    .catch(err=>{
      console.error
    })
  },
  removeDataCart ({commit}, item){
    item.quantity -=1
    if(item.quantity === 0){
      state.cartshop.splice(state.cartshop.indexOf(item),1)
    }
  },
  cartToCheckout ({commit}, item2){
    console.log('inititem2',item2);
    http.post('/transaction', item2)
    .then(({data})=>{
      commit('isiCheckout',data)
      console.log('inidata0',data);
      swal('Successfully', 'Your cart be added', 'success')
    })
    .catch(err=>{
      console.error(err)
    })
  },
  getCheckout({commit},item){
    http.get('/transaction', item)
    .then(({data})=>{
      commit('resultCheckout', data)
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
