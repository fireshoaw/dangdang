<template>
<div>
    <div><router-view></router-view></div>
    <div id="footer-nav">
        
        <ul>
            <li v-for="(item,index) in list">
                <router-link :to="item.path">
                <img :src="item.src" alt="" class="src">
                <img :src="item.pic" alt="" class="pic">
                </router-link>
                </li>
        </ul>
    </div>
    
</div>
</template>

<script>
export default {
        data(){
            return{
                scroll:0,
                list:[
                    {
                        path:'/index',
                        src:'./src/assets/images/index/nav/index.png',
                        pic:'./src/assets/images/index/nav/index_s.png'
                    },{
                        path:'/type',
                        src:'./src/assets/images/index/nav/type.png',
                        pic:'./src/assets/images/index/nav/type.png'
                    },{
                        path:'/like',
                        src:'./src/assets/images/index/nav/buy.png',
                        pic:'./src/assets/images/index/nav/buy_s.png'
                    },{
                        path:'/car',
                        src:'./src/assets/images/index/nav/car.png',
                        pic:'./src/assets/images/index/nav/car.png'
                    },{
                        path:'/mine',
                        src:'./src/assets/images/index/nav/mine.png',
                        pic:'./src/assets/images/index/nav/mine.png'
                    },
                ]
            }
        },
        
}
</script>

<style >
    #footer-nav{
        width: 100%;
        position: fixed;
        bottom: 0px;
        padding: 6px auto;
        background-color: #fcfcfc;
        border: 1px solid #f0f0f0;
    }
    #footer-nav ul{
        width: 100%;
    }
    #footer-nav li{
        float: left;
        width: 20%;
        text-align: center;
        margin-top: 5px;
    }
    #footer-nav img{
        width: 50%;
    }
    .src{
        display:inline-block;
    }
    .pic{
        display:none;
        
    }
     .router-link-active .src{
        display: none;
        
    }
    .router-link-active .pic{
        display: inline-block;
    }

</style>