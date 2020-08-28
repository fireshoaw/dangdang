<template>
    <main>    
        <header>
            <i @click="back()"></i>
            <h1>当当拼团</h1>
        </header>
    </main>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
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
</style>