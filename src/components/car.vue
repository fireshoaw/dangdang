<template>
    <div id="car">
        <div id="title">
            <div id="head">
                <img src="../assets/images/index/nav/back.png" alt="" class="back" @click="back()">
                <span>购物车</span>
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
        <section>
            <div v-if="list==''" id="null">
                <p>您还没有购买任何商品</p>
                <div>
                    <p>逛一逛</p>
                    <p>我的收藏</p>
                </div>
            </div>
            <ul>
                <li id="every" v-for="(item,index) in list">
                    <ul id="shop">
                        <img :src="unchecked" alt="" v-if="item.chooseall" @click="changeall(index)">
                        <img :src="checked" alt="" v-if="!item.chooseall" @click="changeall(index)">
                        <img :src="item.shopimg" alt="">
                        <p>{{item.shop}}</p>
                        <span>编辑</span>
                        <div id="line"></div>
                        <li class="shopping" v-for="(itemb,indexb) in item.book">
                            <img :src="unchecked" alt="" v-if="itemb.chooseone" @click="changeone(index,indexb)">
                            <img :src="checked" alt="" v-if="!itemb.chooseone" @click="changeone(index,indexb)">
                            <img :src="itemb.src" alt="">
                            <div>
                                <p>{{itemb.msg}}</p>
                                <p>
                                    ￥{{itemb.price}}
                                    <b>￥{{itemb.oprice}}</b>
                                </p>
                                <div>x{{itemb.count}}</div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <div id="total">
            <div>
                <div>
                    <img :src="unchecked" alt="" v-if="totalchoose" @click="choosetotal()">
                    <img :src="checked" alt="" v-if="!totalchoose" @click="choosetotal()">
                    <b>全选</b>
                </div>
                <div >
                    <i>合计</i><i>￥{{total}}</i>     
                </div>
            </div>
            <div><p>结算（{{totalcount}}）</p></div>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
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
        boo:true,
        total:'0.00',
        totalcount:0,
        totalchoose:true,
        unchecked:'./src/assets/images/car/unchecked.png',
        checked:'./src/assets/images/car/checked.png',
        list:[
            {
                shop:'当当网',
                chooseall:true,
                shopimg:'./src/assets/images/car/dangdang.png',
                book:[
                    {
                        msg:'人间失格（日本小说家太宰治的自传体小说，李现推荐）',
                        src:'./src/assets/images/index/maby/01li.jpg',
                        oprice:'25.00',
                        price:'18.80',
                        count:1,
                        chooseone:true,
                    },{
                        msg:'你有多努力，就有多幸运（当当专享 作者亲笔签名版）',
                        src:'./src/assets/images/index/maby/02li.jpg',
                        oprice:'45.00',
                        price:'40.30',
                        count:1,
                        chooseone:true,
                    },
                ]
            },{
                shop:'徐州文乐图书专营店',
                chooseall:true,
                shopimg:'./src/assets/images/car/shop.png',
                book:[
                    {
                        msg:'【领券减100】浮生六记+月亮与六便士+人间失格+罗生门+我是猫 5册外国小说毛姆太宰治夏目漱石芥川龙之介和六便士励志青春文学小说畅销书籍',
                        src:'./src/assets/images/car/book.jpg',
                        oprice:'198.00',
                        price:'136.00',
                        count:1,
                        chooseone:true,
                    },
                ]
            },
        ]
        }
    },
    mounted(){
        
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        change(){
            this.boo=!this.boo;
        },
        changeall(a){
            var x=0;
            this.list[a].chooseall=!this.list[a].chooseall;
            for(var i=0;i<this.list[a].book.length;i++){
                if(this.list[a].chooseall){
                    this.total=parseInt(this.total*100)-parseInt(this.list[a].book[i].price*100);
                    this.totalcount=this.totalcount-1;
                    this.total=parseInt(this.total)/100
                }
                if(!this.list[a].chooseall&&this.list[a].book[i].chooseone){
                    this.total=parseInt(this.total*100)+parseInt(this.list[a].book[i].price*100);
                    this.totalcount=this.totalcount+1;
                    this.total=parseInt(this.total)/100
                }
                this.list[a].book[i].chooseone=this.list[a].chooseall;
            }
            for(var j=0;j<this.list.length;j++){
                if(!this.list[j].chooseall){x++;}
            }
            if(x==this.list.length){
                this.totalchoose=false;
            }else{this.totalchoose=true;}
        },
        changeone(x,y){
            var count=0;
            var z=0;
            this.list[x].book[y].chooseone=!this.list[x].book[y].chooseone;
            if(this.list[x].book[y].chooseone){
                    this.total=parseInt(this.total*100)-parseInt(this.list[x].book[y].price*100);
                    this.total=parseInt(this.total)/100
                    this.totalcount=this.totalcount-1;
                }else{
                    this.total=parseInt(this.total*100)+parseInt(this.list[x].book[y].price*100);
                    this.total=parseInt(this.total)/100
                    this.totalcount=this.totalcount+1;
                }
            for(var i=0;i<this.list[x].book.length;i++){
                if(this.list[x].book[i].chooseone==false){
                    count++;
                }
            }
            if(count==this.list[x].book.length){
                this.list[x].chooseall=false;
            }else{
                this.list[x].chooseall=true;
            }
            for(var j=0;j<this.list.length;j++){
                if(!this.list[j].chooseall){z++;}
            }
            if(z==this.list.length){
                this.totalchoose=false;
            }else{this.totalchoose=true;}       
        },
        choosetotal(){
            this.total=0;
            this.totalcount=0;
            this.totalchoose=!this.totalchoose;
            for(var i=0;i<this.list.length;i++){
                this.list[i].chooseall=this.totalchoose;
                for(var j=0;j<this.list[i].book.length;j++){
                    this.list[i].book[j].chooseone=this.totalchoose;
                    if(!this.totalchoose){
                        this.total=(parseInt(this.total*100)+parseInt(this.list[i].book[j].price*100))/100;
                        this.totalcount=this.totalcount+1;
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
    #car{
        
    }
    #car #head{
        width: 100%;
        position: fixed;
        background-color: white;
        z-index: 1000;
    }
    #car #head span{
        position: absolute;
        left: 45%;
        top: 22%;
    }
    #car .show{
        position: absolute;
        right: 2%;
        top: 2%;
        width: 4%;
        padding-top: 4%;
        padding-right: 2%;
    }
    #car .back{
        width: 2.5%;
        padding: 3%;
    }
    #car #hidden-nav{
        width: 100%;
        background-color: #eeeeee;
        position: fixed;
        top: 6%;
        z-index: 1000;
    }
    #car #hidden-nav li{
        float: left;
        width: 20%;
        text-align: center;
        padding:2% 0px;
    }
    #car #hidden-nav img{
        width: 50%;
    }
    #car #connect{
        position: absolute;
        width: 4%;
        right: 4%;
        bottom: 0%;
    }
    section{
        overflow: auto;
        color:#777;
        text-align: center;
        background-color: #f2f2f2;
        border-bottom: solid 1px #EBEBEB;
        padding-top: 4%;
    }
    #null{
        width: 100%;
        background: url('../assets/images/car/01background.gif') center 10% no-repeat;
        background-size: 40.2% 50.8%;
        padding: 45% 0% 5% 0%;
        overflow: hidden;
    }
    #null>li{
        margin-bottom: 1%;
    }
    #null div{
        padding: 4% 0% 0% 15%;
    }
    #null div p{
        float: left;
        width: 30%;
        border: 1px solid #777;
        border-radius: 6px;
        font-size: 110%;
        margin: 0% 4%;
        padding: 2%;
    }
    #every{
        margin-bottom: 3%;
    }
    #shop{
        background-color: white;
        position: relative;
        overflow: hidden;
    }
    #shop>img{
        float: left;
        margin-left: 3%;
        width: 6%;
        padding-top: 2%;
    }
    #shop p:nth-of-type(1){
        line-height: 200%;
        float: left;
        padding-top: 1%;
    }
    #shop span{
        position: absolute;
        right: 2%;
        top: 2%;
        font-size: 90%;
    }
    #line{
        width: 100%;
        height: 0.5px;
        background-color: #777;
        margin-bottom: 1%;
        position: absolute;
        opacity: 30%;
    }
    .shopping{
        padding: 2% 0%;
        overflow: hidden;
        display: inline-block;
        
    }
    .shopping>img,.shopping>div{
        float: left;
        margin-left: 2%;
    }
    .shopping>img:nth-of-type(1){
        width: 6%;
        margin-left: 3%;
        padding-top: 8%;
    }
    .shopping>img:nth-of-type(2){
        width: 30%;
    }
    .shopping>div{
        width: 50%;
        font-size: 90%;
        text-align: left;
    }
    .shopping p:nth-of-type(1){
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示2行 */
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .shopping p:nth-of-type(2){
        font-size: 110%;
        color: #ff2832;
    }
    .shopping p:nth-of-type(2) b{
        color: #b8b8b8;
        text-decoration: line-through;
    }
    .shopping>div div{
        padding-top: 10%;
    }
    #total{
        width: 100%;
        position: absolute;
        bottom: 0%;
        border-top: 1px solid #e6e6e6;
        text-align: center;
    }
    #total img{
        float: left;
        margin-left: 3%;
        width: 8%;
        
    }
    #total b,#total>div,#total i{
       float: left;
    }
    #total>div:nth-of-type(1){
        width: 78%;
        padding-top: 4%;
        padding-bottom: 4%;
    }
    #total>div:nth-of-type(2){
        width: 20%;
        background-color: #FB4741;
        color: #fff;
        padding-top: 4%;
        padding-bottom: 4%;
        padding-left: 2%;
    }
    #total>div:nth-of-type(1) div:nth-of-type(2){
        float: right;
        margin-right: 4%; 
    }
    #total i{
        font-style:normal ;
    }
    #total i:nth-of-type(2){
        color: #ff2832;
    }
</style>