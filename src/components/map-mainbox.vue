<script>
export default {
  mounted() {
    this.mod = this.$refs.mod;
    this.initChart(this.mod);
  },
  data(){
    return{
        mod:null
    }
  },
  props:{
    initChart:{
        type:Function
    }
  }
}
</script>

<template>
    <div class="mapMainBox">
        <div class="chart" ref="mod"></div>
        <div class="map1"></div>
        <div class="map2"></div>
        <div class="map3"></div>
    </div>
</template>
<style scoped>
/* 
地图模块高度为 810px 里面包含4个盒子 chart 放图表模块 球体盒子 旋转1 旋转2
球体图片模块 map1 大小为 518px 要加背景图片 因为要缩放100% 定位到最中央 透明度 .3
旋转1 map 2 大小为 643px 要加背景图片 因为要缩放100% 定位到中央 透明度 .6 做旋转动画 利用z-index压住球体
旋转2 map3 大小为 566px 要加背景图片 因为要缩放100% 定位到中央 旋转动画 注意是逆时针
*/
.mapMainBox{
    /* background-color: red; */
    height: 10.125rem;
    position: relative;
    overflow: hidden;
}
.map1{
    height: 6.475rem;
    width: 6.475rem;
    background: url("../assets/img/map.png") no-repeat;
    background-size: 100% 100%;
    opacity: .3;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* overflow: hidden; */
}
@keyframes zhuang2{
    from{
        transform: translate(-50%,-50%) rotate(0deg);
    }
    to{
        transform: translate(-50%,-50%) rotate(-360deg);
    }
}

.map2{
    background: url("../assets/img/jt.png") no-repeat;
    background-size: 100% 100%;
    height: 8.0375rem;
    width: 8.0375rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: .6;
    animation: zhuang2 10s linear infinite;
    /* overflow: hidden; */
}
@keyframes zhuang3{
    from{
        transform: translate(-50%,-50%) rotate(0deg);
    }
    to{
        transform: translate(-50%,-50%) rotate(360deg);
    }
}
.map3{
    background: url("../assets/img/lbx.png") no-repeat;
    background-size: 100% 100%;
    height: 7.075rem;
    width: 7.075rem;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: zhuang3 15s linear infinite;
    /* overflow: hidden; */
}
.chart{
    z-index:10;
    height:100%;
}
</style>