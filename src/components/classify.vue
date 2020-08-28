<template>
    <div>
        <header>
            <router-link to="/index">
                <i><img src="../assets/images/classify/type/left.jpg" alt=""></i>
            </router-link>
            <div class="search">
                <span></span>
                <input type="text" placeholder="搜索商品/店铺/种类">
                <b :class="{more_x:n}" @click="mx()"></b>
                <u :class="{conn:n}"></u>
            </div>
        </header>
        <ul class="more">
            <li v-for="(item,index) in moreList">
                <i><img :src="item.pic" alt=""></i>
                <span>{{item.tag}}</span>
            </li>
        </ul>
        <main :class="{main:n}">
            <ul id="navul">
                <li v-for="(item,index) in navList" @click="change(item,index)" :class="{curr:num==index}" class="nav">{{item.title}}</li>
            </ul>
            <section  v-if="title=='图书'">
                <div class="pic_top">                    
                    <mt-swipe :auto="3000">
                        <mt-swipe-item v-for="(item,index) in swipList">
                            <img :src="item.pic" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <div class="txt_t">
                    <div class="tx_title" v-for="(item,index) in txtList">
                        <p v-if="item.p_text">{{item.p_text}}</p>
                        <span v-if="item.span_text">{{item.span_text}}</span>
                        <i></i>
                    </div>
                </div>
                <div class="bangdan">
                    <h3>榜单</h3>
                    <ul>
                        <li v-for="(item,index) in bangdanList">
                            <img :src="item.pic" alt="">
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>

                <div class="book_classify" v-for="(item,index) in bookList">
                    <div class="top" >
                        <h3>
                            <span>{{item.title}}</span>
                            <img src="../assets/images/classify/bookClassify/title_link.png" alt="">
                        </h3>
                        <h4>
                            <span>畅销榜</span>
                            <img src="../assets/images/classify/bookClassify/ddcategory_more.png" alt="">
                        </h4>
                    </div>
                    <ul>
                        <li v-for="(item1,index1) in item.typelist" v-show="index1<=4||(sh==index&&t)">
                            <span>{{item1.type}}</span>
                            <img src="../assets/images/classify/bookClassify/icon_hot.png" alt="" v-if="item1.hot">
                        </li>
                        <li class="show" @click="show(item,index)" v-if="item.typelist.length>=6">
                            <span v-if="s">展开</span>
                            <i v-if="s"></i>
                            <span v-if="h&&sh==index">收起</span>
                            <u v-if="h&&sh==index"></u>
                        </li>
                    </ul>
                </div>
                <br><br><br>
            </section>

            <div class="top_img" v-for="(item2,index2) in toppicList" v-if="imgId==item2.id">
                <img :src="item2.pic" alt="">
            </div>
            <div class="women_cloth" v-if="title=='女装'">
                <div class="women_text">
                    <h2>进入女装馆</h2>
                    <span>连衣裙/T恤 1折起</span>
                    <i></i>
                </div>
                <div class="women_type" v-for="(item,index) in womenList">
                    <h3>{{item.title}}</h3>
                    <ul>
                        <li v-for="(item1,index1) in item.imglist">
                            <div class="type_img">
                                <img :src="item1.pic" alt="">
                            </div>
                            <span>{{item1.type}}</span>
                        </li>
                    </ul>
                </div>
                <br><br><br><br><br><br><br>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:0,
            n:false,
            s:true,
            h:false,
            t:false,
            sh:0,
            title:'图书',
            imgId:'women',
            navList:[
                {
                    title:'图书',
                    id:'book'
                },
                {
                    title:'童书',
                    id:'childbook'
                },
                {
                    title:'旧书/拍卖',
                    id:'sale'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                },
                {
                    title:'女装',
                    id:'women'
                }
            ],
            moreList:[
                {
                    pic:'./src/assets/images/nav/home.png',
                    tag:'首页'
                },
                {
                    pic:'./src/assets/images/nav/ic_search.png',
                    tag:'分类'
                },{
                    pic:'./src/assets/images/nav/buy.png',
                    tag:'值得买'
                },{
                    pic:'./src/assets/images/nav/car.png',
                    tag:'购物车'
                },{
                    pic:'./src/assets/images/nav/user.png',
                    tag:'我的当当'
                },
            ],
            swipList:[
                {
                    pic:'./src/assets/images/classify/pictop/swip1.gif',
                },
                {

                    pic:'./src/assets/images/classify/pictop/swip2.jpg',
                }
            ],
            txtList:[
                {
                    p_text:'进入当当书城',
                    span_text:'特价低至1.9折',
                    title:'图书'
                },
                {
                    p_text:'进入童书馆',
                    span_text:'精选少儿读物',
                    title:'图书'
                },
            ],
            bangdanList:[
                {
                    pic:'./src/assets/images/classify/pictop/bangdan1.png',
                    title:'总榜',
                },
                {
                    pic:'./src/assets/images/classify/pictop/bangdan2.png',
                    title:'新书榜',
                },
                {
                    pic:'./src/assets/images/classify/pictop/bangdan3.png',
                    title:'童书榜',
                },
            ],
            bookList:[
                {
                    title:'小说',
                    typelist:[
                        {
                            type:'社会',
                        },
                        {
                            type:'侦探/悬疑/推理',
                            hot:'1'
                        },
                        {
                            type:'情感',
                        },
                        {
                            type:'世界名著',
                        },
                        // {
                        //     type:'历史',
                        // },
                        // {
                        //     type:'科幻',
                        // },
                        // {
                        //     type:'魔幻',
                        // },
                    ]
                },
                {
                    title:'文学',
                    typelist:[
                        {
                            type:'中国现当代随笔',
                            hot:'1',
                        },
                        {
                            type:'名家作品',
                        },
                        {
                            type:'文集',
                        },
                        {
                            type:'纪实文学',
                        },
                        {
                            type:'中国古诗词',
                        },
                        {
                            type:'中国现当代诗歌',
                        },
                        {
                            type:'外国诗歌',
                        },
                    ]
                },
                {
                    title:'青春文学',
                    typelist:[
                        {
                            type:'爱情/情感',
                            hot:'1',
                        },
                        {
                            type:'玄幻/新武侠/魔幻/科幻',
                        },
                        {
                            type:'古代言情',
                        },
                        {
                            type:'穿越/重生/架空',
                        },
                        {
                            type:'校园',
                        },
                        {
                            type:'影视写真',
                        },
                    ]
                },
            ],
            womenList:[
                {
                    title:'热门分类',
                    imglist:[
                        {
                            pic:'./src/assets/images/classify/womenCloth/women1.jpg',
                            type:'T恤'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/women2.jpg',
                            type:'连衣裙'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/women3.jpg',
                            type:'小西装'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/women4.jpg',
                            type:'雪纺衫'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/women5.jpg',
                            type:'休闲裤'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/women6.jpg',
                            type:'风衣'
                        },
                    ]
                },
                {
                    title:'内搭',
                    imglist:[
                        {
                            pic:'./src/assets/images/classify/womenCloth/neida1.jpg',
                            type:'短袖衬衫'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/neida2.jpg',
                            type:'长袖T恤'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/neida3.jpg',
                            type:'短袖T恤'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/neida4.jpg',
                            type:'长袖衬衫'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/neida5.jpg',
                            type:'格子衫'
                        },
                    ]
                },
                {
                    title:'裤装',
                    imglist:[
                        {
                            pic:'./src/assets/images/classify/womenCloth/pant1.png',
                            type:'牛仔'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/pant2.png',
                            type:'休闲'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/pant3.png',
                            type:'九分裤'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/pant4.png',
                            type:'短裤'
                        },
                        {
                            pic:'./src/assets/images/classify/womenCloth/pant5.png',
                            type:'七分裤'
                        },
                    ]
                },
            ],
            toppicList:[
                {
                    pic:'./src/assets/images/classify/womenCloth/women_top.jpg',
                    id:'women'
                },
                {
                    pic:'./src/assets/images/nav/child_book.jpg',
                    id:'childbook'
                },
                {
                    pic:'./src/assets/images/nav/oldbook_sale.jpg',
                    id:'sale'
                },
            ]
        }
    },
    methods:{
        change(b,a){
            this.num=a;
            this.title=b.title;
            this.imgId=b.id;

            var tag=document.getElementsByClassName('nav');
            var znavul=document.getElementById('navul');
            znavul.animate({'scrollTop':a*44})
        },
        mx(){
            this.n=!this.n
        },
        show(e,i){     
            this.sh=i;
            if(this.sh==i){
                this.s=!this.s;
                this.t=!this.t;
                this.h=!this.h;
            }
        }
    }
}
</script>

<style>
    .mint-swipe-items-wrap{
        padding-bottom: 35%;
        position: relative;
    }
</style>

<style scoped>
    header{
        height: 49px;
        position: relative;
        border-bottom: 1px solid #e4e4e4;
    }
    header i{
        height: 25px;
        width: 25px;
        position: absolute;
        top: 12px;
        left: 10px;
    }
    header img{
        height: 100%;
    }
    header input{
        position: absolute;
        top:9px;
        left: 44px;
        width: 66%;
        height: 30px;
        padding-left: 27px;
        outline: none;
        background-color: #e8ecf0;
        border: 1px solid white;
        border-radius: 30px;
    }
    header span{
        height: 16px;
        width: 16px;
        position: absolute;
        top: 17px;
        left: 50px;
        background: url('../assets/images/classify/type/search.png') no-repeat;
        background-color: #e8ecf0;
        z-index: 100;
    }
    header b{
        height: 50px;
        width: 50px;
        position: absolute;
        right: 0px;
        top: 0px;
        background: url("../assets/images/classify/type/more.png") no-repeat center;
        background-size: 32px;
    }
    .more_x{
        height: 50px;
        width: 50px;
        position: absolute;
        right: 0px;
        top: 0px;
        background: url("../assets/images/classify/type/menu-active.png") no-repeat center;
        background-size: 20px;
    }
    .conn{
        height: 8px;
        width: 20px;
        position: absolute;
        bottom: -1px;
        right: 17px;
        background: url("../assets/images/nav/connector.png") no-repeat;
    }
    main{
        background-color: #eff4fa;
        overflow: hidden;
        height: calc(100vh - 50px);
        transition: all 0.3s;
    }
    .main{
        transform: translateY(50px);
    }
    main>ul{
        width: 24%;
        height: 100%;
        float: left;
        overflow: auto;
        background-color: white;
    }
    /* 隐藏滚动条 */
    main>ul::-webkit-scrollbar{
        display: none;
    }
    main>ul>li{
        text-align: center;
        height: 7.15%;
        line-height: 42px;
        color: #3c3c3c;
    }
    .curr{
        background-color: #eff4fa;
        color: rgb(221, 72, 72);
    }
    section{
        height: 100%;
        width: 74%;
        float: right;
        overflow: auto;
    }
    .more{
        background-color: #eeeeee;
        height: 50px;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        z-index: -1;
        border-bottom: 1px solid #e4e4e4;
        box-sizing: border-box;
    }
    .more li{
        float: left;
        width: 20%;
    }
    .more i{
        width: 100%;
        margin-top: 5px;
        text-align: center;
        display: inline-block;
    }
    .more img{
        height: 20px;
    }
    .more span{
        display: inline-block;
        width: 100%;
        font-size: 13px;
        text-align: center;
        color:#747474
    }
    section .pic_top{
        width: 100%;
        overflow: hidden;
    }
    section .pic_top img{
        width: 100%;
    }
    section .txt_t{
        width: 100%;
        overflow: hidden;
        margin-top: 8px;
    }
    section .tx_title{
        background-color: white;
        padding: 12px 0px 12px 10px;
        width: 49%;
        overflow: hidden;
        margin-right: 2%;
        float: left;
        box-sizing: border-box;
        position: relative;
    }
    .tx_title:nth-of-type(2n){
        margin-right: 0px;
    }
    section .tx_title p{
        font-size: 14px;
        font-weight: bold;

    }
    section .tx_title span{

        font-size: 12px;
        color: #a6a6a6;
    }
    section .tx_title i{
        height: 8px;
        width: 5px;
        position: absolute;
        background: url("../assets/images/classify/pictop/arrow.png") no-repeat;
        background-size: 100%;
        right: 10px;
        top: 40%;
    }

    .bangdan{
        width: 100%;
        overflow: hidden;
        margin-top: 3%;
        background-color: white;
    }
    .bangdan h3{
        font-weight: bold;
        margin-top: 2%;
        margin-left: 3%;
    }
    .bangdan>ul{
        padding: 5% 2% 7%;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
    }
    .bangdan>ul>li{
        float: left;
        width: 30.66%;
        margin-right: 4%;
    }
    .bangdan>ul>li:nth-of-type(3){
        margin-right: 0;
    }
    .bangdan li>img{
        width: 93%;
        padding: 4%;
    }
    .bangdan li>span{
        color: #4d525d;
        margin-top: 2%;
        display: block;
        text-align: center;
        font-size: 11px;
    }

    .book_classify{
        width: 100%;
        overflow: hidden;
        background-color: white;
        margin-top: 3%;
    }
    .top{
        width: 100%;
        overflow: hidden;
        padding: 3%;
        box-sizing: border-box;
    }
    .book_classify .top>h3{
        display: block;
        float: left;
        width: 30%;
        height: 100%;
    }
    .book_classify .top>h3>span{
        font-size: 12px;
        font-weight: bold;
    }
    .book_classify .top>h3>img{
        width: 6%;
        display: inline-block;
    }
    .book_classify .top>h4{
        display: block;
        float: right;
        width: 20%;
        height: 100%;
    }
    .book_classify .top>h4>span{
        color: #969696;
        font-size: 12px;
    }
    .book_classify .top>h4>img{
        width: 10%;
        display: inline-block;
    }
    .book_classify>ul{
        width: 90%;
        overflow: hidden;
        position: relative;
        padding: 0 5%;

    }
    .book_classify>ul>li{
        width: 33.33%;
        line-height: 15px;
        height: 48px;
        padding: 5% 1%;
        float: left;
        text-align: center;
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #f0f0f0;
        box-sizing: border-box;
    }
    .book_classify>ul>li>span{
        color: #4d525d;
        font-size: 12px;
    }
    .book_classify>ul>li>img{
        position: absolute;
        top: 8%;
        right: 5%;
        width: 26%;
    }
    .book_classify>ul>li::after{
        content: "";
        height: 14px;
        width: 1px;
        background-color: #e1e1e1;
        position: absolute;
        right: 0;
        top: 38%;
    }
    .book_classify>ul>li:nth-of-type(3n)::after{
        content: "";
        width: 0;
    }
    .book_classify li.show>span{
        line-height: 100%;
        color: #bababa;
        font-size: 13px;
    }
    .book_classify li.show>i{
        height: 33%;
        width: 16%;
        background: url("../assets/images/classify/bookClassify/show_hidden.png") no-repeat;
        transform: rotate(180deg);
        background-size: 80%;
        position: absolute;
        top:26%;
        right: 20%;
    }
    .book_classify li.show>u{
        height: 33%;
        width: 16%;
        background: url("../assets/images/classify/bookClassify/show_hidden.png") no-repeat;
        background-size: 80%;
        position: absolute;
        top:34%;
        right: 16%;
    }
    .book_classify>ul>li.show{
        width: 33.33%;
        float: left;
        text-align: center;
        float: right;
    }
    .book_classify>ul>li.show::after{
        content: "";
        width: 0;
    }

    .women_cloth{
        overflow: auto;
        width: 74%;
        float: right;
        height: 100%;
    }
    .top_img{
        width: 74%;
        overflow: hidden;
        float: right;
    }
    .top_img>img{
        width: 100%;
    }
    .women_cloth .women_text{
        width: 100%;
        overflow: hidden;
        background-color: white;
        margin-top: 2%;
        box-sizing: border-box;
        padding: 5%;
        position: relative;
    }
    .women_cloth .women_text>h2{
        font-size: 15px;
        font-weight: bold;
        margin-top: 1%;
    }
    .women_cloth .women_text>span{
        font-size: 11px;
        color: #a6a6a6;
        display: block;
        margin-top: 1%;
    }
    .women_cloth .women_text>i{
        height: 8px;
        width: 5px;
        position: absolute;
        background: url("../assets/images/classify/pictop/arrow.png") no-repeat;
        background-size: 100%;
        right: 5%;
        top: 45%;
    }
    .women_cloth .women_type{
        width: 100%;
        overflow: hidden;
        padding: 5%;
        box-sizing: border-box;
        background-color: white;
        margin-top: 4%;
    }
    .women_type .type_img{
        width: 100%;
        padding: 10% 5%;
    }
    .women_cloth .women_type>h3{
        font-size: 13px;
        font-weight: bold;
    }
    .women_cloth .women_type>ul{
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding: 5%;
    }
    .women_cloth .women_type li{
        width: 30.66%;
        float: left;
        padding: 4% 2%;
    }
    .women_cloth .women_type li:nth-of-type(3n){
        padding: 4% 0;
    }
    .women_type .type_img>img{
        width: 100%;
    }
    .women_cloth .women_type li>span{
        font-size: 10px;
        color: #4d525d;
        display: block;
        text-align: center;
        margin-top: 3%;
    }
</style>