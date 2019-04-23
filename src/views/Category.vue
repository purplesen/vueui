<template>

  <div id="wrapper">
      <div class="page-category" data-log="商品分类">

        <div class="page-category-wrap">

          <div class="list-wrap" id="m0" v-for="item in categories">
               <h3 class="list_title">{{item.name}}</h3>
               <ol class="list_category" >
                 <li v-for="children in item.children" @click="Click(children.id)">
                   <div class="img"><img :src="'http://images.canon4ever.com/'+children.image"></div>
                   <div class="name"><span>{{children.name}}</span></div>
                 </li>

               </ol>
          </div>

        </div>
        <Footer></Footer>
      </div>
    </div>

</template>
<script>
  import Footer from '@/components/Footer.vue'
 export default {
    components:{Footer},
   data(){
     return{
       categories:[],
     }
   },
   created() {
     this.axios.get(`http://localhost:8000/api/category`).then(res=>{
       // console.log(res)
       this.categories=res.data
     })
   },
   methods: {
      Click(id) {
        // console.log(id)
        this.$router.push({name:'category_list',params:{id:id}})

      }
   }
 }
</script>
