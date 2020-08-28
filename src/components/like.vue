<template>
    <main>
        <header>
            <img src="../assets/images/value_buy/value/top.png" alt="">
        </header>
        <div class="value_title">
            <span></span>
            <p>值得买</p>
            <i></i>
        </div>
        <div>
            <ul class="value_indu">
                <li v-for="(item,index) in indu_List">
                    <img :src="item.pic" alt="">
                </li>
            </ul>
            <ul class="value_icon">
                <li v-for="(item,index) in indu_List">
                    <img :src="item.pic_icon" alt="">
                </li>
            </ul>

            <div class="promo">
                <p>
                    促销专场
                    <span>更多</span>
                    <i></i>
                </p>
                <ul>
                    <li v-for="(item,index) in prom_List">
                        <p v-if="item.hh">{{item.hh}}</p>
                        <h3 class="promo_h">{{item.title}}</h3>
                        <img :src="item.pic" alt="">
                    </li>
                </ul>
            </div>
            <div class="now_kill">
                <div class="now_img">
                    <img src="../assets/images/value_buy/now_kill/now_title.png" alt="">
                    <span>更多</span>
                    <i></i>
                </div>
                <div class="now_text">
                    <ul>
                        <li v-for="(item,index) in now_List">
                            <img :src="item.pic" alt="" v-if="item.pic">
                            <p v-if="item.title">{{item.title}}</p>
                            <span v-if="item.pri">{{item.pri}}</span>
                            <u v-if="item.del">{{item.del}}</u>
                            <router-link to="/seckillnav" class="route">
                                <i v-if="item.now_i"></i>
                                <b v-if="item.now_more">{{item.now_more}}</b>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="product">
                <ul>
                    <li v-for="(item,index) in prodution_List">
                        <div class="rank">{{item.rank}}</div>
                        <span>更多</span><i></i>
                        <div class="left">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="right">
                            <p>{{item.title}}</p>
                            <div class="full_discount">
                                <h4 v-show="item.full">满额减</h4>
                                <h3 v-show="item.discountPrice">折后价<span>￥125.00</span></h3>
                            </div>
                            <h2>
                                <span>{{item.salePrice}}</span>
                                <i>{{item.delPrice}}</i>
                            </h2>
                            <div class="count">
                                <div class="cright">
                                    <img src="../assets/images/value_buy/production/star.png" alt="">
                                    <span>{{item.score}}</span>
                                </div>
                                <div class="cleft">
                                    <img src="../assets/images/value_buy/production/comment.jpg" alt="">
                                    <span>{{item.commentCount}}</span>
                                </div>
                                <img src="../assets/images/value_buy/production/shopcar.png" alt="" @click="add">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="send">
                <div class="top">
                    <img src="../assets/images/value_buy/9.9send/9.9-title.png" alt="">
                    <span>更多</span>
                    <i></i>
                </div>
                <div class="nine_send">
                    <ul>
                        <li v-for="(item,index) in send_List">
                            <img :src="item.pic" alt="" v-if="item.pic">
                            <h3 v-if="item.descri">{{item.descri}}</h3>
                            <p v-if="item.price">{{item.price}}</p>
                            <router-link to="/seckillnav" class="route">  
                                <i v-if="item.more_icon"></i>
                                <b v-if="item.more_find">查看更多</b>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="addBuy">
                <ul>
                    <li v-for="(item,index) in addBuy_List">
                        <div class="rank">{{item.rank}}</div>
                        <span>更多</span><i></i>
                        <div class="left">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="right">
                            <p>{{item.title}}</p>
                            <div class="full_discount">
                                <h4 v-show="item.full">满额减</h4>
                            </div>
                            <h2>
                                <span>{{item.salePrice}}</span>
                                <i>{{item.delPrice}}</i>
                            </h2>
                            <div class="count">
                                <div class="cright">
                                    <img src="../assets/images/value_buy/production/star.png" alt="">
                                    <span>{{item.score}}</span>
                                </div>
                                <div class="cleft">
                                    <img src="../assets/images/value_buy/production/comment.jpg" alt="">
                                    <span>{{item.commentCount}}</span>
                                </div>
                                <img src="../assets/images/value_buy/production/shopcar.png" alt="" @click="add">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="pingtuan">
                <div class="top">
                    <img src="../assets/images/value_buy/pingtuan/battle.png" alt="">
                    <span>更多</span>
                    <i></i>
                </div>
                <div class="pin">
                    <ul>
                        <li v-for="(item,index) in pintuan_List">
                            <img :src="item.pic" alt="" v-if="item.pic">
                            <h3 v-if="item.descri">{{item.descri}}</h3>
                            <p v-if="item.price">{{item.price}}</p>
                            <span>{{item.havedBuy}}</span>
                            <i v-if="item.more_icon"></i>
                            <b v-if="item.more_find">查看更多</b>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="attention">
                <ul>
                    <li v-for="(item,index) in attention_List">
                        <div class="rank">{{item.rank}}</div>
                        <span>更多</span><i></i>
                        <div class="left">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="right">
                            <p>{{item.title}}</p>
                            <div class="full_discount">
                                <h4 v-show="item.full">满额减</h4>
                            </div>
                            <h2>
                                <span>{{item.salePrice}}</span>
                                <i>{{item.delPrice}}</i>
                            </h2>
                            <div class="count">
                                <div class="cright">
                                    <img src="../assets/images/value_buy/production/star.png" alt="">
                                    <span>{{item.score}}</span>
                                </div>
                                <div class="cleft">
                                    <img src="../assets/images/value_buy/production/comment.jpg" alt="">
                                    <span>{{item.commentCount}}</span>
                                </div>
                                <img src="../assets/images/value_buy/production/shopcar.png" alt="" @click="add">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="sale">
                <div class="top">
                    <img src="../assets/images/value_buy/sales/sale-title.png" alt="">
                    <span>更多</span>
                    <i></i>
                </div>
                <div class="sale_product">
                    <ul>
                        <li v-for="(item,index) in sales_List">
                            <img :src="item.pic" alt="" v-if="item.pic">
                            <h3 v-if="item.descri">{{item.descri}}</h3>
                            <p v-if="item.price">{{item.price}}</p>
                            <i v-if="item.more_icon"></i>
                            <b v-if="item.more_find">查看更多</b>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="hotSales">
                <ul>
                    <li v-for="(item,index) in hotsale_List">
                        <div class="rank">{{item.rank}}</div>
                        <span>更多</span><i></i>
                        <div class="left">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="right">
                            <p>{{item.title}}</p>
                            <div class="full_discount"></div>
                            <h2>
                                <span>{{item.salePrice}}</span>
                                <i>{{item.delPrice}}</i>
                            </h2>
                            <div class="count">
                                <div class="cright">
                                    <img src="../assets/images/value_buy/production/star.png" alt="">
                                    <span>{{item.score}}</span>
                                </div>
                                <div class="cleft">
                                    <img src="../assets/images/value_buy/production/comment.jpg" alt="">
                                    <span>{{item.commentCount}}</span>
                                </div>
                                <img src="../assets/images/value_buy/production/shopcar.png" alt="" @click="add">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="recommend">
                <p>为你推荐</p>
                <div class="recom_book">
                    <ul>
                        <li v-for="(item,index) in recom_List">
                            <img :src="item.pic" alt="">
                            <h3>{{item.descri}}</h3>
                            <h2>{{item.price}}</h2>
                            <p>￥43</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="log_reg">
                <h3>
                    <router-link to="/login">
                        <span>登录</span>
                    </router-link>

                    <router-link to="/regester">
                        <span>注册</span>
                    </router-link>
                </h3>
                <h4>
                    <i></i>
                    <b>TOP</b>
                </h4>
            </div>
        </div>

        <div class="go_top">
            <a href="#"><img src="../assets/images/nav/go-top.png" alt=""></a>
        </div>
        <br><br><br><br><br>
    </main>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            indu_List:[
                {
                    pic:'./src/assets/images/value_buy/value/library.png',
                    pic_icon:'./src/assets/images/value_buy/value/icon_good.png'
                },
                {
                    pic:'./src/assets/images/value_buy/value/fansion.png',
                    pic_icon:'./src/assets/images/value_buy/value/icon_9.9.png'
                },
                {
                    pic:'./src/assets/images/value_buy/value/child_read.png',
                    pic_icon:'./src/assets/images/value_buy/value/icon_tody.png'
                },
                {
                    pic:'./src/assets/images/value_buy/value/supermarket.png',
                    pic_icon:'./src/assets/images/value_buy/value/icon_kill.png'
                },
                {
                    pic:'./src/assets/images/value_buy/value/quarlity.png',
                    pic_icon:'./src/assets/images/value_buy/value/icon_center.png'
                }
            ],
            prom_List:[
                {
                    title:'49元5件&88元10件',
                    pic:'./src/assets/images/value_buy/promotion/prom1.jpg',
                },
                {
                    title:'美特斯邦威大牌日',
                    pic:'./src/assets/images/value_buy/promotion/prom2.jpg',
                },
                {
                    title:'周末有一套 下单9.99元',
                    pic:'./src/assets/images/value_buy/promotion/prom3.jpg',
                },
                {
                    title:'周末有一套 下单19.99元',
                    pic:'./src/assets/images/value_buy/promotion/prom4.jpg',
                },
                {
                    hh:'开学季',
                    title:'每满75减25（教辅、童书）',
                    pic:'./src/assets/images/value_buy/promotion/prom5.jpg',
                },
                {
                    title:'美特斯邦威大牌日1件2折',
                    pic:'./src/assets/images/value_buy/promotion/prom6.jpg',
                },
            ], 
            now_List:[
                {
                    pic:'./src/assets/images/value_buy/now_kill/now1.jpg',
                    title:'稻盛和夫给年轻人的忠告正能量励志书籍畅销书排行榜抖音推荐热门青少成长活法干法作者心灵鸡汤人生哲理成功学书籍职场心理学书籍',
                    pri:'￥1.00',
                    del:'￥38.10',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now2.jpg',
                    title:'我们内心的冲突（百万册纪念插画典藏本）',
                    pri:'￥9.80',
                    del:'￥39.60',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now3.jpg',
                    title:'【春夏百搭款T恤】【领券 2件减5元】2020年夏季新款白色条纹V领短袖长袖t恤女装韩版半袖体恤打底衫ins潮91081',
                    pri:'￥29.90',
                    del:'￥372.00',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now4.jpg',
                    title:'推荐_【三只松鼠_岩烧乳酪吐司520g*2箱】面包早餐零食营养食品',
                    pri:'￥59.80',
                    del:'￥200.00',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now5.jpg',
                    title:'【限时秒杀包邮】猜猜我是谁洞洞图书全4册 0-1-2-3周岁宝宝撕不烂启蒙书籍 幼儿翻翻看奇妙早教绘本 新生婴儿看图识物卡片书 婴幼儿童认知3D立体书',
                    pri:'￥16.60',
                    del:'￥103.20',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now6.jpg',
                    title:'半高领毛衣内搭长袖打底衫女秋冬洋气2020新款上衣修身紧身针织衫',
                    pri:'￥29.9',
                    del:'￥298.00',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now7.jpg',
                    title:'【限时秒杀价】回力官方旗舰店回力马丁靴男靴子秋冬季新款复古英伦风高帮男鞋潮鞋百搭工装鞋子',
                    pri:'￥79.00',
                    del:'￥699.00',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now8.jpg',
                    title:'飘（上下册，经典新读 著名翻译家黄健人译本 ）',
                    pri:'￥14.90',
                    del:'￥68.00',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now9.jpg',
                    title:'【2件3折后：59元】左西男童工装裤子秋装2020新款童装儿童休闲裤长裤中大童洋气春秋款潮',
                    pri:'￥39.00',
                    del:'￥399.00',
                },
                {
                    pic:'./src/assets/images/value_buy/now_kill/now10.png',
                    title:'网易严选 160*230羊毛手工几何地毯_朽葉褐',
                    pri:'￥179.00',
                    del:'￥3299.00',
                },
                {
                    now_i:'1',
                    now_more:'查看更多',
                }
            ],
            prodution_List:[
                {
                    pic:'./src/assets/images/value_buy/production/produ2.jpg',
                    rank:'畅销榜第4名',
                    title:'哈利·波特（套装1-7册）《语文》教材推荐阅读书目，外国儿童文学经典，新英国版封面平装版',
                    salePrice:'￥284.70',
                    delPrice:'￥438.00',
                    commentCount:271708,
                    score:4.6,
                },
                {
                    pic:'./src/assets/images/value_buy/production/produ1.jpg',
                    rank:'畅销榜第5名',
                    title:'DK乐高创意搭建（套装共2册）',
                    full:'1',
                    discountPrice:'￥152.00',
                    salePrice:'￥252.00',
                    delPrice:'￥336.00',
                    commentCount:1417,
                    score:4.83,
                },
                {
                    pic:'./src/assets/images/value_buy/production/produ3.jpg',
                    rank:'畅销榜第7名',
                    title:'神奇校车大家族（全73册）',
                    full:'1',
                    discountPrice:'￥419.70',
                    salePrice:'￥819.70',
                    delPrice:'￥828.00',
                    commentCount:2345794,
                    score:4.89,
                },
                {
                    pic:'./src/assets/images/value_buy/production/produ4.jpg',
                    rank:'畅销榜第8名',
                    title:'语言表达第一课（全4册）',
                    full:'1',
                    discountPrice:'￥56.90',
                    salePrice:'￥106.90',
                    delPrice:'￥108.00',
                    commentCount:7999,
                    score:4.56,
                },
            ],
            send_List:[
                {
                    pic:'./src/assets/images/value_buy/9.9send/9.9-send1.jpg',
                    descri:'索尔诺裤架加固铁艺裤挂S形多功能魔术裤夹裤子衣架衣柜收纳k单支装',
                    price:'￥59.9',
                },
                {
                    pic:'./src/assets/images/value_buy/9.9send/9.9-send2.jpg',
                    descri:'伊迪梦家纺全棉四件套三件套单人床1.2米纯棉床上用品1.5m1.8米/2.0m双人床品套件DY02',
                    price:'￥89.00',
                },
                {
                    pic:'./src/assets/images/value_buy/9.9send/9.9-send3.jpg',
                    descri:'bianli 倍乐个性杯套高硼硅玻璃水杯 250ml',
                    price:'￥25.00',
                },
                {
                    pic:'./src/assets/images/value_buy/9.9send/9.9-send4.jpg',
                    descri:'伊迪梦家纺 全棉被罩单件单品被套 斜纹纯棉床上用品200*230 220*240双人床FY31',
                    price:'￥199.00',
                },
                {
                    pic:'./src/assets/images/value_buy/9.9send/9.9-send5.jpg',
                    descri:'伊迪梦家纺 全棉单品被套被罩单件 纯棉斜纹高支高密200*230床上用品大小单人双人床FY11',
                    price:'￥89.00',
                },
                {
                    pic:'./src/assets/images/value_buy/9.9send/9.9-send6.jpg',
                    descri:'索尔诺简易鞋架 多层家用收纳鞋柜简约现代经济型组装防尘鞋架子K323',
                    price:'￥62.9',
                },
                {
                    more_icon:'1',
                    more_find:'1',
                },
            ],
            addBuy_List:[
                {
                    pic:'./src/assets/images/value_buy/addBuy/add1.jpg',
                    rank:'已被14467人加购',
                    title:'刑法学讲义（火爆全网，罗翔讲刑法，通俗有趣，900万人学到上头，收获生活中的法律智慧。人民日报、央视网联合推荐）',
                    salePrice:'￥46.90',
                    delPrice:'￥68.00',
                    commentCount:1133,
                    score:4.84,
                },
                {
                    pic:'./src/assets/images/value_buy/addBuy/add2.jpg',
                    rank:'已被12900人加购',
                    title:'中华人民共和国民法典(32开压纹烫金版 附草案说明) 2020年6月新版 团购电话：4001066666转6',
                    full:'1',
                    salePrice:'￥14.70',
                    delPrice:'￥28.00',
                    commentCount:40209,
                    score:4.58,
                },
                {
                    pic:'./src/assets/images/value_buy/addBuy/add3.jpg',
                    rank:'已被8981人加购',
                    title:'追风筝的人（2018年新版）',
                    full:'1',
                    salePrice:'￥34.50',
                    delPrice:'￥36.00',
                    commentCount:2725097,
                    score:4.79,
                },
                {
                    pic:'./src/assets/images/value_buy/addBuy/add4.jpg',
                    rank:'已被8755人加购',
                    title:'现代汉语词典(第7版) 商务印书馆',
                    salePrice:'￥93.00',
                    delPrice:'￥109.00',
                    commentCount:551442,
                    score:4.91,
                },
            ],
            pintuan_List:[
                {
                    pic:'./src/assets/images/value_buy/pingtuan/pin1.jpg',
                    descri:'神奇校车·图画书版（全12册，新增科学博览会1册）',
                    price:'￥143',
                    havedBuy:'已团:70148件',
                },
                {
                    pic:'./src/assets/images/value_buy/pingtuan/pin2.jpg',
                    descri:'一看就会的思维导图启蒙绘本（歪歪兔童书馆出品）',
                    price:'￥49',
                    havedBuy:'已团:43935件',
                },
                {
                    pic:'./src/assets/images/value_buy/pingtuan/pin3.jpg',
                    descri:'皮特猫·3~6岁好性格养成书：共四辑（套装1~4辑）（乐观、自信、执著……荣获19项大奖的好性格榜样，在美国家喻户晓）',
                    price:'￥259.9',
                    havedBuy:'已团:31113件',
                },
                {
                    pic:'./src/assets/images/value_buy/pingtuan/pin4.jpg',
                    descri:'米小圈上学记一年级（套装共4册）',
                    price:'￥49',
                    havedBuy:'已团:29720件',
                },
                {
                    pic:'./src/assets/images/value_buy/pingtuan/pin5.jpg',
                    descri:'快乐读书吧二年级上全套小鲤鱼跳龙门二年级注音版5册一只想飞的猫孤独的小螃蟹小狗的小房子小学生二年级课外书老师推荐',
                    price:'￥22.8',
                    havedBuy:'已团:26693件',
                },
                {
                    pic:'./src/assets/images/value_buy/pingtuan/pin6.jpg',
                    descri:'半小时漫画中国史1-4+世界史（共5册）（看半小时漫画，通五千年历史！漫画式科普开创者二混子新作！）（随机签章版）',
                    price:'￥96.9',
                    havedBuy:'已团:26007件',
                },
                {
                    more_icon:'1',
                    more_find:'1',
                },
            ],
            attention_List:[
                {
                    pic:'./src/assets/images/value_buy/attention/att1.jpg',
                    rank:'已被40人关注',
                    title:'丰子恺万般滋味，都是生活',
                    full:'1',
                    salePrice:'￥35.80',
                    delPrice:'￥42.00',
                    commentCount:365008,
                    score:4.97,
                },
                {
                    pic:'./src/assets/images/value_buy/attention/att2.jpg',
                    rank:'已被34人关注',
                    title:'窗边的小豆豆(2018版)',
                    full:'1',
                    salePrice:'￥39.50',
                    delPrice:'￥39.50',
                    commentCount:1293354,
                    score:4.77,
                },
                {
                    pic:'./src/assets/images/value_buy/attention/att3.jpg',
                    rank:'已被32人关注',
                    title:'人生海海（麦家重磅力作，莫言、董卿盛赞，发行量超150万册，豆瓣2019年度中国小说榜TOP·1）',
                    full:'1',
                    salePrice:'￥55.00',
                    delPrice:'￥55.00',
                    commentCount:523486,
                    score:4.88,
                },
                {
                    pic:'./src/assets/images/value_buy/attention/att4.jpg',
                    rank:'已被30人关注',
                    title:'马尔克斯：百年孤独（50周年纪念版）',
                    salePrice:'￥38.00',
                    delPrice:'￥55.00',
                    commentCount:1637815,
                    score:4.69,
                }
            ],
            sales_List:[
                {
                    pic:'./src/assets/images/value_buy/sales/sale1.jpg',
                    descri:'流浪的地球（刘慈欣著，无删节无改写，大人孩子均可阅读，此版本当当网销量遥遥领先！根据本书改编的同名电影2019春节上映。）',
                    price:'￥24.70',
                },
                {
                    pic:'./src/assets/images/value_buy/sales/sale2.jpg',
                    descri:'侦探与小偷 （教育部统编《语文》推荐阅读，与语文教材无缝对接，手绘精美插图，金钥匙儿童文学大系）',
                    price:'￥22.10',
                },
                {
                    pic:'./src/assets/images/value_buy/sales/sale3.jpg',
                    descri:'新课标 边城（沈从文代表作）',
                    price:'￥29.4',
                },
                {
                    pic:'./src/assets/images/value_buy/sales/sale4.jpg',
                    descri:'童年（统编版快乐读书吧·六年级上指定阅读，俄中直译全译本，北师大著名翻译家郑海凌翻译，非改写&非编译）',
                    price:'￥20.00',
                },
                {
                    pic:'./src/assets/images/value_buy/sales/sale5.jpg',
                    descri:'我的第一本地理启蒙书',
                    price:'￥37.40',
                },
                {
                    pic:'./src/assets/images/value_buy/sales/sale6.jpg',
                    descri:'小王子（名家全译本，原版插图精美再现，版语文教材阅读，傅雷翻译出版奖得主郑克鲁法语原文直译）',
                    price:'￥22.10',
                },
                {
                    more_icon:'1',
                    more_find:'1',
                },
            ],
            hotsale_List:[
                {
                    pic:'./src/assets/images/value_buy/hotSales/hot1.jpg',
                    rank:'热卖榜第1名',
                    title:'包邮正品联通4G小屏幕2300万像素安卓手机',
                    salePrice:'￥200.00',
                    delPrice:'￥200.00',
                    commentCount:0,
                    score:0,
                },
                {
                    pic:'./src/assets/images/value_buy/hotSales/hot2.jpg',
                    rank:'热卖榜第2名',
                    title:'桌面大风力电风扇小型可充电学生宿舍寝室家用床上办公室台式usb风扇迷你随身静音手持便携式小米数码专营店',
                    salePrice:'￥50.00',
                    delPrice:'￥50.00',
                    commentCount:1,
                    score:1,
                },
                {
                    pic:'./src/assets/images/value_buy/hotSales/hot3.jpg',
                    rank:'热卖榜第3名',
                    title:'机顶闪光灯柔光罩 580EXII 永诺YN568EX 万用柔光罩 外闪柔光罩',
                    salePrice:'￥30.00',
                    delPrice:'￥30.00',
                    commentCount:0,
                    score:0,
                },
                {
                    pic:'./src/assets/images/value_buy/hotSales/hot1.jpg',
                    rank:'热卖榜第1名',
                    title:'包邮正品联通4G小屏幕2300万像素安卓手机',
                    salePrice:'￥200.00',
                    delPrice:'￥200.00',
                    commentCount:0,
                    score:0,
                },
            ],
            recom_List:[
                {
                    pic:'./src/assets/images/value_buy/recommend/recom1.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom2.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom3.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom4.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom5.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom6.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom7.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom8.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom9.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom10.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom11.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom12.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom13.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom14.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom15.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom16.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom17.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom18.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom19.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
                {
                    pic:'./src/assets/images/value_buy/recommend/recom20.jpg',
                    descri:'欢喜：冯唐2021金句日历（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）',
                    price:'￥67.62',
                },
            ]
        }
    },
    methods:{
        add(){
            Toast({
            message: '添加成功',
            position: 'middle',
            duration: 2000
            });
        }
    }
}
</script>

<style scoped>
    main{
        background-color: #eeeeee;
    }
    header{
        width: 100%;
    }
    header img{
        width: 100%;
    }
    .value_title{
        overflow: hidden;
        width: 100%;
        border-bottom: 1px solid #e4e4e4;
        box-sizing: border-box;
        position: relative;
        background-color: white;
    }
    .value_title span{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 44px;
        height: 44px;
        background:url("../assets/images/classify/type/left.jpg") no-repeat center;
        background-size: 20px;
    }
    .value_title p{
        text-align: center;
        line-height: 44px;
        font-size: 17px;
    }
    .value_title i{
        position: absolute;
        right: 0px;
        top: 0px;
        width: 44px;
        height: 44px;
        background: url("../assets/images/classify/type/more.png") no-repeat center;
        background-size: 36px;
    }
    .value_indu{
        overflow: hidden;
        width: 100%;
        background-color: white;
    }
    .value_indu li{
        float: left;
        height: 100%;
        width: 20%;
        box-sizing: border-box;
        border-right: 0.5px solid rgba(246, 246, 246);
    }
    .value_indu li:nth-of-type(5n){
        border-right: none;
    }
    .value_indu li img{
        width: 100%;
    }
    .value_icon{
        overflow: hidden;
        width: 100%;
        border-top: 0.5px solid rgba(246, 246, 246);
        box-sizing: border-box;
    }
    .value_icon li{
        float: left;
        height: 100%;
        width: 20%;
        box-sizing: border-box;
        background-color: white;
        border-right: 0.5px solid rgba(246, 246, 246);
    }
    .value_icon li:nth-of-type(5n){
        border-right: none;
    }
    .value_icon li img{
        width: 100%;
    }
    .promo{
        width: 100%;
        overflow: hidden;
        background: url('../assets/images/value_buy/promotion/prom_img.png') no-repeat;
        padding: 13px;
        box-sizing: border-box;
        position: relative;
    }
    .promo p{
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        color: white;
    }
    .promo p span{
        position: absolute;
        font-size: 13px;
        color: white;
        right: 8%;
        top: 6%;
        font-weight: normal;
    }
    .promo p i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/right1.png") no-repeat;
        background-size: 15px;
        position: absolute;
        right: 4%;
        top: 6.5%;
    }
    .promo ul{
        width: 100%;
        overflow: hidden;
    }
    .promo ul li{
        width: 31.66%;
        padding: 10px 9px 0px;
        box-sizing: border-box;
        float: left;
        margin-right: 2%;
        margin-top: 2%;
        text-align: center;
        background-color: white;
        border-radius: 10px;
    }
    .promo ul li:nth-of-type(3n){
        margin-right: 0px;
    }
    .promo ul li h3{
        width: 100%;
        color: #943dff;
        font-size: 14px;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示2行 */
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .promo ul li:nth-of-type(5n) h3{
        -webkit-line-clamp: 1;
    }
    .promo ul p{
        font-size: 14px;
        font-weight: normal;
        color: #000;
    }
    .promo ul img{
        width: 80%;
        margin-top: 10px;
    }
    .now_kill{
        width: 100%;
        height: 40%;
        background: url("../assets/images/value_buy/now_kill/9.9-background.png") no-repeat;
        background-size: 100%;
        background-color: white;
        padding-bottom: 3%;
        position: relative;
    }
    .now_kill .now_img{
        margin: 0px auto;
        width: 33.33%;
        padding: 5% 0;
    }
    .now_kill .now_img span{
        position: absolute;
        font-size: 13px;
        color: white;
        right: 8%;
        top: 8%;
        font-weight: normal;
    }
    .now_kill .now_img i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/right1.png") no-repeat;
        background-size: 15px;
        position: absolute;
        right: 4%;
        top: 9%;
    }
    .now_kill .now_img img{
        width: 100%;
    }
    .now_text{
        width: 100%;
        overflow: auto;
    }
    .now_text::-webkit-scrollbar{
        display: none;
    }
    .now_text ul{
        width: 330%;
        overflow: hidden;
    }
    .now_text ul li{
        width: 7.93%;
        float: left;
        margin-left: 1%;
        padding-bottom: 1%;
        box-sizing: border-box;
        background-color: white;
        border-radius: 7px;
        overflow: hidden;
        box-shadow: 0px 2.4px 4.1px #d7d7d7;
    }
    .now_text ul img{
        width: 100%;
    }
    .now_text p{
        text-align: center;
        font-size: 13px;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示2行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .now_text span{
        display: block;
        text-align: center;
        font-size: 16px;
        color: red;
    }
    .now_text u{
        display: block;
        font-size: 11px;
        text-align: center;
        text-decoration: line-through;
        color: gray;
    }
    .now_text li:nth-of-type(11){
        background-color: unset;
        box-shadow: none;
        width: 7.93%;
        margin-top: 4%;
        padding-bottom: 9.9%;
        position: relative;
    }
    .now_text .route>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/timg.png") no-repeat -422px -225px;
        position: absolute;
        background-color: white;
        right: 35%;
        top: 10%;
        border-radius: 4px;
    }
    .now_text .route>b{
        color: white;
        font-weight: normal;
        font-size: 13px;
        position: absolute;
        right: 12%;
        top: 25%;
    }
    .product ul{
        overflow: hidden;
    }
    .product ul li{
        width: 100%;
        height: 33.33%;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
        padding: 2% 0;
        margin-top: 2%;
        background-color: white;
    }
    .product ul .rank{
        height: 38%;
        width: 25%;
        margin-bottom: 3%;
        background-images: linear-gradient(133deg,#f296bd,#ee3b31);
        border-radius: 0 0 8px 0;
        color: white;
    }
    .product ul li>span{
        position: absolute;
        right: 6%;
        top: 2%;
        color: #a1a1a1;
        font-size: 14px;

    }
    .product ul li>i{
        height: 6%;
        width: 3.5%;
        background: url("../assets/images/value_buy/production/right.jpg") no-repeat;
        background-size: 100%;
        position: absolute;
        right: 2%;
        top: 4%;
    }
    .product .left{
        width: 33.33%;
        float: left;
        margin: 2% 0 2% 2%;
    }
    .product .left img{
        width: 100%;
    }
    .right{
        width: 62.66%;
        height: 59%;
        overflow: hidden;
        float: right;
        padding: 2% 2% 2% 2%;
        box-sizing: border-box;
    }
    .right p{
        font-size: 15px;
        margin: 2% 2% 4% 0;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .full_discount{
        height: 45px;
    }
    .right .full_discount h4{
        display: inline-block;
        background-color: #f2303c;
        color: white;
        padding: 1% 0.5%;
        font-size: 13px;
    }
    .right .full_discount h3{
        color: red;
        font-size: 14px;
        padding: 2% 2% 2% 0;
    }
    .right .full_discount h3>span{
        font-weight: bold;
        font-size: 14px;
    }
    .right h2{
        margin-top: 3%;
    }
    .right h2>span{
        color: red;
        font-size: 15px;
    }
    .right h2>i{
        color: gray;
        text-decoration: line-through;
        font-size: 10px;
        font-style: normal;
        margin-left: 7%;
    }
    .count{
        position: relative;
        overflow: hidden;
        margin-top: 7%;
        padding-bottom: 2%;
    }
    .count>img{
        width: 10%;
        border: 1px solid #d5d5d5;
        border-radius: 6px;
        padding: 2px;
        position: absolute;
        right: 2%;
        top: 0;
    }
    .count>.cright{
        float: right;
        margin-left: 5%;
        margin-right: 16%;
        width: 20%;
    }
    .count>.cleft{
        float: right;
        width: 27%;
    }
    .count .cleft>img{
        width: 20%;
    }
    .count .cleft>span{
        color: #98a6aa;
        font-size: 10px;
    }
    .count .cright>img{
        width: 25%;
    }
    .count .cright>span{
        color: #98a6aa;
        font-size: 10px;
    }
    .send{
        width: 100%;
        background: url("../assets/images/value_buy/9.9send/9.9-background.png") no-repeat;
        margin-top: 5%;
        background-color: white;
        background-size: 100%;
        text-align: center;
        position: relative;
    }
    .top>img{
        width: 35.33%;
        padding: 4% 0;
    }
    .send .top>span{
        position: absolute;
        font-size: 13px;
        color: white;
        right: 8%;
        top: 8%;
        font-weight: normal;
    }
    .send .top>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/right1.png") no-repeat;
        background-size: 15px;
        position: absolute;
        right: 4%;
        top: 8.5%;
    }
    .nine_send{
        width: 100%;
        overflow: auto;
        height: 88%;
    }
    .nine_send::-webkit-scrollbar{
        display: none;
    }
    .nine_send ul{
        width: 210%;
        overflow: hidden;
    }
    .nine_send ul>li{
        width: 12%;
        background-color: white;
        box-sizing: border-box;
        float: left;
        margin-left: 2%;
        margin-bottom: 2%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 2.4px 4.1px #d7d7d7;
    }
    .nine_send li>img{
        width: 100%;
    }
    .nine_send li>h3{
        font-size: 13px;
        padding: 2% 6% 0 6%;
        color: #323232;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .nine_send li>p{
        font-size: 20px;
        text-align: center;
        color: red;
        padding: 8% 0 13%;
    }
    .nine_send ul>li:nth-of-type(7){
        background-color: unset;
        box-shadow: none;
        position: relative;
        padding-bottom: 12%;
        margin-top: 7%;
    }
    .nine_send .route>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/timg.png") no-repeat -422px -225px;
        position: absolute;
        background-color: white;
        right: 35%;
        top: 10%;
        border-radius: 4px;
    }
    .nine_send .route>b{
        color: white;
        font-weight: normal;
        font-size: 13px;
        position: absolute;
        right: 12%;
        top: 25%;
    }
    .addBuy{
        width: 100%;
        margin-top: 4%;
    }
    .addBuy ul{
        overflow: hidden;
    }
    .addBuy ul li{
        width: 100%;
        height: 33.33%;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
        padding: 2% 0;
        margin-top: 2%;
        background-color: white;
    }
    .addBuy ul .rank{
        height: 38%;
        width: 34%;
        margin-bottom: 3%;
        background-images: linear-gradient(127deg,#ff83fb,#e24286);
        border-radius: 0 0 8px 0;
        color: white;
    }
    .addBuy ul li>span{
        position: absolute;
        right: 6%;
        top: 2%;
        color: #a1a1a1;
        font-size: 14px;

    }
    .addBuy ul li>i{
        height: 6%;
        width: 3.5%;
        background: url("../assets/images/value_buy/production/right.jpg") no-repeat;
        background-size: 100%;
        position: absolute;
        right: 2%;
        top: 4%;
    }
    .addBuy .left{
        width: 33.33%;
        float: left;
        margin: 2% 0 2% 2%;
    }
    .addBuy .left img{
        width: 100%;
    }
    .addBuy .right{
        width: 62.66%;
        height: 59%;
        overflow: hidden;
        float: right;
        padding: 2% 2% 2% 2%;
        box-sizing: border-box;
    }
    .addBuy .right p{
        font-size: 15px;
        margin: 2% 2% 4% 0;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .addBuy .full_discount{
        height: 20px;
    }
    .addBuy .right .full_discount h4{
        display: inline-block;
        background-color: #f2303c;
        color: white;
        padding: 1% 0.5%;
        font-size: 13px;
    }
    .addBuy .right h2{
        margin-top: 3%;
    }
    .addBuy .right h2>span{
        color: red;
        font-size: 15px;
    }
    .addBuy .right h2>i{
        color: gray;
        text-decoration: line-through;
        font-size: 10px;
        font-style: normal;
        margin-left: 7%;
    }
    .addBuy .count{
        position: relative;
        overflow: hidden;
        margin-top: 7%;
        padding-bottom: 2%;
    }
    .addBuy .count>img{
        width: 10%;
        border: 1px solid #d5d5d5;
        border-radius: 6px;
        padding: 2px;
        position: absolute;
        right: 2%;
        top: 0;
    }
    .addBuy .count>.cright{
        float: right;
        margin-left: 5%;
        margin-right: 16%;
        width: 20%;
    }
    .addBuy .count>.cleft{
        float: right;
        width: 27%;
    }
    .addBuy .count .cleft>img{
        width: 20%;
    }
    .addBuy .count .cleft>span{
        color: #98a6aa;
        font-size: 10px;
    }
    .addBuy .count .cright>img{
        width: 25%;
    }
    .addBuy .count .cright>span{
        color: #98a6aa;
        font-size: 10px;
    }
    .pingtuan{
        width: 100%;
        background: url("../assets/images/value_buy/pingtuan/pintuan-background.png") no-repeat;
        margin-top: 5%;
        background-color: white;
        background-size: 100%;
        text-align: center;
        position: relative;
    }
    .pingtuan .top>img{
        width: 30.33%;
        padding: 4% 0;
    }
    .pingtuan .top>span{
        position: absolute;
        font-size: 13px;
        color: white;
        right: 8%;
        top: 8%;
        font-weight: normal;
    }
    .pingtuan .top>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/right1.png") no-repeat;
        background-size: 15px;
        position: absolute;
        right: 4%;
        top: 8.5%;
    }
    .pin{
        width: 100%;
        overflow: auto;
        height: 88%;
    }
    .pin::-webkit-scrollbar{
        display: none;
    }
    .pin ul{
        width: 210%;
        overflow: hidden;
    }
    .pin ul>li{
        width: 12%;
        background-color: white;
        box-sizing: border-box;
        float: left;
        margin-left: 2%;
        margin-bottom: 2%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 2.4px 4.1px #d7d7d7;
    }
    .pin li>img{
        width: 100%;
    }
    .pin li>h3{
        font-size: 13px;
        padding: 2% 6% 0 6%;
        color: #323232;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .pin li>p{
        font-size: 17px;
        text-align: center;
        color: red;
        padding-top: 7%;
    }
    .pin ul>li:nth-of-type(7){
        background-color: unset;
        box-shadow: none;
        position: relative;
        padding-bottom: 12%;
        margin-top: 7%;
    }
    .pin li>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/timg.png") no-repeat -422px -225px;
        position: absolute;
        background-color: white;
        right: 35%;
        top: 10%;
        border-radius: 4px;
    }
    .pin li>b{
        color: white;
        font-weight: normal;
        font-size: 13px;
        position: absolute;
        right: 12%;
        top: 25%;
    }
    .pin li>span{
        color: #98a6aa;
        font-size: 11px;
        margin-bottom: 6%;
        display: inline-block;
    }

    .attention{
        width: 100%;
        margin-top: 4%;
    }
    .attention ul{
        overflow: hidden;
    }
    .attention ul li{
        width: 100%;
        height: 33.33%;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
        padding: 2% 0;
        margin-top: 2%;
        background-color: white;
    }
    .attention ul .rank{
        height: 38%;
        width: 29%;
        margin-bottom: 3%;
        background-images: linear-gradient(133deg,#e5a9ff,#8e21fc);
        border-radius: 0 0 8px 0;
        color: white;
    }
    .attention ul li>span{
        position: absolute;
        right: 6%;
        top: 2%;
        color: #a1a1a1;
        font-size: 14px;

    }
    .attention ul li>i{
        height: 6%;
        width: 3.5%;
        background: url("../assets/images/value_buy/production/right.jpg") no-repeat;
        background-size: 100%;
        position: absolute;
        right: 2%;
        top: 4%;
    }
    .attention .left{
        width: 33.33%;
        float: left;
        margin: 2% 0 2% 2%;
    }
    .attention .left img{
        width: 100%;
    }
    .attention .right{
        width: 62.66%;
        height: 59%;
        overflow: hidden;
        float: right;
        padding: 2% 2% 2% 2%;
        box-sizing: border-box;
    }
    .attention .right p{
        font-size: 15px;
        margin: 2% 2% 4% 0;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .attention .full_discount{
        height: 20px;
    }
    .attention .right .full_discount h4{
        display: inline-block;
        background-color: #f2303c;
        color: white;
        padding: 1% 0.5%;
        font-size: 13px;
    }
    .attention .right h2{
        margin-top: 3%;
    }
    .attention .right h2>span{
        color: red;
        font-size: 15px;
    }
    .attention .right h2>i{
        color: gray;
        text-decoration: line-through;
        font-size: 10px;
        font-style: normal;
        margin-left: 7%;
    }
    .attention .count{
        position: relative;
        overflow: hidden;
        margin-top: 7%;
        padding-bottom: 2%;
    }
    .attention .count>img{
        width: 10%;
        border: 1px solid #d5d5d5;
        border-radius: 6px;
        padding: 2px;
        position: absolute;
        right: 2%;
        top: 0;
    }
    .attention .count>.cright{
        float: right;
        margin-left: 5%;
        margin-right: 16%;
        width: 20%;
    }
    .attention .count>.cleft{
        float: right;
        width: 27%;
    }
    .attention .count .cleft>img{
        width: 20%;
    }
    .attention .count .cleft>span{
        color: #98a6aa;
        font-size: 10px;
    }
    .attention .count .cright>img{
        width: 25%;
    }
    .attention .count .cright>span{
        color: #98a6aa;
        font-size: 10px;
    }

    .sale{
        width: 100%;
        background: url("../assets/images/value_buy/sales/sale-background.png") no-repeat;
        margin-top: 5%;
        background-color: white;
        background-size: 100%;
        text-align: center;
        position: relative;
    }
    .sale .top>img{
        width: 30.33%;
        padding: 4% 0;
    }
    .sale .top>span{
        position: absolute;
        font-size: 13px;
        color: white;
        right: 8%;
        top: 8%;
        font-weight: normal;
    }
    .sale .top>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/right1.png") no-repeat;
        background-size: 15px;
        position: absolute;
        right: 4%;
        top: 8.5%;
    }
    .sale_product{
        width: 100%;
        overflow: auto;
        height: 88%;
    }
    .sale_product::-webkit-scrollbar{
        display: none;
    }
    .sale_product ul{
        width: 210%;
        overflow: hidden;
    }
    .sale_product ul>li{
        width: 12%;
        background-color: white;
        box-sizing: border-box;
        float: left;
        margin-left: 2%;
        margin-bottom: 2%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 2.4px 4.1px #d7d7d7;
    }
    .sale_product li>img{
        width: 100%;
    }
    .sale_product li>h3{
        font-size: 13px;
        padding: 2% 6% 0 6%;
        color: #323232;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .sale_product li>p{
        font-size: 20px;
        text-align: center;
        color: red;
        padding: 8% 0 13%;
    }
    .sale_product ul>li:nth-of-type(7){
        background-color: unset;
        box-shadow: none;
        position: relative;
        padding-bottom: 12%;
        margin-top: 7%;
    }
    .sale_product li>i{
        height: 14px;
        width: 14px;
        background: url("../assets/images/value_buy/promotion/timg.png") no-repeat -422px -225px;
        position: absolute;
        background-color: white;
        right: 35%;
        top: 10%;
        border-radius: 4px;
    }
    .sale_product li>b{
        color: white;
        font-weight: normal;
        font-size: 13px;
        position: absolute;
        right: 12%;
        top: 25%;
    }

    .hotSales{
        width: 100%;
        margin-top: 4%;
    }
    .hotSales ul{
        overflow: hidden;
    }
    .hotSales ul li{
        width: 100%;
        height: 33.33%;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
        padding: 2% 0;
        margin-top: 2%;
        background-color: white;
    }
    .hotSales ul .rank{
        height: 38%;
        width: 26%;
        margin-bottom: 3%;
        background-images: linear-gradient(133deg,#f296bd,#ee3b31);
        border-radius: 0 0 8px 0;
        color: white;
    }
    .hotSales ul li>span{
        position: absolute;
        right: 6%;
        top: 2%;
        color: #a1a1a1;
        font-size: 14px;

    }
    .hotSales ul li>i{
        height: 6%;
        width: 3.5%;
        background: url("../assets/images/value_buy/production/right.jpg") no-repeat;
        background-size: 100%;
        position: absolute;
        right: 2%;
        top: 4%;
    }
    .hotSales .left{
        width: 33.33%;
        float: left;
        margin: 2% 0 2% 2%;
    }
    .hotSales .left img{
        width: 100%;
    }
    .hotSales .right{
        width: 62.66%;
        height: 59%;
        overflow: hidden;
        float: right;
        padding: 2% 2% 2% 2%;
        box-sizing: border-box;
    }
    .hotSales .right p{
        font-size: 15px;
        margin: 2% 2% 4% 0;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .hotSales .full_discount{
        height: 20px;
    }
    .hotSales .right h2{
        margin-top: 3%;
    }
    .hotSales .right h2>span{
        color: red;
        font-size: 15px;
    }
    .hotSales .right h2>i{
        color: gray;
        text-decoration: line-through;
        font-size: 10px;
        font-style: normal;
        margin-left: 7%;
    }
    .hotSales .count{
        position: relative;
        overflow: hidden;
        margin-top: 7%;
        padding-bottom: 2%;
    }
    .hotSales .count>img{
        width: 10%;
        border: 1px solid #d5d5d5;
        border-radius: 6px;
        padding: 2px;
        position: absolute;
        right: 2%;
        top: 0;
    }
    .hotSales .count>.cright{
        float: right;
        margin-left: 5%;
        margin-right: 16%;
        width: 20%;
    }
    .hotSales .count>.cleft{
        float: right;
        width: 27%;
    }
    .hotSales .count .cleft>img{
        width: 20%;
    }
    .hotSales.count .cleft>span{
        color: #98a6aa;
        font-size: 10px;
    }
    .hotSales .count .cright>img{
        width: 25%;
    }
    .hotSales .count .cright>span{
        color: #98a6aa;
        font-size: 10px;
    }

    .recommend{
        width: 100%;
        background: url("../assets/images/value_buy/recommend/recom-background.png") no-repeat;
        margin-top: 5%;
        background-color: white;
        background-size: 100%;
        position: relative;
    }
    .recommend>p{
        font-size: 20px;
        font-weight: bold;
        color: white;
        text-align: center;
        line-height: 60px;
    }
    .recom_book{
        width: 100%;
        overflow: auto;
    }
    .recom_book>ul{
        width: 600%;
        overflow: hidden;
    }
    .recom_book ul>li{
        width: 4.6%;
        background-color: white;
        box-sizing: border-box;
        float: left;
        margin-left: 0.4%;
        margin-bottom: 0.4%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 2.4px 4.1px #d7d7d7;
    }
    .recom_book li>img{
        width: 100%;
    }
    .recom_book li>h3{
        color: #323232;
        padding: 3% 8% 0;
        font-size: 12px;
        /* 以下几行代码，超出文字出现省略号... */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* 代表显示的行数  这里显示1行 */
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    .recom_book li>h2{
        color: red;
        font-size: 18px;
        text-align: center;
        padding: 4% 0 0;
    }
    .recom_book li>p{
        color: white;
    }

    .log_reg{
        overflow: hidden;
        width: 100%;
        background-color: white;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }

    .log_reg>h3{
        width: 25%;
        float: left;
        padding: 3% 2%;
        overflow: hidden;
    }
    .log_reg>h3>a{
        text-decoration: none;
        color: #4d525d;
    }
    .log_reg>h3>span{
        margin: 0 4%;
        font-size: 15px;
        display: inline-block;
    }
    .log_reg>h4{
        float: right;
        padding: 3% 2%;
        overflow: hidden;
    }
    .log_reg>h4>i{
        height: 10px;
        width: 8px;
        background: url("../assets/images/nav/goto-top-new.png") no-repeat;
        background-size: 100%;
        display: inline-block;
    }
    .log_reg>h4>b{
        font-style: normal;
        font-size: 12px;
        color: #4d525d;
        display: inline-block;
    }

    .go_top{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        position: fixed;
        right: 3%;
        bottom: 9%;
    }
    .go_top>a>img{
        width: 100%;
    }
</style>