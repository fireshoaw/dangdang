<template>
    <main>
        <div class="qq_logo">
            <img src="../assets/images/login/logo_upice.png" alt="">
        </div>
        <p>亿万用户已选择QQ帐号登录应用</p>
        <div class="login">
            <router-link to="/index">
                <button>一键登录</button>
            </router-link>
        </div>
        <div class="notice">
            <h2>dangdang.com将获得以下权限:</h2>
            <ul>
                <li>访问你的详细资料（必选）</li>
                <li>访问你的基础资料（必选）</li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
    main{
        overflow: hidden;
        padding: 0 8%;
    }
    .qq_logo{
        width: 50%;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20%;
        text-align: center;
    }
    .qq_logo>img{
        width: 50%;
    }
    p{
        font-size: 14px;
        color: #777;
        line-height: 1;
        margin-top: 4%;
        text-align: center;
    }
    .login{
        width: 100%;
        text-align: center;
        margin-top: 22%;
    }
    .login>a>button{
        width: 100%;
        outline: none;
        background-color: rgb(18, 183, 245);
        color: white;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        padding: 4% 0;
    }
    .notice{
        margin-top: 40%;
        width: 100%;
    }
    .notice>h2{
        font-size: 16px;
        padding: 2% 0;
    }
    .notice>ul{
        width: 100%;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 5px;
    }
    .notice>ul>li{
        font-size: 12px;
        width: 100%;
        color: rgb(119, 119, 119);
        line-height: 1.2;
        padding: 5%;
    }
    .notice>ul>li:nth-of-type(1){
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
</style>
