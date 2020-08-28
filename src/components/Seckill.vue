<template>
    <main>
        <header>
            <i @click="back()"></i>
            <h1>秒杀</h1>
        </header>
        <nav>
            <ul id="naul">
                <li v-for="(item,index) in seckill_timelist" :class="{seckill_li:n==index&&(index>=2&&index<=6)}" @click="change(index)">
                    <p>{{item.time}}</p>
                    <span>{{item.statu}}</span>
                </li>
            </ul>
        </nav>
        <section>
            <ul>
                <li v-for="(item,index) in seckillProduList">
                    <div class="left_img">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="right_text">
                        <h2>{{item.title}}</h2>
                        <h3>
                            <span>{{item.salePrice}}</span>
                            <i>{{item.delPrice}}</i>
                        </h3>
                        <h4>{{item.alredy}}%</h4>
                        <u>马上抢</u>
                    </div>
                </li>
            </ul>
            <div class="brand_seckill">
                <div class="brand_logo">
                    <img src="../assets/images/brand_skill/name_logo.png" alt="">
                </div>
                <div class="top">
                    <div class="top_title">
                        <img src="../assets/images/brand_skill/brand_name.jpg" alt="">
                        <h2>低至15.9元</h2>
                    </div>
                    <ul>
                        <li v-for="(item,index) in brandList">
                            <img :src="item.pic" alt="">
                            <h3>
                                <span>{{item.saleprice}}</span>
                                <i>{{item.delprice}}</i>
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
            <br><br><br><br>
        </section>
    </main>
</template>

<script>
export default {
    data(){
        return{
            n:2,
            seckill_timelist:[
                {},
                {},
                {
                    time:'00:00',
                    statu:'已开抢'
                },
                {
                    time:'11:00',
                    statu:'进行中'
                },
                {
                    time:'16:00',
                    statu:'即将开抢'
                },
                {
                    time:'明天00:00',
                    statu:'即将开抢'
                },
                {
                    time:'明天11:00',
                    statu:'即将开抢'
                },
                {},
                {}
            ],
            seckillProduList:[
                {
                    pic:'./src/assets/images/seckill/seck1.jpg',
                    title:'【限时秒杀】中国少年儿童百科全书全4册彩图注音版',
                    salePrice:'￥1',
                    delPrice:'￥117.99',
                    alredy:'已抢99%',
                },
                {
                    pic:'./src/assets/images/seckill/seck2.jpg',
                    title:'【限时秒杀包邮】彼得兔的故事书经典绘本全集8册 彩图注音版 彼得兔和他的朋友们 3-6岁幼儿童睡前亲子读物',
                    salePrice:'￥14.5',
                    delPrice:'￥96',
                    alredy:'已抢99%',
                },
                {
                    pic:'./src/assets/images/seckill/seck3.jpg',
                    title:'Gap女装纯棉V领短袖亲肤T恤',
                    salePrice:'￥49',
                    delPrice:'￥249',
                    alredy:'已抢45%',
                },
                {
                    pic:'./src/assets/images/seckill/seck4.jpg',
                    title:'裸感穿着 泰国乳胶运动内衣无钢圈',
                    salePrice:'￥37.9',
                    delPrice:'￥199',
                    alredy:'已抢99%',
                },
                {
                    pic:'./src/assets/images/seckill/seck5.jpg',
                    title:'红豆芡实薏米茶赤小豆红豆薏米茶',
                    salePrice:'￥9.9',
                    delPrice:'￥69',
                    alredy:'已抢23%',
                },
            ],
            brandList:[
                {
                    pic:'./src/assets/images/brand_skill/brand1.jpg',
                    saleprice:'￥59.75',
                    delprice:'￥239'
                },
                {
                    pic:'./src/assets/images/brand_skill/brand2.jpg',
                    saleprice:'￥38',
                    delprice:'￥159'
                },
                {
                    pic:'./src/assets/images/brand_skill/brand3.jpg',
                    saleprice:'￥59',
                    delprice:'￥239'
                },
            ]

        }
    },
    methods:{
        change(a){
            var znaul=document.getElementById('naul');
            if(a>=2&&a<=6){
                this.n=a;
                znaul.style.left=-(a-2)*79+'px';
            }
        },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    main{
        background-color: #eeeeee;
        height: 100%;
    }
    header{
        height: 50px;
        width: 100%;
        background-color: white;
    }
    header>h1{
        text-align: center;
        font-size: 15px;
        padding: 0 20%;
        line-height: 50px;
    }
    header>i{
        height: 100%;
        width: 20%;
        background: url("../assets/images/seckill/back.png") no-repeat center center;
        background-size: 10%;
        float: left;
    }
    nav{
        width: 100%;
        height: 50px;
        overflow: hidden;
        background-color: #454c5b;
        overflow: auto;
    }
    /* 隐藏滚动条 */
    nav::-webkit-scrollbar{
        display: none;
    }
    nav>ul{
        width: 190%;
        height: 100%;
        box-sizing: border-box;
        padding: 1% 0;
        position: relative;
        transition: all 0.5s;
        left: 0;
    }
    nav>ul>li{
        float: left;
        width: 11.111111%;
        height: 100%;
        text-align: center;
        border-radius: 5px;
    }
    nav li p{
        color: white;
        display: block;
        font-size: 15px;
    }
    nav li span{
        color: white;
        font-size: 12px;
    }
    .seckill_li{
        background-color: red;
    }

    section{
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 1% 1% 0;
    }
    section>ul{
        width: 98%;
        overflow: hidden;
        padding: 1%;
        box-sizing: border-box;
    }
    section>ul>li{
        width: 100%;
        overflow: hidden;
        position: relative;
        background-color: white;
        box-sizing: border-box;
        margin-bottom: 2%;
        padding: 3% 0;
    }
    section .left_img{
        float: left;
        width: 24%;
        padding: 1%;
    }
    section .left_img>img{
        width: 100%;
    }
    section .right_text{
        width: 74%;
        float: right;
    }
    section .right_text>h2{
        font-size: 15px;
        text-indent: 0.5em;
        overflow: hidden;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示2行 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    section .right_text>h3{
        display: block;
        margin: 4% 0;
    }
    section .right_text>h3>span{
        color: #ff463c;
        font-size: 19px;
        float: left;
    }
    section .right_text>h3>i{
        font-style: normal;
        color: gray;
        text-decoration: line-through;
        font-size: 10px;
    }
    section .right_text>h4{
        color: gray;
        float: left;
        font-size: 12px;
    }
    section .right_text>u{
        width: 16%;
        height: 28px;
        line-height: 28px;
        text-align: center;
        background-color: #ff463c;
        color: white;
        font-size: 13px;
        text-decoration: none;
        border-radius: 5px;
        position: absolute;
        right: 2%;
        bottom: 23%;
    }

    section .brand_seckill{
        background: url("../assets/images/brand_skill/level_bg.png") no-repeat;
        width: 92%;
        overflow: hidden;
        position: relative;
        padding: 6% 3% 3%;
    }
    section .brand_logo{
        width: 25%;
        display: block;
        position: absolute;
        top: 2%;
        left: 0;
    }
    section .brand_logo>img{
        width: 100%;
    }
    section .brand_seckill .top{
        background-color: white;
        overflow: hidden;
        width: 96%;
        padding: 8% 4% 4% 0;
    }
    section .top .top_title{
        width: 42%;
        overflow: hidden;
        margin-left: 4%;
    }
    section .top .top_title>img{
        width: 35%;
        float: left;
        border: 1px solid #f0f0f0;
        border-radius: 3px;
    }
    section .top .top_title>h2{
        font-size: 14px;
        display: inline-block;
        padding: 6% 2% 0;
        font-weight: bold;
    }
    .brand_seckill ul{
        width: 100%;
        overflow: hidden;
    }
    .brand_seckill ul>li{
        float: left;
        width: 28.333%;
        margin-left: 5%;
    }
    .brand_seckill ul>li>img{
        width: 100%;
    }
    .brand_seckill li>h3{
        text-align: center;
        width: 100%;
        padding: 1% 0;
    }
    .brand_seckill li>h3>span{
        color:  #ff463c;
        font-size: 14px;
        font-weight: bold;
    }
    .brand_seckill li>h3>i{
        font-style: normal;
        text-decoration: line-through;
        color: gray;
        font-size: 11px;
    }
</style>