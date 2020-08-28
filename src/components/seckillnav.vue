<template>
    <div class="whole">
        <router-view></router-view>
        <footer>
                <div class="nav_img">
                    <router-link to="/seckill">
                        <img src="../assets/images/seckill_nav/miaosha_on.png" alt="" class="pic">
                        <img src="../assets/images/seckill_nav/miaosha.png" alt="" class="active">
                        <span class="txt">秒杀</span>
                    </router-link>
                </div>
                <div class="nav_img">
                    <router-link to="/brandkill">
                        <img src="../assets/images/seckill_nav/brand_on.png" alt="" class="pic">
                        <img src="../assets/images/seckill_nav/brand.png" alt="" class="active">
                        <span class="txt">品牌秒杀</span>
                    </router-link>
                </div>
                <div class="nav_img">
                    <router-link to="/pintuan">
                        <img src="../assets/images/seckill_nav/pintuan_on.png" alt="" class="pic">
                        <img src="../assets/images/seckill_nav/pintuan.png" alt="" class="active">
                        <span class="txt">拼团</span>
                    </router-link>
                </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{

    }
}
</script>

<style scoped>
    .whole{
        overflow: hidden;
    }
    footer{
        width: 100%;
        height: 60px;
        background-color: white;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .nav_img{
        width: 33.3333%;
        height: 100%;
        float: left;
        text-align: center;
        padding-top: 2%;
    }
    .nav_img img{
        height: 50%;
        margin: 0 auto;
    }
    .nav_img a span{
        font-size: 12px;
        margin-top: 2%;
        display: block;
    }
    .nav_img a{
        text-decoration: none;
    }
    .pic{
        display: none;
    }
    .router-link-active .pic{
        display: inline-block;
    }
    .active{
        display: inline-block;
    }
    .router-link-active .active{
        display: none;
    }
    .txt{
        color: black;
    }
    .router-link-active .txt{
        color: red;
    }
</style>