<template>
    <div>
        <div 
        v-for="(item,index) in cartarr" :key="index"
        class="goods"
        >
        {{item.title}}
        <div class="goodsright">
            <i class="cubeic-remove" @click="cartremove(index)"></i>
            <span>{{item.cartCount}}</span>
            <i class="cubeic-add" @click="cartadd(index)"></i>
        </div>
        </div>
        <cube-button style="margin:10px 0">下单</cube-button>
        <cube-button style="margin:10px 0" @click="cartclear()">清空购物车</cube-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            // cartarr:[
            //     {title:'小米手机',cartCount:5},
            //     {title:'华为手机',cartCount:6}
            // ]
        }
    },
    computed:{
        ...mapState({
            cartarr:state=>state.cartarry
        })
    },
    methods:{
        cartadd(index){
            this.$store.commit('cartadd',index)
        },
        cartremove(index){
            this.$store.commit('cartremove',index)
        },
        cartclear(){
            this.$store.commit('cartclear')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left 
        .goodsright
            float right
        i 
            font-size 18px
</style>