<template>
    <div class="page-address-list" data-log="地址列表">

        <div class="address-manage">
            <div class="ui-card">
                <ul class="ui-card-item ui-list" v-for="item in address">
                    <li class="ui-list-item identity" @click="choseAddress(item.id)">
                        <a href="javascript:;">删除</a>
                        <span class="consignee">{{item.name}}</span>
                        <span>{{item.tel}}</span>
                    </li>
                    <li class="ui-list-item edit" onclick="location.href='/checkout/new_address'">
                        <p>{{address.pca}}</p>
                        <p>{{address.detail}}</p>
                    </li>
                </ul>
            </div>
        </div>


        <div class="add"><a href="#/checkout/new_address" class="ui-button ui-button-active"><span>新建地址</span></a></div>
        <div class="popup-risk-check"></div>
    </div>
</template>

<script>
    export default {
        name: "Address",
        data(){
            return{
                address:[]
            }
        },
        created(){
            this.axios.get('api/address').then(res=>{
                console.log(res)
                this.address=res.data
            })
        },
        methods:{
            choseAddress(address_id){
                console.log(address_id)
                this.axios.patch('api/address',{address_id:address_id}).then(res=>{
                    this.$router.push({name:'checkout'})
                })
            }
        }
    }
</script>

<style scoped>

</style>