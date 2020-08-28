<template>
    <div id="comment">
        <div id="comment_head">
            <ul>
                <li @click="changeco('短评')">短评</li>
                <li @click="changeco('长评')">长评</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.id=this.$route.params.id;
        this.$emit('send',this.$route.params.id);
    },
}
</script>

<style scoped>

</style>