<template>
    <main>
        <header>
            <i @click="back()"></i>
            <h1>当当登录</h1>
            <u></u>
        </header>
        <section>
            <p>账号密码登录</p>
            <h5 style="color:red;fontsize:10px" v-if="sign1">请输入账号</h5>
            <div class="login">
                <input type="text" placeholder="请输入手机号/邮箱/昵称" id="login" @keydown="keydown1()">
                <i v-show="n">x</i>
            </div>
            <div class="resgester">
                <input type="password" placeholder="请输入密码" id="password" @keydown="keydown2()">
                <i v-show="m">x</i>
            </div>
            <h5 style="color:red;fontsize:10px" v-if="sign2">密码不能为空</h5>
            <div class="login_button">
                <router-link :to="ro">
                    <button @click="judge()">登录</button>
                </router-link>
            </div>
            <div class="problem">
                <h3>忘记密码?</h3>
                <router-link to="/regester">
                    <h4>立即注册</h4>
                </router-link>
            </div>
            <div class="login_type">
                <ul>
                    <li>
                        <router-link to="/loginQQ">
                            <img src="../assets/images/login/qq.png" alt="">
                        </router-link>
                    </li>
                    <li></li>
                    <li>
                        <img src="../assets/images/login/zhifubao.png" alt="">
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data(){
        return{
            n:false,
            m:false,
            ro:'',
            sign1:false,
            sign2:false,
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        judge(){
            var zlo = document.getElementById('login');
            var zpa = document.getElementById('password');
            if(zlo.value!=''&&zpa.value!==''){
                this.ro='/index'
            }else if(zlo.value==''){
                this.sign1=true;
            }else if(zpa.value==''){
                this.sign2=true;
            }
        },
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
        text-align: center;
        line-height: 100%;
    }
    section i{
        height: 30%;
        width: 5%;
        color: white;
        border-radius: 50%;
        background-color: gray;
        position: absolute;
        right: 0;
        top: 37%;
        font-style: normal;
        text-align: center;
        line-height: 78%;
    }
    .login{
        height: 10%;
        width: 100%;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
    }
    .login>input{
        outline: none;
        height: 100%;
        width: 100%;
        border: none;
        color: #323232;
        background-color: #f0f0f0;
    }
    .resgester{
        height: 10%;
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        position: relative;
    }
    .resgester>input{
        outline: none;
        height: 100%;
        width: 100%;
        border: none;
        color: #323232;
        background-color: #f0f0f0;
    }
    .login_button{
        width: 100%;
        height: 9%;
        text-align:center;
        margin: 10% 0;
    }
    .login_button>a>button{
        outline: none;
        height: 100%;
        width: 90%;
        background-color: rgb(251,177,182);
        color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 2px 2px 2px #c8c8cd;
    }

    .problem{
        height: 7%;
        width: 100%;
        margin: 15% 0;
        box-sizing: border-box;
        padding-top: 3%;
    }
    .problem>h3{
        float: left;
        color: #f3344a;
        font-size: 15px;
    }
    .problem>a{
        float: right;
        color: #f3344a;
        font-size: 15px;
        text-decoration: none;
    }

    .login_type{
        height: 10%;
        width: 100%;
    }
    .login_type>ul{
        width: 100%;
        height: 100%;
    }
    .login_type li{
        width: 33.33333%;
        height: 100%;
        float: left;
    }
    .login_type li>a>img{
        height: 94%;
        border-radius: 50%;
    }
    .login_type li:nth-of-type(3) img{
        height: 80%;
        float:right;
        border-radius: 50%;
    }
</style>