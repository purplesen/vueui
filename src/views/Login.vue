<template>
    <div class="wrapper">
        <div class="title"><h4>账号登录</h4></div>
        <form class="login" @submit.prevent="onSubmit">
            <input v-model="customer.username" placeholder="邮箱/手机号">
            <br>
            <input v-model="customer.password" type="password" placeholder="密码">
            <br>
            <input class="submit" type="submit" value="登录" >
        </form>

        <div class="other_login_type">
            <span>其他登录方式</span><br>

        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                customer:{},
            }
        },
        methods:{
            onSubmit(){
                const data={
                    grant_type:'password',
                    client_id:1,
                    client_secret:'DI4TzBdeOQw6vRot5zHP3IrvSwEk8nBSgSNHpSzd',
                    username:this.customer.username,
                    password:this.customer.password
                };
                this.axios.post(`http://localhost:8000/oauth/token`,data).then(res=>{
                    console.log(res)
                    if (res.status==200){ //登录验证通过
                        localStorage.token_type=res.data.token_type ;  //本地存储登录信息
                        localStorage.access_token=res.data.access_token
                        this.$router.push({name:'shop_list'})
                    }

                })
            }
        }
    }
</script>

<style scoped lang="scss">
.wrapper{
    .title{
        h4{
            font-size: 30px;
            color:black ;
        }
    }
    .login{
        display: flex;
        flex-direction: column;
        input{
            flex: 1;
            height: 24px;
            line-height: 24px;
            padding: 20px;
            margin: 10px 30px;
            border: 1px solid #FF7F24;
            font-size: 20px;
        }
        .submit{
            background-color: #FF7F24;
            color: #FFFFFF;
            /*line-height: 28px;*/
            /*height: 30px;*/
            /*font-size: 28px;*/
            text-align: center;
        }
    }
    .other_login_type{

    }

}
</style>