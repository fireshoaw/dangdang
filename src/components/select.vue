<template>
    <div id="select">
        <div id="select_head">
            <ul>
                <li @click="changeli('图书详情')">图书详情</li>
                <li @click="changeli('出版信息')">出版信息</li>
            </ul>
        </div>
        <div v-for="(item,index) in list" >
            <div id="bigrecomment" v-if="item.id==id" v-show="liindex==true">
                <div>
                    <p>————————重磅推荐————————</p>
                    <ul>
                        <li v-for="(itemi,indexi) in item.headImg">
                            <img :src="itemi.src" alt="">
                        </li>
                    </ul>
                    【产品特色】
                    <img :src="item.mainImg" alt="">
                </div>
                【目录】
                <ol>
                    <li v-for="(items,indexs) in item.catalog">
                        <p>{{items.msg}}</p>
                    </li>
                </ol>
                <img src="../assets/images/details/select/price_note.png" alt="">
            </div>
            <div id="information" v-show="liindex==false">
                <ul>
                    <li v-for="(itemm,indexm) in item.information" v-if="item.id==id"> 
                        <span>{{itemm.id}}</span>
                        <p>{{itemm.msg}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="login">
            <p>
                <b>登录</b>
                <b>注册</b>
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
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:'',
            
            liindex:true,
            list:[
                {
                    id:'01li',
                    mainImg:'./src/assets/images/details/select/01li/main.jpg',
                    headImg:[
                        {
                            src:'./src/assets/images/details/select/01li/01head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/02head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/03head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/04head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/05head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/06head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/07head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/08head.jpg'
                        },{
                            src:'./src/assets/images/details/select/01li/09head.jpg'
                        },
                    ],
                    catalog:[
                        {
                            msg:'1　生活的苦与甜，都无须拒绝 ',
                        },{
                            msg:'2　所有云淡风轻，都是伤愈后的硬痂 ',
                        },{
                            msg:'3　我就是那个“小镇青年”',
                        },{
                            msg:'4　经历风雨，方见彩虹 ',
                        },{
                            msg:'5　那些一起拼过命的人，后来都去哪儿了 ',
                        },{
                            msg:'6　没有正确的生活，只有恰好的自己 ',
                        },{
                            msg:'7　大叔大婶罗曼史 ',
                        },{
                            msg:'8　人人都想做情圣 ',
                        },{
                            msg:'9　人生不易，但愿你能挺住 ',
                        },{
                            msg:'10　漂泊的情侣，四处为家 ',
                        },{
                            msg:'11　因为是家人啊 ',
                        },{
                            msg:'12　不是每个人都必须选轰轰烈烈的人生 ',
                        },{
                            msg:'13　浪子一去不回头 ',
                        },{
                            msg:'14　那些曾经憎恶，后来热爱的事儿 ',
                        },{
                            msg:'15　生活是一个浪头接一个浪头的潮汐 ',
                        },{
                            msg:'16　人生不如意事十之八九，可说与人无一二 ',
                        },{
                            msg:'17　愿你深夜有酒，清晨有粥 ',
                        },{
                            msg:'18　走出山村，要走多远的路 ',
                        },{
                            msg:'19　很多年后，我们平淡地聊起天气 ',
                        },{
                            msg:'20　不一样的年代，一样的青春迷惘',
                        },{
                            msg:'21　你，谈论过梦想吗 ',
                        },{
                            msg:'22　我们终要学会一个人做选择 ',
                        },{
                            msg:'23　假如明天不如预期 ',
                        },{
                            msg:'24　可爱不可说 ',
                        },{
                            msg:'25　人生偶尔也要回头看 ',
                        },{
                            msg:'26　为热爱的事情不遗余力，你试过吗 ',
                        },{
                            msg:'27　岁月太长，别轻易嗟叹 ',
                        },{
                            msg:'28　那个在经济寒冬里失业的中年人 ',
                        },{
                            msg:'29　既然都过去，又何必再提起 ',
                        },{
                            msg:'30　再见仍然是朋友',
                        },
                    ],
                    information:[
                        {
                            id:'书名',
                            msg:'你有多努力，就有多幸运（当当专享 作者亲笔签名版）',
                        },{
                            id:'ISBN',
                            msg:'9787545557930',
                        },{
                            id:'作者',
                            msg:'善良的蜜蜂',
                        },{
                            id:'出版社',
                            msg:'天地出版社',
                        },{
                            id:'出版时间',
                            msg:'2020-09-01',
                        },{
                            id:'页数',
                            msg:'224',
                        },{
                            id:'字数',
                            msg:'156000',
                        },{
                            id:'开本',
                            msg:'32开',
                        },{
                            id:'纸张',
                            msg:'轻型纸',
                        },{
                            id:'包装',
                            msg:'平装-胶订',
                        },{
                            id:'是否套装',
                            msg:'否',
                        },
                    ],
                },{
                    id:'02li',
                    mainImg:'./src/assets/images/details/select/02li/main.jpg',
                    headImg:[
                        {
                            src:'./src/assets/images/details/select/02li/01head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/02head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/03head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/04head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/05head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/06head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/07head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/08head.jpg'
                        },{
                            src:'./src/assets/images/details/select/02li/09head.jpg'
                        },
                    ],
                    catalog:[
                        {
                            msg:'人间失格 ',
                        },{
                            msg:'维庸之妻  ',
                        },{
                            msg:'Good-bye ',
                        },{
                            msg:'灯笼 ',
                        },{
                            msg:'满愿',
                        },{
                            msg:'美男子与香烟 ',
                        },{
                            msg:'皮肤与心',
                        },{
                            msg:'蟋蟀 ',
                        },{
                            msg:'樱桃',
                        },
                    ],
                    information:[
                        {
                            id:'书名',
                            msg:'人间失格（日本小说家太宰治的自传体小说，李现推荐）',
                        },{
                            id:'ISBN',
                            msg:'9787506380263',
                        },{
                            id:'作者',
                            msg:'（日）太宰治　著，杨伟　译',
                        },{
                            id:'出版社',
                            msg:'作家出版社',
                        },{
                            id:'出版时间',
                            msg:'2015-08-01',
                        },{
                            id:'开本',
                            msg:'32开',
                        },{
                            id:'纸张',
                            msg:'胶版纸',
                        },{
                            id:'包装',
                            msg:'平装-胶订',
                        },{
                            id:'是否套装',
                            msg:'否',
                        },
                    ],
                },{
                    id:'04li',
                    mainImg:'./src/assets/images/details/select/04li/main.jpg',
                    headImg:[
                        {
                            src:'./src/assets/images/details/select/04li/01head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/02head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/03head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/04head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/05head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/06head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/07head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/08head.jpg'
                        },{
                            src:'./src/assets/images/details/select/04li/09head.jpg'
                        },
                    ],
                    catalog:[
                        {
                            msg:'序',
                        },{
                            msg:'----------',
                        },{
                            msg:'*部分',
                        },{
                            msg:'择善',
                        },{
                            msg:'助产士',
                        },{
                            msg:'奶油色鞋子',
                        },{
                            msg:'阿帕奇女人',
                        },{
                            msg:'诚实的污垢',
                        },{
                            msg:'大小盾牌',
                        },{
                            msg:'耶和华必预备',
                        },{
                            msg:'小妓女',
                        },{
                            msg:'当时世代的完全人',
                        },{
                            msg:'羽毛盾牌',
                        },{
                            msg:'直觉',
                        },{
                            msg:'鱼眼睛',
                        },{
                            msg:'沉默的教堂',
                        },{
                            msg:'我的双脚已离开土地',
                        },{
                            msg:'不再是孩子',
                        },{
                            msg:'不忠的人，违逆的天堂',
                        },{
                            msg:'----------',
                        },
                    ],
                    information:[
                        {
                            id:'书名',
                            msg:'你当像鸟飞往你的山（比尔·盖茨年度特别推荐，登顶《纽约时报》畅销榜80 周！多一个人读到这个真实故事，就多一个人勇敢做自己！）',
                        },{
                            id:'ISBN',
                            msg:'9787544276986',
                        },{
                            id:'作者',
                            msg:'塔拉 · 韦斯特弗  著 ， 新经典  出品',
                        },{
                            id:'出版社',
                            msg:'南海出版公司',
                        },{
                            id:'出版时间',
                            msg:'2019-11-01',
                        },{
                            id:'页数',
                            msg:'388',
                        },{
                            id:'字数',
                            msg:'270000',
                        },{
                            id:'开本',
                            msg:'32开',
                        },{
                            id:'纸张',
                            msg:'胶版纸',
                        },{
                            id:'包装',
                            msg:'精装',
                        },{
                            id:'是否套装',
                            msg:'否',
                        },
                    ],
                },
            ]
        }
    },
    mounted(){
        this.id=this.$route.params.id;
        this.$emit('send',this.$route.params.id);
    },
    methods:{
        changeli(a){
            if(a=='图书详情'&&this.liindex==false){
                this.liindex=true;
            }
            if(a=='出版信息'&&this.liindex==true){
                this.liindex=false;
            }
        }
    }
}
</script>

<style scoped>
    #select{
        padding: 0px 20px 20px 20px;
    }
    #select_head li{
        width: 50%;
        float: left;
        text-align: center;
    }
    #select_head {
        font-size: 70%;
    }
    #bigrecomment{
        
    }
    #bigrecomment li{
        width: 28.8%;
        float: left;
        margin-left: 2.7%;
    }
    #bigrecomment img{
        width: 100%;
    }
    #bigrecomment p{
        text-align: center;
        font-size: 70%;
        color: #878787;
        padding: 2% 0%;
    }
    #bigrecomment ol li{
        width: 100%;
    }
    #bigrecomment ol p{
        font-size: 90%;
        width: 100%;
        text-align: left;
        color: black;
    }
    #information{
        padding-top: 4%;
    }
    #information li{
        padding-top: 2%;
        font-size: 14px;
        padding-top: 20px;
    }
    #information span{
        position: absolute;
        width: 20%;
        color: #969696;
    }
    #information p{
       width: 80%;
       margin-left: 20%;
    }
    .login{
        width: 100%;
        padding-bottom: 7%;
        padding-top: 7%;
        font-size: 14px;
    }
    .login b{
        float: left;
        margin-left: 2%;
    }
    .login b:nth-of-type(3){
        float: right;
        margin-right: 4%;
    }
    .login img{
        width: 20%;
    }
    .footer{
        width: 80%;
        margin: 0px auto;
        padding-bottom: 6%;
        font-size: 12px;
    }
    .footer li{
        float: left;
        width: 25%;
        text-align: center;
    }
    .font{
        font-size: 12px;
        color:#999999;
        width: 100%;
        margin: 0px auto;
        text-align: center;
        margin-right: 10%;
    }
    .font p{
        margin-left: 0%;
    }
</style>