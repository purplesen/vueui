<template>
    <div class="cart-list">
        <ul>
            <li class="item" v-for="(item,index) in carts">
                <div class="ui-box">
                    <div class="imgProduct"><a href="/1/#/product/view?product_id=1153200008"><img
                            :src="'http://images.canon4ever.com/'+item.product.image"></a></div>
                    <div class="info ui-box-flex">
                        <div class="name">
                            <span>{{item.product.name}}</span>
                        </div>
                        <div class="price">
                            <p>
                                <span>售价：</span><span>{{item.product.price}}</span>
                                <span>合计：</span><span>{{item.num*item.product.price}}</span>
                            </p>
                            <div class="tip">
                                <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                            </div>
                        </div>
                        <div class="num">
                            <div class="xm-input-number">
                                <div class="input-sub" @click="changeNum(item,'dec')"></div>
                                <div class="input-num"><span>{{item.num}}</span></div>
                                <div class="input-add active"  @click="changeNum(item,'inc')"></div>
                            </div>
                            <div class="delete" @click="handelDelete(item,index)">
                                <a href="javascript:;">
                                    <span class="icon-iconfontshanchu"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="append"></div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        computed:mapState([
            'carts'
        ]),
        created(){
            this.getAllcart()
        },
        methods: {
            getAllcart(){
                this.$store.dispatch('getAllcart')
            },
            changeNum(cart,type){
                // console.log(type)
                this.$store.dispatch('changeNum',{cart:cart,type:type})
            },
            handelDelete(cart,index){
                console.log(index)
                this.$store.dispatch('handelDelete',{cart:cart,index:index})
            }
        }
    }
</script>