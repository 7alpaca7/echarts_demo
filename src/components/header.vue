<script lang="ts">
    export default{
        data(){
            return{
                title:"数据可视化echarts demo",
                nowTime:"",
                timer: null as any
            }
        },
        mounted(){ 
            this.updateTime();
            this.timer = setInterval(this.updateTime,1000);
        },
        beforeUnmount(){
            if(this.timer){
                clearInterval(this.timer);
            }
        },
        methods:{
            updateTime(){
                const dt = new Date();
                const year = dt.getFullYear();
                const month = dt.getMonth();
                const day = dt.getDate();
                const hour = dt.getHours();
                const minute = dt.getMinutes();
                const second = dt.getSeconds();
                this.nowTime = `当前时间:${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
            }
        }
    }
</script>
<template>
    <header>
        <h1>{{ title }}</h1>
        <div class="showTime">{{ nowTime }}</div>
    </header>
</template>
<style scoped>
    header{
        /* background-color: red; */
        background-image: url("../assets/img/head_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 1.25rem;
        position:relative;
    }
    header > .showTime{
        position: absolute;
        right: .375rem;
        top: 0;
        line-height: .9375rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: .25rem;
    }
    header > h1{
        text-align: center;
        line-height: 1rem;
        font-size: .475rem;
        color: #fff;
    }
</style>