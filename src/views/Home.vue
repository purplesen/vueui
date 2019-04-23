<template>
  <div class="home">
    <div class="pic_wrap">
      <ul class="pic">
        <li ><img src="../assets/bing-1.jpg"></li>
      </ul>
    </div>
    <ul class="banner">
      <li v-for="banner in banners"><img :src="'http://images.canon4ever.com/'+banner.image"></li>
    </ul>
    <ul class="nav">
      <li class="nav-list" v-for="recommend in recommends">
        <img :src="'http://images.canon4ever.com/'+recommend.image" >
        <div class="text">
          <span class="title">{{recommend.name}}</span><br>
          <span class="descripiton">{{recommend.description}}</span>
          <br>
          <span class="price">{{recommend.price}}</span>
        </div>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
 import Footer from '@/components/Footer.vue'
export default {
   components:{Footer},
 data() {
   return{
     banners:[],
    recommends:[],
   }
 },
  created(){
    this.axios.get(`http://localhost:8000/api`).then(res=>{
      console.log(res)
      this.banners=res.data.banners
      this.recommends=res.data.recommends
    })
  },
  methods:{

  }
}
</script>
<style scoped lang="scss">
  ul{
    list-style: none;
    margin: 0;
  }
  .pic{
    img{
      width: 100%;
      height: 200px;
    }
  }
  .banner{
    display: flex;
    li{
      flex: 1;
      border: 3px solid #F0F0F0;

    }
    li:first-child{
      border-left: none;
    }
    li:last-child{
      border-right: none;
    }
  img{
    width: 100%;
  }
  }
  .nav{
    display: flex;
    flex-direction: column;
    .nav-list{
      flex: 1;
      display: flex;
      padding: 2px;
      border-top: 2px solid #F0F0F0;
      img{
        flex: 1;
        width: 150px;
        height: 150px;
      }
      .text{
        flex: 2;
        margin-right: 5px;
        .title{
          font-weight: bold;
          color: black;
          line-height: 2em;
        }
        .price{
          color: red;
        }
      }
    }
  }
  .home{
    overflow: hidden;
  }


</style>

