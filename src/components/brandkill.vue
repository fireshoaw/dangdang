<template>
    <main>
        <header>
            <i @click="back()"></i>
            <h1>品牌秒杀</h1>
        </header>
        <div class="time_over">
            <p>距结束{{getDate('2020-8-29')}}
                <span>{{hour}}</span>:<span>{{minunite}}</span>:<span>{{seco}}</span>
            </p>
        </div>
        <div class="production">
            <div class="kill_production" v-for="(item,index) in brandList">
                <img :src="item.topimg" alt="">
                <ul>
                    <li v-for="(item1,index1) in item.proList">
                        <img :src="item1.img" alt="">
                        <h3>
                            <span>{{item1.salePrice}}</span>
                            <i>{{item1.delPrice}}</i>
                        </h3>
                    </li>
                </ul>
            </div>
        </div>
        <br><br><br>
    </main>
</template>

<script>
export default {
    data(){
        return{
            hour:0,
            minunite:0,
            seco:0,
            brandList:[
                {
                    topimg:'./src/assets/images/brand_skill/pro1.jpg',
                    proList:[
                        {
                            img:'./src/assets/images/brand_skill/pro01.jpg',
                            salePrice:'￥28.8',
                            delPrice:'49.9'
                        },
                        {
                            img:'./src/assets/images/brand_skill/pro02.jpg',
                            salePrice:'￥39.8',
                            delPrice:'59.9'
                        },
                        {
                            img:'./src/assets/images/brand_skill/pro03.jpg',
                            salePrice:'￥21.8',
                            delPrice:'39.9'
                        },
                    ]
                },
                {
                    topimg:'./src/assets/images/brand_skill/pro2.jpg',
                    proList:[
                        {
                            img:'./src/assets/images/brand_skill/pro201.jpg',
                            salePrice:'￥69',
                            delPrice:'739'
                        },
                        {
                            img:'./src/assets/images/brand_skill/pro202.jpg',
                            salePrice:'￥69',
                            delPrice:'538'
                        },
                        {
                            img:'./src/assets/images/brand_skill/pro203.jpg',
                            salePrice:'￥149',
                            delPrice:'1499'
                        },
                    ]
                },
                {
                    topimg:'./src/assets/images/brand_skill/pro3.jpg',
                    proList:[
                        {
                            img:'./src/assets/images/brand_skill/pro301.jpg',
                            salePrice:'￥1',
                            delPrice:'22.8'
                        },
                        {
                            img:'./src/assets/images/brand_skill/pro302.jpg',
                            salePrice:'￥1',
                            delPrice:'22.8'
                        },
                        {
                            img:'./src/assets/images/brand_skill/pro303.jpg',
                            salePrice:'￥1',
                            delPrice:'22.8'
                        },
                    ]
                },
            ]
        }
    },
    methods:{
        getDate(lastTime){
            setInterval(() => {
                //获取客户端当前日期
            var localtime=new Date();
            //获取1970年到现在的毫秒
            var localms=localtime.getTime();

            //获取后来传入的时间
            var endtime=new Date(lastTime);
            //获取后来传入时间到1970年的毫秒
            var endms=endtime.getTime();

            var ms=endms-localms;

            var day=parseInt(ms/(1000*3600*24));
            var dayms=ms%(1000*3600*24);

            this.hour=parseInt(dayms/(1000*3600));
            var houms=dayms%(1000*3600);

            this.minunite=parseInt(houms/(1000*60));
            var minms=houms%(1000*60);

            this.seco=parseInt(minms/(1000));

            // var tag=document.getElementsByTagName("p");
            // tag[0].innerHTML=`剩余:${day}天${hour}小时${minunite}分钟${seco}秒`;
            }, 1000);
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    main{
        height: 100%;
    }
    header{
        height: 50px;
        width: 100%;
        background-color: white;
        border-bottom: 1px solid #f6f8fa;
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
    .time_over{
        height: 40px;
        width: 100%;
        text-align: center;
        margin-top: 5%;
    }
    .time_over>p{
        color: #FF463C;
        font-weight: bold;
        font-size: 17px;
        line-height: 24px;
    }
    .time_over>p>span{
        color: white;
        width: 28px;
        height: 24px;
        line-height: 24px;
        background-color: #FF463C;
        display: inline-block;
        border-radius: 5px;
    }

    .production{
        overflow: hidden;
        padding: 0 4%;
        width: 92%;
    }
    .kill_production{
        overflow: hidden;
        width: 100%;
        background: url("../assets/images/brand_skill/level_bg.png") no-repeat;
        border-radius: 7px;
        margin-bottom: 4%;
    }
    .kill_production>img{
        width: 100%;
    }
    .kill_production>ul{
        overflow: hidden;
        width: 94%;
        padding: 3%;
        box-sizing: border-box;
        margin: 0 3% 3%;
        border-radius: 0 0 10px 10px;
        background-color: white;
    }
    .kill_production>ul>li{
        width: 29.3333%;
        padding: 0 2%;
        float: left;
    }
    .kill_production li>img{
        width: 100%;
        border-radius: 3px;
    }
    .kill_production li>h3{
        width: 100%;
        text-align: center;
    }
    .kill_production h3>span{
        color: #FF463C;
        font-size: 15px;
    }
    .kill_production h3>i{
        font-style: normal;
        color: gray;
        font-size: 13px;
        text-decoration: line-through;
    }
</style>