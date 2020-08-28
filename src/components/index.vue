<template>

    <div id="index">
        {{getposition()}}
        <!-- 头部图片 -->
        <img src="../assets/images/index/top.jpg" alt="" id="top"> 
        <!-- 搜索框 -->
        <div id="search">
            <router-link :to="'/index'"><p><span></span></p></router-link>
            <input type="text">
            <b><router-link :to="'/type'"><img src="../assets/images/index/nav/type.png" alt=""></router-link></b>
        </div>
        <!-- 轮播图 -->
        <div id="rotation">
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in rimg"><img :src="item.src" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 榜单 -->
        <div id="list">
            <ul>
                <li v-for="(item,index) in list"> <img :src="item.src" alt=""></li>
            </ul>
        </div>    
        <!-- 今日秒杀 -->
        <div>
            <div id="date">
                {{getdate()}}
                <img src="../assets/images/index/02li.jpg" alt="">
                <p><span>{{hours}}</span><b>时</b><span>{{mini}}</span><b>分</b><span>{{seconds}}</span><b>秒</b></p>
            </div>
            <div id="slide">
                <ul>
                <li v-for="(item,index) in slimg">
                    <img :src="item.src" alt="">
                    <p>{{item.msg}}</p>
                    <span>{{item.after}}</span>
                    <span>{{item.before}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <img src="../assets/images/index/03li.jpg" alt="" class="other">
        <img src="../assets/images/index/04li.jpg" alt="" class="other">
        <img src="../assets/images/index/05li.jpg" alt="" class="other">
        <!-- 分类 -->
        <div id="type">
            <ul>
                <li v-for="(item,index) in tylist">
                    <p>{{item.type}}</p>
                    <span>{{item.txt}}</span>
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </div>
        <img src="../assets/images/index/06li.jpg" alt="" class="other">
        <p></p>
        <div id="clothes" >
            <div v-for="(item,index) in cllist">
                <span>
                    <b>{{item.txtb}}</b>
                    <i>{{item.txti}}</i>
                </span>
                <img  :src="item.src" alt="">
            </div>
        </div>
        <img src="../assets/images/index/07li.jpg" alt="" class="other">
        <p></p>
        <img src="../assets/images/index/01li.jpg" alt="" class="other">
        <!-- 品牌 -->
        <div id="brand">
            <ul>
                <li v-for="(item,index) in brlist">
                    <span>
                        <b>{{item.txtb}}</b>
                        <i>{{item.txti}}</i>
                    </span>
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </div>
        <!-- 猜你喜欢 -->
        <div class="like"><span>√</span><p>根据您的偏好猜您可能会喜欢</p></div>
        <div id="maby">
            <ul>
                <router-link v-for="(item,index) in mabylist" :to="'/goods/'+item.id">
                    <li>
                        <div :class="item.classA">
                            <img :src="item.src" alt="">
                            <p >{{item.p}}</p>
                            <div>
                                <span :class="item.p1c">{{item.sp1}}</span>
                                <span :class="item.p2c">{{item.sp2}}</span>
                                <span :class="item.p3c">{{item.sp3}}</span>
                                <span :class="item.p4c">{{item.sp4}}</span>
                            </div>
                            <b>{{item.b}}</b>
                        </div>
                        <div id="extra" :class="item.classB" >
                            <p class="blue">
                                <i></i>
                                <b :class="item.p1c">{{item.sp1}}</b>
                                <i></i>
                            </p>
                            <img :src="item.src" alt="">
                            <span :class="item.p2c">{{item.sp2}}</span>
                            <span :class="item.p3c">{{item.sp3}}</span>
                        </div>
                    </li>
                </router-link>
                
            </ul>
            <img src="../assets/images/index/01move.gif" alt="" id="move1">
            <a href="#" v-show="scroll>640"><img src="../assets/images/index/02move.png" alt="" id="move2"></a>
        </div>
        <div class="like"><img src="../assets/images/index/footer.png" alt=""><p>到底了，再拉裤子都掉啦</p></div>
        <img src="../assets/images/index/top.jpg" alt="" id="top">  
        <div class="login">
            <p>
            <span>登录</span>
            <span>注册</span>
            <b><i><img src="../assets/images/index/footop.png" alt=""></i>Top</b>
        </p>
        </div>
        <ul class="footer">
            <li>提建议</li>
            <li>触屏版</li>
            <li>电脑版</li>
            <li>帮助</li>
        </ul>
        <div class="font">
            <p>Copyright ©2020 北京当当网信息技术有限公司</p>
            <p>北京市朝阳区北三环东路8号，100028</p>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>

<script scoped>
import '../../node_modules/mint-ui/lib/swipe/style.css';
export default {
    data(){
    return{
        hours:'',
        mini:'',
        seconds:'',
        scroll:0,
        rimg:[
            {
                src:'./src/assets/images/index/rotation/01rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/02rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/03rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/04rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/05rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/06rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/07rotation.jpg'
            },{
                src:'./src/assets/images/index/rotation/08rotation.jpg'
            },
        ],
        list:[
            {
                src:'./src/assets/images/index/list/01list.png'
            },{
                src:'./src/assets/images/index/list/02list.png'
            },{
                src:'./src/assets/images/index/list/03list.png'
            },{
                src:'./src/assets/images/index/list/04list.png'
            },{
                src:'./src/assets/images/index/list/05list.png'
            },{
                src:'./src/assets/images/index/list/06list.jpg'
            },{
                src:'./src/assets/images/index/list/07list.png'
            },{
                src:'./src/assets/images/index/list/08list.png'
            },{
                src:'./src/assets/images/index/list/09list.png'
            },{
                src:'./src/assets/images/index/list/10list.jpg'
            },
            
        ],
        slimg:[
            {
                src:'./src/assets/images/index/slide/01slide.jpg',
                msg:'1元秒杀 限量抢购 抢完即止' ,
                before:'￥199.00',
                after:'￥1'
            },{
                src:'./src/assets/images/index/slide/02slide.jpg',
                msg:'全套8册写给儿童的二十四节气故事绘本这就是二十四24节气书科普知识百科儿童读物一二三年级课外阅读6-12岁小学生聆听二十四节',
                before:'￥120.00',
                after:'￥15.2'
            },{
                src:'./src/assets/images/index/slide/03slide.jpg',
                msg:'【爆款直降  限量抢购】宽松圆领针织衫女',
                before:'￥599.00',
                after:'￥39',
            },{
                src:'./src/assets/images/index/slide/04slide.jpg',
                msg:'爆款高硼硅玻璃杯送杯套380ml',
                before:'￥199.00',
                after:'￥9.9'
            },{
                src:'./src/assets/images/index/slide/05slide.jpg',
                msg:'昆虫记',
                before:'￥42.00',
                after:'￥16'
            },{
                src:'./src/assets/images/index/slide/06slide.jpg',
                msg:'【初秋精品针织衫！】薄款针织短袖t恤女2020夏季新款圆领宽松彩色镂空打底衫半袖',
                before:'￥368.00',
                after:'￥49.9'
            },{
                src:'./src/assets/images/index/slide/07slide.jpg',
                msg:'幼小衔接识字700个',
                before:'￥30.00',
                after:'￥9.9'
            },{
                src:'./src/assets/images/index/slide/08slide.jpg',
                msg:'【限时秒杀包邮】父与子书全集 全套6册 彩色注音版漫画书',
                before:'￥97.99',
                after:'￥18.6'
            },{
                src:'./src/assets/images/index/slide/09slide.jpg',
                msg:'【30包整箱装】谷斑奢弹柔纸巾',
                before:'￥44.90',
                after:'￥19.9'
            },{
                src:'./src/assets/images/index/slide/10slide.jpg',
                msg:'地狱变',
                before:'￥48.00',
                after:'￥9.9'
            },{
                src:'./src/assets/images/index/slide/11slide.png',
                msg:'',
                before:'',
                after:''
            },
        ],
        tylist:[
            {
                src:'./src/assets/images/index/type/01type.png',
                type:'文艺小情节',
                txt:'书中大情怀'
            },{
                src:'./src/assets/images/index/type/02type.jpg',
                type:'电子书',
                txt:'下单5折'
            },{
                src:'./src/assets/images/index/type/03type.png',
                type:'万种童书',
                txt:'阅读陪伴成长'
            },{
                src:'./src/assets/images/index/type/04type.png',
                type:'阅读新生活',
                txt:'精彩无限'
            },{
                src:'./src/assets/images/index/type/05type.png',
                type:'人文社科',
                txt:'知史知今'
            },{
                src:'./src/assets/images/index/type/06type.png',
                type:'中小学教辅',
                txt:'向上吧少年'
            },{
                src:'./src/assets/images/index/type/07type.png',
                type:'科技图书',
                txt:'发现探索'
            },{
                src:'./src/assets/images/index/type/08type.png',
                type:'成功励志',
                txt:'正能量'
            },{
                src:'./src/assets/images/index/type/09type.png',
                type:'热门外语',
                txt:'语众不同'
            },
        ],
        cllist:[
            {
                src:'./src/assets/images/index/clothes/01clothes.jpg',
                txtb:'',
                txti:''
            },{
                src:'./src/assets/images/index/clothes/02clothes.jpg',
                txtb:'茵曼女装',
                txti:'低至一折起'
            },{
                src:'./src/assets/images/index/clothes/03clothes.jpg',
                txtb:'迪士尼童鞋',
                txti:'限时99元两双'
            },{
                src:'./src/assets/images/index/clothes/04clothes.png',
                txtb:'韩都衣舍',
                txti:'两件2.5折'
            },{
                src:'./src/assets/images/index/clothes/05clothes.jpg',
                txtb:'361度',
                txti:'折上两件4折'
            },{
                src:'./src/assets/images/index/clothes/06clothes.jpg',
                txtb:'达芙妮清仓',
                txti:'限时两件2折'
            },{
                src:'./src/assets/images/index/clothes/07clothes.jpg',
                txtb:'巴帝巴帝',
                txti:'3件2折'
            },{
                src:'./src/assets/images/index/clothes/08clothes.jpg',
                txtb:'学生书包',
                txti:'1件2.5折'
            },{
                src:'./src/assets/images/index/clothes/09clothes.jpg',
                txtb:'芬腾睡衣',
                txti:'限时1件3折'
            },{
                src:'./src/assets/images/index/clothes/10clothes.jpg',
                txtb:'暑假季',
                txti:'珠宝饰品直降'
            },
        ],
        brlist:[
            {
                src:'./src/assets/images/index/brand/01brand.jpg',
                txtb:'青岛啤酒',
                txti:'爆款买一送一'
            },{
                src:'./src/assets/images/index/brand/02brand.jpg',
                txtb:'良品铺子',
                txti:'满199减120'
            },{
                src:'./src/assets/images/index/brand/03brand.jpg',
                txtb:'秒杀单品',
                txti:'19.9元开抢'
            },{
                src:'./src/assets/images/index/brand/04brand.jpg',
                txtb:'伊利牛奶',
                txti:'满99减10'
            },{
                src:'./src/assets/images/index/brand/05brand.jpg',
                txtb:'大希地牛排',
                txti:'满299减150'
            },{
                src:'./src/assets/images/index/brand/06brand.jpg',
                txtb:'汤臣倍健',
                txti:'下单立减50'
            },
        ],
        mabylist:[
            {
                src:'./src/assets/images/index/maby/01li.jpg',
                p:'你有多努力，就有多幸运（当当专享 作者亲笔签名版）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'预售',
                p2c:'two',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥32.40',
                classA:'show',
                classB:'dis',
                id:'01li'
            },{
                src:'./src/assets/images/index/maby/02li.jpg',
                p:'人间失格（日本小说家太宰治的自传体小说，李现推荐）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥18.80',
                classA:'show',
                classB:'dis',
                id:'02li',
            },{
                src:'./src/assets/images/index/maby/03li.jpg',
                p:'',
                sp1:'为您推荐',
                p1c:'blue',
                sp2:'小说',
                p2c:'',
                sp3:'点击查看',
                p3c:'three',
                sp4:'',
                p4c:'',
                b:'',
                classA:'dis',
                classB:'show',
                id:''
            },{
                src:'./src/assets/images/index/maby/04li.jpg',
                p:'你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥59.00',
                classA:'show',
                classB:'dis',
                id:'04li'
            },{
                src:'./src/assets/images/index/maby/05li.jpg',
                p:'人间失格（日本小说家太宰治的自传体小说，李现推荐）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'包邮',
                p2c:'one',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥87.10',
                classA:'show',
                classB:'dis',
                id:'05li'
            },{
                src:'./src/assets/images/index/maby/06li.jpg',
                p:'活着（荣获中国版权金奖.作品奖版本，销量逾千万册）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'包邮',
                p2c:'one',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥28.00',
                classA:'show',
                classB:'dis',
                id:'06li'
            },{
                src:'./src/assets/images/index/maby/07li.jpg',
                p:'孩子一学就会的黄金口才课 （让口才成为孩子一生的资本!“吴琼口才训练营”同步教材）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'包邮',
                p2c:'one',
                sp3:'限时抢',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥24.00',
                classA:'show',
                classB:'dis',
                id:'07li'
            },{
                src:'./src/assets/images/index/maby/08li.jpg',
                p:'习近平总书记教育重要论述讲义 团购电话4001066666转6',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥29.80',
                classA:'show',
                classB:'dis',
                id:'08li'
            },{
                src:'./src/assets/images/index/maby/09li.jpg',
                p:'云边有个小卖部（陆定昊诚挚推荐，随书附赠云边镇四季明信片和张嘉佳作词单曲彩蛋）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'包邮',
                p2c:'one',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥28.70',
                classA:'show',
                classB:'dis',
                id:'09li'
            },{
                src:'./src/assets/images/index/maby/10li.jpg',
                p:'《写给儿童的中国历史》（全彩铜版14册）中国孩子历史启蒙首选书，连续六年当当童书榜历史类图书状元！加印30次，累销1800万本，读者好评760000+',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'券',
                p3c:'two',
                sp4:'秒杀',
                p4c:'two',
                b:'￥265.25',
                classA:'show',
                classB:'dis',
                id:'10li'
            },{
                src:'./src/assets/images/index/maby/11li.jpg',
                p:'人间失格（日本小说家太宰治的自传体小说，李现推荐）',
                sp1:'为您推荐',
                p1c:'',
                sp2:'童书',
                p2c:'',
                sp3:'点击查看',
                p3c:'three',
                sp4:'',
                p4c:'',
                b:'',
                classA:'dis',
                classB:'show',
                id:''
            },{
                src:'./src/assets/images/index/maby/12li.jpg',
                p:'乌合之众 : 大众心理研究\n',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥19.50',
                classA:'show',
                classB:'dis',
                id:'12li'
            },{
                src:'./src/assets/images/index/maby/13li.jpg',
                p:'神奇校车·图画书版（全12册，新增科学博览会1册）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'券',
                p3c:'two',
                sp4:'满减',
                p4c:'two',
                b:'￥196.00',
                classA:'show',
                classB:'dis',
                id:'13li'
            },{
                src:'./src/assets/images/index/maby/14li.jpg',
                p:'习近平谈治国理政（第三卷）（中文平装）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'预售',
                p2c:'one',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥64.00',
                classA:'show',
                classB:'dis',
                id:'14li'
            },{
                src:'./src/assets/images/index/maby/15li.jpg',
                p:'谁都不能替你长大（独家赠送限量版精美笔记本,先到先得！哈佛大学心理学学者刘轩与青少年一起直面青春成长四大问题）',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥31.50',
                classA:'show',
                classB:'dis',
                id:'15li'
            },{
                src:'./src/assets/images/index/maby/16li.jpg',
                p:'百年巨匠·校园版——齐白石',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥21.90',
                classA:'show',
                classB:'dis',
                id:'16li'
            },{
                src:'./src/assets/images/index/maby/17li.jpg',
                p:'就像一株野蔷薇(百班千人2020暑期五年级共读用书)',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥23.10',
                classA:'show',
                classB:'dis',
                id:'17li'
            },{
                src:'./src/assets/images/index/maby/18li.jpg',
                p:'亨利去丛林探险',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'',
                p3c:'',
                sp4:'',
                p4c:'',
                b:'￥31.90',
                classA:'show',
                classB:'dis',
                id:'18li'
            },{
                src:'./src/assets/images/index/maby/19li.jpg',
                p:'作家榜经典：月亮与六便士（荣获2019当当名著销量桂冠！2017豆瓣阅读桂冠！入选上海德威国际学校推荐阅读版本！）大星文化出品',
                sp1:'当当自营',
                p1c:'one',
                sp2:'',
                p2c:'',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥37.80',
                classA:'show',
                classB:'dis',
                id:'19li'
            },{
                src:'./src/assets/images/index/maby/20li.jpg',
                p:'星空(几米经典作品 全新修订版)',
                sp1:'当当自营',
                p1c:'one',
                sp2:'预售',
                p2c:'one',
                sp3:'满减',
                p3c:'two',
                sp4:'',
                p4c:'',
                b:'￥50.00',
                classA:'show',
                classB:'dis',
                id:'20li'
            },
        ]
    }
    },
    methods:{
        getdate(){
            setInterval(()=>{
            var dateA = new Date();
            var dateB = new Date(2020,8,21);
            var surplus = dateB-dateA;
            var h=surplus/(1000*3600);
            this.hours='0'+parseInt(h%8);
            var m=h*60;
            var m1=m%60;
            this.mini=String(parseInt(m1/10))+parseInt(m1%10)
            var s=m*60;
            var s1=s%60;
            this.seconds=String(parseInt(s1/10))+parseInt(s1%10)
            },1000)
        },
        getposition(){
        this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        
        }
    },
}
</script>

<style>
    #index{
        overflow: hidden;
        background-color: #eff4fa;
    }
    .other{
        width: 100%;
    }
    #top{
        width: 100%;
    }
    #search{
        overflow: hidden;
        background-color: white;
    }
    #search input{
        top:8px;
        left: 60px;
        width: 70%;
        height: 30px;
        outline: none;
        background-color: #e8ecf0;
        border: 1px solid white;
        border-radius: 30px;
    }
    #search p{
        padding: 0px 1.5%;
        width: 10%;
        display: block;
        height: 30px;
        float: left;
    }
    #search span{
        width: 80%;
        display: inline-block;
        height: 5px;
        font-size: 16px;
        background-color: #f03741;
        font-weight: bold;
        border-radius: 10%;
        transform: rotate(-50deg);
    }
    #search b{
        width: 10%;
        float: right;
    }
    #search img{
        width: 100%;
    }
    #rotation{
        width: 100%;
    }
    #rotation img{
        width: 100%;
    }
    #rotation .mint-swipe-items-wrap{
        padding-bottom: 29%;
    }
    #list{
        border: 1px solid rgb(200, 248, 248);
        background-color: white;
    }
    #list ul{
        display: inline-block;
        width: 100%;
    }
    #list li{
        width: 20%;
        float: left;
    }
    #list img{
        width: 100%;
    }
    #slide{
            width: 100%;
            overflow: auto;
            background-color: white;
        }
    #slide ul{
        margin-left: 10px;
        margin-right: 10px;
        width: 310%;
        display: inline-block;
        }
    #slide li{
        float: left;
        width: 8.09%;
        padding: 0.5%;
    }
    #slide img{
        width: 100%;
        }
    #slide p{
        width: 100%;
        height: 24px;
        display: -webkit-box;
        text-align: left;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示2行 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 10px;
        float: left;
    }
    #slide span{
        color: red;
        width: 100%;
        font-family: '楷体';
        display: inline-block;
        
    }
    #slide span:nth-of-type(2){
        width: 100%;
        color: #bababa;
        text-decoration: line-through;
        font-size: 10px;
    }
    #date{
        width: 100%;
        overflow: hidden;
        background-color: white;
    }
    #date p{
        width: 100%;
        display: inline-block;
        text-align: center;
        overflow: hidden;
        padding-left: 30%;
    }
    #date span{
        float: left;
        font-size: 14px;
        width: 5%;
        display: block;
        color: white;
        background-color: black;
        padding: 3px 0px;
        border-radius: 20%;
        text-align: center;
    }    
    #date b{
        float: left;
        width: 5%;
        display: block;
        font-size: 14px;
        color: black;
        text-decoration: none;
        margin-left: 1%;
        margin-right: 1%;
    }
    #date img{
        width: 100%;
    }
    #date span:nth-of-type(3){
        background-color:#f3344a;
    }
    #type img{
        width: 100%;
    }
    #type ul{
        width: 100%;
        display: inline-block;
    }
    #type li{
        width: 33%;
        float: left;
        display: block;
        background-color: white;
        margin-bottom: 0.1%;
    }
    #type li:nth-of-type(1),#type li:nth-of-type(4),#type li:nth-of-type(7){
        margin-right: 0.3%;
    }
    #type li:nth-of-type(3),#type li:nth-of-type(6),#type li:nth-of-type(9){
        margin-left: 0.3%;
    }
    #type p{
        text-align: center;
        font-size: 14px;
    }
    #type span{
        color: #ef2933;
        font-size: 10px;
        text-align: center;
        display: block;
    }
    #clothes div{
        width: 25%;
        float: left;
        background-color: white;
    }
    #clothes img{
        width: 100%;
    }
    #clothes span{
        padding: 8.4px 10px 0px;
        height: 100%;
        width: 40%;
        display: block;
        float: left;
    }
    #clothes div:nth-of-type(1){
        width: 100%;
    }
    #clothes div:nth-of-type(2){
        width: 50%;
        padding-bottom: 34.55%;
        position: relative;
    }
    #clothes div:nth-of-type(2) img{
        width: 65%;
        position: absolute;
        bottom: 0px;
        right: 0px;
    }
    #clothes div:nth-of-type(3),#clothes div:nth-of-type(4){
        width: 50%;
        padding-bottom: 3%;
    }
    #clothes div:nth-of-type(3) img,#clothes div:nth-of-type(4) img{
        width: 43%;
        float: right;
    }
    #clothes div:nth-of-type(5),#clothes div:nth-of-type(6){
        width: 50%;
        padding-bottom: 8%;
        position: relative;
    }
    #clothes div:nth-of-type(5) img,#clothes div:nth-of-type(6) img{
        width: 50%;
        position: absolute;
        right: 0px;
    }
    #clothes div:nth-of-type(7) span,#clothes div:nth-of-type(8) span,#clothes div:nth-of-type(9) span,#clothes div:nth-of-type(10) span{
        width: 100%;
    }
    #clothes b{
        font-size: 14px;
        width: 100%;
        font-weight: initial;
    }
    #clothes i{
        font-size: 12px;
        width: 100%;
        display:inline-block;
        color: #c72895;
        font-style: initial;
    }
    #brand li{
        width: 25%;
        float: left;
    }
    #brand li:nth-of-type(1),#brand li:nth-of-type(2){
        width: 50%;
        position: relative;
    }
    #brand img{
        width: 100%;
    }
    #brand li:nth-of-type(1) img,#brand li:nth-of-type(2) img{
        width: 40%;
        float:right;
    }
    #brand span{
        width: 100%;
        padding: 10px;
        display: block;
    }
    #brand li:nth-of-type(1) span,#brand li:nth-of-type(2) span{
        display:inline-block;
        width: 45%;
        height: 48%;
        padding: 10px;
    }
    #brand b{
        display: block;
        font-size: 14px;
        font-weight: initial;
    }
    #brand i{
        display: block;
        font-size: 12px;
        font-style: initial;
        color: #6770f2;
    }
    #brand{
        background-color: white;
    }
    #brand ul{
        display: inline-block;
    }
    .like{
        margin-bottom: 10px;
        text-align: center;
    }
    .like span{
        width: 13px;
        height: 13px;
        color: white;
        border-radius: 50%;
        background-color: red;
        font-size: 11px;
        display: inline-block;

    }
    .like p{
        display:inline-block;
        font-size: 12px;
    }
    #index #maby{
        display: block;
        text-align: center;
    }
    #index #maby div{
        text-align: left;
        margin-left: 1%;
    }
    #index #maby ul{
        display: block;
        overflow: hidden;
    }
    #index #maby li{
        margin: 1% 0px;
        background-color: white;
        display: block;
        width: 49%;
        height: 270px;
        overflow: hidden;
    }
    #index #maby li:nth-of-type(2n+1){
        float: left;
    }
    #index #maby li:nth-of-type(2n){
        float: right;
    }
    #index #maby img{
        width: 100%;
    }
    #index #maby a{
        color: black;
    }
    #index #maby p{
        width: 100%;
        height: 30px;
        line-height: 15px;
        display: -webkit-box;
        text-align: left;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示2行 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 13px;
        margin: 1px 2px;
    }
    #index #maby span{
        font-size: 12px;
        border-radius: 10%;
        padding-bottom: 1%;
    }
    #index .one{
        border: 1px solid #f2303c;
        color:#f2303c ;
    }
    #index .two{
        background-color: #f2303c;
        color: white;
        border: 1px solid #f2303c;
    }
    #index .three{
        color: #b4d3f9;
        border: 1px solid #b4d3f9;
        border-radius: 10%;
    }
    #index .blue{
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
        width: 100%;
        padding-bottom: 30%;
        background-color: #a0c6f7;
        position: relative;
    }
    #index #maby b{
        color: red;
        display: inline;
        font-weight: initial;
        font-size: 14px;
    }
    #index .show{
        display: inline-block;
    }
    #index .dis{
        display: none;
    }
    #index #extra{
        width: 100%;
        text-align: center;
        position: relative;
        padding-bottom: 80%;
    }
    #index #extra img{
        width: 70%;
        border: 10px solid white;
        position: absolute;
        left: 9%;
        top: 11%;
        border-radius: 10%;
    }
    #index #extra b{
        color: white;
        font-size: 11px;
    }
    #index #extra i{
        width: 4px;
        height: 4px;
        background: url("../assets/images/index/likespot.png");
        background-size: 100%;
        display: inline-block;
    }
    #index #extra i:nth-of-type(1){
        margin-left: 33%;
    }
    #index #extra span:nth-of-type(1){
        width: 100%;
        position: absolute;
        margin: 0px auto;
        text-align: center;
        top: 75%;
    }
    #index #extra span:nth-of-type(2){
        width: 50%;
        position: absolute;
        text-align: center;
        margin: 0px 20%;
        top: 85%;
    }
    #index .login{
        width: 100%;
        padding-bottom: 7%;
        font-size: 14px;
    }
    #index .login span{
        float: left;
        margin-left: 4%;
    }
    #index .login b{
        float: right;
        margin-right: 4%;
    }
    #index .login img{
        width: 20%;
    }
    #index .footer{
        width: 80%;
        margin: 0px auto;
        padding-bottom: 6%;
        font-size: 12px;
    }
    #index .footer li{
        float: left;
        width: 25%;
    }
    #index .font{
        font-size: 12px;
        color:#999999;
        width: 80%;
        margin: 0px auto;
        text-align: center;
    }
    #index #move1{
        width: 50px !important;
        height: 50px !important;
        position: fixed;
        right: 1%;
        top:50%
    }
    #index #move2{
        width: 40px !important;
        height: 40px !important;
        position: fixed;
        right: 1%;
        bottom:10%
    }
</style>