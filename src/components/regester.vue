<template>
    <main>
        <header>
            <i @click="back()"></i>
            <h1>当当登录</h1>
            <u></u>
        </header>
        <section>
            <p>注册新用户</p>
            <h5 style="color:red;fontsize:10px" v-if="ph">手机号长度需为11位</h5>
            <h5 style="color:red;fontsize:10px" v-if="tex">请输入手机号</h5>
            <div class="phone">
                <input type="number" placeholder="请输入你的手机号" id="tel">
            </div>
            <div class="regester">
                <router-link :to="ro">
                    <button @click="judge()">获取验证码</button>
                </router-link>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data(){
        return{
            ph:false,
            tex:false,
            ro:'',
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        judge(){
            var pho=document.getElementById('tel');
            if(pho.value.length!=11&&pho.value!=''){
                this.ph=true;
            }else if(pho.value==''){
                this.tex=true;
            }
            else if(pho.value.length==11){
                this.ro='/login'
            }
        }
    }
}
</script>

<style scoped>
    main{
        height: 100%;
        background-color: #ddd6;
    }
    header{
        height: 39px;
        width: 100%;
        background-color: white;
        border-bottom: 1px solid #f6f8fa;
    }
    header>h1{
        text-align: center;
        font-size: 15px;
        padding: 0 20%;
        line-height: 40px;
        display: inline-block;
    }
    header>i{
        height: 100%;
        width: 20%;
        background: url("../assets/images/seckill/back.png") no-repeat center center;
        background-size: 10%;
        float: left;
    }
    header>u{
        height: 100%;
        width: 12%;
        background: url("../assets/images/classify/type/more.png") no-repeat center;
        background-size: 60%;
        float: right;
    }
    section{
        height: calc(100vh - 40px);
        width: 100%;
        padding: 10%;
        box-sizing: border-box;
    }
    section>p{
        height: 10%;
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        line-height: 100%;
    }
    .phone{
        height: 10%;
        width: 100%;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
    }
    .phone>input{
        outline: none;
        height: 100%;
        width: 100%;
        border: none;
        color: #323232;
        background-color: #f0f0f0;
    }
    .regester{
        width: 100%;
        height: 9%;
        text-align:center;
        margin: 10% 0;
    }
    .regester>a>button{
        outline: none;
        height: 100%;
        width: 90%;
        background-color: rgb(251,177,182);
        color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 2px #c8c8cd;
    }
</style>