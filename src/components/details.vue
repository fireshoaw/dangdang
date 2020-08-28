<template>
    <div>
        <div id="head-nav">
            <img src="../assets/images/index/nav/back.png" alt="" class="back" @click="back()">
            <ul id="title">
                <li v-for="(item,index) in list" @click="choose(index)">
                    <router-link :to="item.path+'/'+id">{{item.msg}}</router-link>
                </li>
            </ul>
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
        <div><router-view @send="get"></router-view></div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
            {
                path:'/goods',
                msg:'商品'
            },{
                path:'/select',
                msg:'详情'
            },{
                path:'/comment',
                msg:'评论'
            },{
                path:'/recomment',
                msg:'推荐'
            },
        ],
        nlist:[
            {
                path:'/index',
                src:'./src/assets/images/index/nav/index.png'
            },{
                path:'/type',
                src:'./src/assets/images/index/nav/type.png'
            },{
                path:'/like',
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
        id:'',
        
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        change(){
            this.boo=!this.boo;
        },
        get(a){
            this.id=a;
        },
        choose(a){
            var tag = document.getElementsByTagName('a');
            var title = document.getElementById('title')
            for(var i=0;i<4;i++){
                tag[i].style.color='black';
                title.children[i].style.borderBottom='white';
            }
            tag[a].style.color='rgb(255,129,97)';
            title.children[a].style.borderBottom=' 3px solid rgb(255,129,97)'; 
        }
    },
}
</script>

<style scoped>
    #head-nav{
        width: 100%;
        position: fixed;
        background-color: white;
        z-index: 1000;
    }
    #head-nav ul{
        display: block;
        width: 80%;
        margin: 2% auto;
        margin-top: 1%;
        padding-top: 2%;
        position: fixed;
        top: 0%;
        left: 25%;
    }
    #head-nav li{
        width: 14%;
        height: 100%;
        text-align: center;
        float: left;
        display: block;
        padding-bottom:2% ;
        margin-right: 3.5%;
        
    }
    #head-nav li:nth-of-type(1){
        color: rgb(255,129,97);
        border-bottom: 3px solid rgb(255,129,97);
    }
    #head-nav a{
        color: black;
        text-decoration: none;
    }
    #head-nav li:nth-of-type(1) a{
        color: rgb(255,129,97);
    }
    .show{
        position: absolute;
        right: 2%;
        top: 2%;
        width: 4%;
        padding-top: 4%;
        padding-right: 2%;
    }
    .back{
        width: 2.5%;
        padding: 3%;
    }
    #connect{
        position: absolute;
        width: 4%;
        right: 4%;
        bottom: 0%;
    }
    .select{
        color: rgb(255,129,97);;
        border-bottom: 3px solid rgb(255,129,97);
    }
    #hidden-nav{
        width: 100%;
        background-color: #eeeeee;
        position: fixed;
        top: 6%;
        z-index: 1000;
    }
    #hidden-nav li{
        float: left;
        width: 20%;
        text-align: center;
        padding:2% 0px;
    }
    #hidden-nav img{
        width: 50%;
    }
    
</style>