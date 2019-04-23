<template>
    <div id="wrapper">
        <div class="page-list" data-log="商品列表">

            <div class="header">
                <div class="left">
                    <router-link to="/category" class="home"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></router-link>
                </div>
                <div class="tit"><h2 data-log="HEAD-标题-商品列表"><span class="title">商品列表</span></h2></div>

                <div class="right">
                    <a href="/1/#/search/index">
                        <div class="icon icon-search"></div>
                    </a>
                </div>
            </div>

            <ol class="version">
                <li v-for="category in categories" >
                    <a class="version-item" >
                        <div class="version-item-img" @click="Click(category.id)"><img
                                :src="'http://images.canon4ever.com/'+category.image" >
                        </div>
                        <div class="version-item-intro">
                            <div class="version-item-name"><p>{{category.name}}</p></div>
                            <div class="version-item-intro-price"><span>{{category.price}}</span></div>
                        </div>
                    </a>
                </li>
            </ol>
            <Footer></Footer>

        </div>
    </div>
</template>

<script>
    import Footer from '@/components/Footer.vue'
    export default {
        components:{Footer},
        name: "category_list.vue",
        data() {
            return {
                categories:[],
            }
        },
        created(){
           let id=this.$route.params.id
            this.axios.get(`http://localhost:8000/api/product/list?id=${id}`).then(res=>{
                this.categories=res.data
            })
        },
        methods: {
            Click(id) {
                // console.log(id)
                this.$router.push({name:'product',params:{id}})
            }
        }
    }
</script>

<style scoped>

</style>