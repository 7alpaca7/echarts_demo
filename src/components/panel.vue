<template>
    <div class="panel">
        <h2>标题</h2>
        <div class="chart" ref="chartModle">
        </div>
        <div class="panel-footer"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
/* 公共面板模块 panel
高度为 310px
1像素的 1px solid rgba(25, 186, 139, 0.17) 边框
有line.jpg 背景图片
padding为 上为 0 左右 15px 下为 40px
下外边距是 15px
利用panel 盒子 before 和after 制作上面两个角 大小为 10px 线条为 2px solid #02a6b5
新加一个盒子before 和after 制作下侧两个角 宽度高度为 10px */
    .panel{
        background: url("../assets/img/line.png") no-repeat;
        height: 3.875rem;
        border: .0125rem solid rgba(25,186,139,0.17);
        padding: 0 .1875rem .5rem;
        margin-bottom: .1875rem;
        position:relative;
    }
    .panel::before{
        border-top:.025rem solid #02a6b5;
        border-left: .025rem solid #02a6b5;
        width: .125rem;
        height: .125rem;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
    }
    .panel::after{
        border-top:.025rem solid #02a6b5;
        border-right: .025rem solid #02a6b5;
        width: .125rem;
        height: .125rem;
        position: absolute;
        top: 0;
        right: 0;
        content: "";
    }
    .panel-footer::before{
        border-bottom:.025rem solid #02a6b5;
        border-left: .025rem solid #02a6b5;
        width: .125rem;
        height: .125rem;
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
    }
    .panel-footer::after{
        border-bottom:.025rem solid #02a6b5;
        border-right: .025rem solid #02a6b5;
        width: .125rem;
        height: .125rem;
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
    }
    /* 
    
标题模块 h2 高度为 48px 文字颜色为白色 文字大小为 20px

图标内容模块 chart 高度 240px
    */
    .panel > h2{
        color: #fff;
        text-align: center;
        height: .6rem;
        font-size: .25rem;
    }
    .chart{
        /* background-color: red; */
        height: 3rem;
    }
</style>