<template>
    <div class="bottom-submit ui-box">
        <div class="price" ><span>共{{total.num}}件 金额：</span><br><strong>{{total.price}}</strong><span>元</span></div>
        <div class="btn"><router-link to="/category" class="ui-button ui-button-disable"
        ><span>继续购物</span></router-link></div>
        <div class="btn"><router-link to="checkout" class="ui-button"
                            ><span>去结算</span></router-link></div>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "Navbar",
        computed:{
            carts(){
                return this.$store.state.carts
            },
            total() {
                return this.$store.getters.total
            }
        },


        created(){
            this.getAllcart()
        },
        methods:{
            getAllcart(){
                this.$store.dispatch('getAllcart')
            }
        }
    }
</script>
