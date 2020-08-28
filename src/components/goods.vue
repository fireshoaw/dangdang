<template>
    
    <div id="goods">
        <img src="../assets/images/details/01li.jpg" alt="">
        <div v-for="(item,index) in list">
            <!-- 根据id选择数据 -->
            <div v-if="item.id==id">
                <!-- 轮播图 -->
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(itemi,indexi) in item.img">
                        <img :src="itemi.src" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <section>
                    <p>{{item.msg}}</p>
                    <p><span>￥</span>{{item.cost}}<b>{{item.rebate}}</b></p>
                    <p>定价<span>{{item.price}}</span></p>
                </section>
                <div id="score">
                    <div>
                        <span>{{item.score}}</span>
                        <span v-for="(items,indexs) in item.spans">
                            <img :src="items.src" alt="">
                        </span>
                    </div>
                    <div>我要写评论</div>
                    <div>{{item.person}}<span>精彩评分送积分</span></div>
                </div>
                <div id="promotion">
                    <p><span>促销</span><span>满额减</span>每满￥100.00减￥50.00</p>
                    <p><span>加价购</span>加1.70元换购电子书</p>
                    <img src="../assets/images/details/goods/03span.png" alt="">
                </div>
                <div id="msg">
                    <p>作者<span>{{item.author}}</span><b>查看作品</b><img src="../assets/images/details/goods/03span.png" alt=""></p>
                    <p>出版<span>{{item.publish}}</span><b>查看作品</b><img src="../assets/images/details/goods/03span.png" alt=""></p>
                    <p>排名<span>{{item.sort}}</span><b>查看榜单</b><img src="../assets/images/details/goods/03span.png" alt=""></p>
                    <p>分类<span>{{item.type}}</span><img src="../assets/images/details/goods/03span.png" alt=""></p>
                </div>
            </div>
        </div>
        <div id="footer-nav">
            <div>
                <div>
                    <img src="../assets/images/details/01footer.png" alt="" v-if="collect==true" @click="changec()">
                    <img src="../assets/images/details/02footer.png" alt="" v-if="collect==false" @click="changec()">
                    <span>收藏</span>
                </div>
                <div>
                    <img src="../assets/images/details/03footer.png" alt="">
                    <span>购物车</span>
                </div>
            </div>
            <div><p>立即购买</p></div>
            <div><p>加入购物车</p></div>
        </div>
        <br><br>
    </div>
</template>


<script>
export default {
    data(){
        return{
            id:'',
            collect:true,
            list:[
                {
                    id:'01li',
                    img:[
                        {
                            src:'./src/assets/images/details/goods/01good/01book01.jpg',
                        },{
                            src:'./src/assets/images/details/goods/01good/01book02.jpg',
                        },{
                            src:'./src/assets/images/details/goods/01good/01book03.jpg',
                        },{
                            src:'./src/assets/images/details/goods/01good/01book04.jpg',
                        },
                    ],
                    msg:'你有多努力，就有多幸运（当当专享 作者亲笔签名版）',
                    cost:'40.30',
                    rebate:'(8.96折)',
                    price:'￥45.00',
                    score:'10.0',
                    person:'254人评分',
                    spans:[
                        {
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },
                    ],
                    author:'善良的蜜蜂',
                    publish:'天地出版社，2020年09月',
                    sort:'成功/励志新书榜第12位',
                    type:'图书>成功/励志>成功/激励>激励'
                },{
                    id:'02li',
                    img:[
                        {
                            src:'./src/assets/images/details/goods/02good/01book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/02good/01book.jpg',
                        },
                    ],
                    msg:'人间失格（日本小说家太宰治的自传体小说，李现推荐）',
                    cost:'25.00',
                    rebate:'(7.52折)',
                    price:'￥18.80',
                    score:'9.6',
                    person:'1929535人评分',
                    spans:[
                        {
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },
                    ],
                    author:' (日)太宰治 著，杨伟 译 ',
                    publish:'作家出版社，2015年08月',
                    sort:'小说畅销榜第1位',
                    type:'图书>小说>社会'
                },{
                    id:'04li',
                    img:[
                        {
                            src:'./src/assets/images/details/goods/04good/01book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/04good/02book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/04good/03book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/04good/04book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/04good/05book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/04good/06book.jpg',
                        },{
                            src:'./src/assets/images/details/goods/04good/07book.jpg',
                        },
                    ],
                    msg:'你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！））',
                    cost:'59.00',
                    rebate:'',
                    price:'￥59.00',
                    score:'9.4',
                    person:'614878人评分',
                    spans:[
                        {
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span03.png'
                        },{
                            src:'./src/assets/images/details/goods/02span02.png'
                        },
                    ],
                    author:'塔拉 · 韦斯特弗 著 ， 新经典 出品',
                    publish:'南海出版公司，2019年11月',
                    sort:'文学畅销榜第1位',
                    type:'图书>文学>外国随笔',
                },
            ]
        }
    },
    mounted(){
        this.id=this.$route.params.id;
        this.$emit('send',this.$route.params.id);
    },
    methods:{
        changec(){
            this.collect=!this.collect;
        },
    }
}
</script>

<style >

    #goods img{
        width: 100%;
    }
    #goods .mint-swipe-items-wrap{
        width: 100%;
        padding-bottom: 100%;
    }
    #goods section p{
        margin: 5px 10px 4px;
    }
    #goods section p:nth-of-type(1){
        background: url('../assets/images/details/goods/01span.png') no-repeat;
        background-size: 15%;
        background-position: 2% 3%;
        text-indent: 18%;
        color: #4d525d;
        margin: 5px 10px 4px;
    }
    #goods section p:nth-of-type(2){
        color: #ff463c;
    }
    #goods section p span,section p b{
        font-size: 80%;
    }
    #goods section p span:nth-of-type(1){
        color: #ff463c;
    }
    #goods section p b{
        color: #969696;
    }
    #goods section p:nth-of-type(3){
        color: #969696;
        font-size: 80%;
    }
    #goods section p:nth-of-type(3) span{
        color: #969696;
        font-size: 100%;
        text-decoration:line-through;
    }
    #score{
        border-bottom: 1px solid #f5f5f5;
        padding: 2% 0%;
        background-color: #f8f8f8;
        overflow: hidden;
    }
    #score div{
        margin-left: 2%;
        margin-bottom: 1%;
    }
    #score div:nth-of-type(1){
        width: 50%;
        float: left;
    }
    #score div:nth-of-type(1) span{
        width: 16.6%;
        color: #ff8161;
        font-size: 95%;
    }
    #score div:nth-of-type(1) img{
        width: 7%;
        margin-left: 1%;
    }
    #score div:nth-of-type(3){
        width: 50%;
        color: #b4b4b4;
        font-size: 70%;
        float: left;
    }
    #score div:nth-of-type(3) span{
        margin-left: 1%;
        font-size: 110%;
        color: #ff8161;
    }
    #score div:nth-of-type(2){
        float: right;
        border: 1px solid #ff8161;
        border-radius: 10%;
        color: #ff8161;
    }
    #promotion{
        position: relative;
    }
    #promotion p{
        font-size: 80%;
        margin-left: 2%;
        margin: 2% 0%;
    }
    #promotion span{
        color: #ea002a;
        border: 1px solid #ea002a;
        border-radius: 10%;
        margin-right: 1%;
    }
    #promotion img{
        position: absolute;
        width: 5%;
        right: 2%;
        bottom: 25%;
    }
    #msg p{
        position: relative;
        border-bottom: 1px solid #f8f8f8;
        margin: 1% 2%;
        font-size: 90%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
    #msg span{
        margin-left: 5%;
        margin-right: 20%;
    }
    #msg b{
        position: absolute;
        right: 8%;
        bottom: 30%;
        font-weight: normal;
    }
    #msg img{
        position: absolute;
        width: 5%;
        right: 2%;
        bottom: 25%;
    }
    #goods #footer-nav{
        width: 100%;
        position: fixed;
        bottom: 0%;
        background-color: white;
        z-index: 1000;
    }
    #goods #footer-nav>div{
        width: 33.33%;
        float: left;
        text-align: center;
    }
    #goods #footer-nav>div:nth-of-type(2){
        background-color: rgb(255,190,35);
        color: white;
        padding: 4% 0%;
    }
    #goods #footer-nav>div:nth-of-type(3){
        background-color:rgb(243,85,75);
        color: white;
        padding: 4% 0%;
    }
    #goods #footer-nav>div:nth-of-type(1)>div{
        width: 50%;
        float: left;
        position: relative;
    }
    #goods #footer-nav img{
        width: 35%;
        padding: 20%;
    }
    #goods #footer-nav span{
        position: absolute;
        bottom: 8%;
        left: 30%;
        font-size: 70%;
    }
</style>