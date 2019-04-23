<template>
    <div id="wrapper">

        <div class="cart-index" v-if="carts.length>0">
            <div class="cart-index-wrap" >
               <Carts></Carts>
            <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <!-- Navbar -->
               <Navbar></Navbar>
            </div >

        </div>
        <div class="cart-index" v-else>
            <div style="height:1rem;"></div>
            <div class="cart-index-wrap">
                <div class="empt">
                    <div class="b3">
                        <router-link to="/category"  class="ui-button ui-button-disable">
                            <span>全部商品</span>
                        </router-link>
                        <a href="/1/#/index/recommend" class="ui-button">
                            <span>精选商品</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Carts from '@/components/Carts.vue'
    import Navbar from "../components/Navbar";
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        components:{Carts,Navbar},
        name: "shop_list.vue",
        computed:mapState([
            'carts'
        ]),
        created(){
            this.getAllcart()
        },
        methods: {
            getAllcart(){
                this.$store.dispatch('getAllcart')
            }
        }
    }
</script>

<style scoped>

</style>