<template >
    <div id="mine">
        <div id="title">
            <div id="head">
                <img src="../assets/images/index/nav/back.png" alt="" class="back" @click="back()">
                <span>我的当当</span>
                <img src="../assets/images/index/nav/more.png" alt="" class="show" v-if="boo==true" v-on:click="change()">
                <img src="../assets/images/index/nav/hidden.png" alt="" class="show" v-if="boo==false" v-on:click="change()">
                <img src="../assets/images/index/nav/connect.png" alt="" id="connect" v-if="boo==false">
            </div>
            <br><br>
            <ul id="hidden-nav" v-show="boo==false">
                <li v-for="(item,index) in nlist">
                    <router-link :to="item.path"><img :src="item.src" alt=""></router-link>
                </li>
            </ul>
        </div>
        <div id="mlogin">
            <router-link to="/login"><div>登录/注册</div></router-link>
        </div>
        <ul id="mhead">
            <li v-for="(item,index) in list">
                <p>{{item.count}}</p>
                <p>{{item.msg}}</p>
            </li>
        </ul>
        <div id="mbook">
            <div id="mline"></div>
            <div id="mbook_left"><img src="../assets/images/mine/01book.png" alt="">我的订单</div>
            <div id="mbook_right">查看全部购买商品></div>
        </div>
        <ul id="page">
            <li v-for="(item,index) in page">
                <p><img :src="item.src" alt=""></p>
                <p>{{item.msg}}</p>
            </li>
        </ul>
        <div id="vip">
            <p>
                <img src="../assets/images/mine/02vip.png" alt="">
                会员中心
                <img src="../assets/images/mine/right.png" alt="">
            </p>
        </div>
        <ul id="section">
            <li v-for="(item,index) in section">
                <p>
                    <img :src="item.src" alt="">
                    {{item.msg}}
                    <img src="../assets/images/mine/right.png" alt="">
                </p>
                
            </li>
        </ul>
        <div id="kf">
            <p>
                <img src="../assets/images/mine/07back.png" alt="">
                我的订单
                <img src="../assets/images/mine/right.png" alt="">
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            boo:true,
            nlist:[
            {
                path:'/index',
                src:'./src/assets/images/index/nav/index.png'
            },{
                path:'/type',
                src:'./src/assets/images/index/nav/type.png'
            },{
                path:'/buy',
                src:'./src/assets/images/index/nav/buy.png'
            },{
                path:'/car',
                src:'./src/assets/images/index/nav/car.png'
            },{
                path:'/mine',
                src:'./src/assets/images/index/nav/mine.png'
            },
        ],
        list:[
            {
                count:0,
                msg:'收藏的商品'
            },{
                count:0,
                msg:'关注的店铺'
            },{
                count:0,
                msg:'我的足迹'
            },
        ],
        page:[
            {
                src:'./src/assets/images/mine/01page.png',
                msg:'待付款'
            },{
                src:'./src/assets/images/mine/02page.png',
                msg:'待收货'
            },{
                src:'./src/assets/images/mine/03page.png',
                msg:'退换货'
            },
        ],
        section:[
            {
                src:'./src/assets/images/mine/quan.png',
                msg:'我的礼券'
            },{
                src:'./src/assets/images/mine/03ji.png',
                msg:'积分抵现'
            },{
                src:'./src/assets/images/mine/04ebook.png',
                msg:'我的电子书'
            },{
                src:'./src/assets/images/mine/05gift.png',
                msg:'我的礼品卡'
            },{
                src:'./src/assets/images/mine/06address.png',
                msg:'收货地址'
            },
            
        ]
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        change(){
            this.boo=!this.boo;
        },
    }
}
</script>

<style scoped>
    #mine{
        background-color: rgb(216, 216, 216);
        overflow: hidden;
    }
    #mine #head{
        width: 100%;
        position: fixed;
        background-color: white;
        z-index: 1000;
    }
    #mine #head span{
        position: absolute;
        left: 42%;
        top: 22%;
    }
    #mine .show{
        position: absolute;
        right: 2%;
        top: 2%;
        width: 4%;
        padding-top: 4%;
        padding-right: 2%;
    }
    #mine .back{
        width: 2.5%;
        padding: 3%;
    }
    #mine #hidden-nav{
        width: 100%;
        background-color: #eeeeee;
        position: fixed;
        top: 6%;
        z-index: 1000;
    }
    #mine #hidden-nav li{
        float: left;
        width: 20%;
        text-align: center;
        padding:2% 0px;
    }
    #mine #hidden-nav img{
        width: 50%;
    }
    #mine #connect{
        position: absolute;
        width: 4%;
        right: 4%;
        bottom: 0%;
    }
    #mlogin{
        background:url('../assets/images/mine/01background.jpg') no-repeat;
        padding: 8% 0%;
        background-size: 100%;
        text-align: center;
    }
    #mlogin div{
        width: 30%;
        padding: 3%;
        margin: 0px auto;
        color: white;
        border: 1px solid white;
        border-radius: 2rem;
    }
    #mlogin a{
        text-decoration: none;
    }
    #mhead li{
        float: left;
        width: 33%;
        text-align: center;
        font-size: 80%;
    }
    #mhead li:nth-of-type(1),#mhead li:nth-of-type(2){
        border-right: 1px solid grey;
    }
    #mbook{
        padding: 12% 0%;
        border-bottom: 0.5px solid rgb(202, 200, 200);
        background-color: white;
    }
    #mbook_left{
        float: left;
        position: relative;
        margin-left: 10%;
        padding: 2% 0%;
        
    }
    #mbook_left img{
        font-weight: normal;
        position: absolute;
        width: 30%;
        left:-40%;
    }
    #mbook_right{
        float: right;
        padding: 3%;
        font-size: 70%;
        color: #999;
    }
    #page{
        padding-bottom: 15%;
    }
    #page li{
        background-color: white;
        float: left;
        width: 33.3%;
        text-align: center;
        font-size: 80%;
    }
    #page img{
        width: 20%;
    }
    #vip{
        position: relative;
    }
    #vip p{
        width: 100%;
        background-color: white;
        padding: 2.5% 0%;
        padding-left: 8%;
        margin: 3% 0%;
    }
    #vip img:nth-of-type(1){
        width: 6%;
        position: absolute;
        left: 1%;

    }
    #vip img:nth-of-type(2){
        position: absolute;
        width: 2%;
        right: 2%
    }
    #section{
        position: relative;
    }
    #section p{
        width: 100%;
        background-color: white;
        padding: 2.5% 0%;
        padding-left: 8%;
    }
    #section img:nth-of-type(1){
        width: 6%;
        position: absolute;
        left: 1%;

    }
    #section img:nth-of-type(2){
        position: absolute;
        width: 2%;
        right: 2%
    }
    #kf{
        position: relative;
    }
    #kf p{
        width: 100%;
        background-color: white;
        padding: 2.5% 0%;
        padding-left: 8%;
        margin: 3% 0%;
    }
    #kf img:nth-of-type(1){
        width: 6%;
        position: absolute;
        left: 1%;

    }
    #kf img:nth-of-type(2){
        position: absolute;
        width: 2%;
        right: 2%
    }
</style>