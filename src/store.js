import Vue from 'vue'
import Vuex from 'vuex'
import axios from './http'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carts:[],
        changing:false,
    },
    getters:{
        total(state){
            let num=0
            let price=0
            state.carts.map(item=>{
                // console.log(item.num)
                num+=item.num  //累加
                price+=num*item.product.price
            })
            return {num:num,price:price}
        }
    },
    mutations: {
        setCarts(state,carts){
            state.carts=carts
            // console.log(state.carts)
        },
        changeStatus(state,status){
            this.state.changing=status
        },
        changeNum(state, payload) {
            payload.type=='inc' ? payload.cart.num++ : payload.cart.num-- // 前台改变cart.num
        },
        handelDelete(state, trash) {
            console.log(trash.index)
            state.carts.splice(trash.index,1)
        }
    },
    actions: {
        getAllcart(context){
            axios.get(`http://localhost:8000/api/cart`).then(res=>{
                // console.log(res)
                context.commit('setCarts',res.data.carts)
            })
        },
        changeNum({commit},payload){
            if (this.state.changing==true){
                return
            }
            // console.log(change.cart.num)
            if (payload.cart.num==1&&payload.type=='dec'){
                return
            }
            commit('changeStatus',true)
            axios.patch(`http://localhost:8000/api/cart?cart_id=${payload.cart.id}&type=${payload.type}`).then(res=>{
                console.log(res)
                commit('changeStatus',false)
                commit('changeNum',payload)

            })

        },
        handelDelete({commit},trash){
            console.log(trash.cart)
            axios.delete(`http://localhost:8000/api/cart?cart_id=${trash.cart.id}`).then(res=>{
                commit('handelDelete',trash)
            })
        }
    }
})
