<script>
  import Header from "@/components/header.vue";
  import {initFlexible} from "@/utils/flexible";
  import Panel from "@/components/panel.vue";
  import MapHeader from "@/components/map-header.vue";
  import MapMainbox from "@/components/map-mainbox.vue";
  import {initBarChart1} from "@/charts/bar1";
  import { initBarChart2 } from "@/charts/bar2";
  import { initLineChart1,setDataSets} from "@/charts/line1";
  import { initLineChart2 } from "@/charts/line2";
  import { initPieChart1 } from "@/charts/pie1";
  import { initPieChart2 } from "@/charts/pie2";
  import { initMidChart } from "@/charts/mid";
  export default{
    beforeMount(){
      initFlexible();
    },
    data(){
      return {
        optionLeft1: initBarChart1,
        optionRight1: initBarChart2,
        optionLeft2: initLineChart1,
        setDataSets: setDataSets,
        optionRight2: initLineChart2,
        optionLeft3: initPieChart1,
        optionRight3: initPieChart2,
        optionMid: initMidChart
      }
    },
    components:{
      Header,
      Panel,
      MapHeader,
      MapMainbox
    }
  }
</script>

<template>
  <Header />
  <section class="mainbox">
      <div class="left">
          <Panel :initChart= "optionLeft1" title = "柱状图-就业行业 2019 2020"/>
          <Panel :initChart= "optionLeft2" title = "折线图-人员变化" clickA = "true" :setDataSets = "setDataSets" />
          <Panel :initChart= "optionLeft3" title = "饼形图-年龄分布" />
      </div>
      <div class="map">
        <MapHeader />
        <MapMainbox :initChart="optionMid"/>
      </div>
      <div class="right">
          <Panel :initChart= "optionRight1" title="柱状图-技能掌握"/>
          <Panel :initChart= "optionRight2"  title="折线图-播放量"/>
          <Panel :initChart= "optionRight3" title="饼形图-地区分布" />
      </div>
  </section>
</template>
<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    background-image: url("./assets/img/bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  /* 关键：确保所有容器高度都是 100% */
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  /* 背景设置在 html 或 body 上 */
  body {
    background-image: url("./assets/img/bg.jpg");
    background-size: cover; /* 使用 cover 而不是 100% 100% */
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed; /* 固定背景，可选 */
    /* scrollbar-width: none; */
  }
  
  /* Vue 的根容器也要占满高度 */
  #app-container {
    height: 100%;
    width: 100%;
    position: relative; /* 确保定位正确 */
  }
  .mainbox{
    display: flex;
    padding: .125rem .125rem 0;
  }
  .left{
    height: 100%;
    flex: 3;
    /* width: 25%; */
    /* background-color: red; */
  }
  .map{
    height: 100%;
    flex: 5;
    /* width: 50%; */
    /* background-color: blue; */
    
  }
  .right{
    height: 100%;
    flex: 3;
    /* width: 25%; */
    /* background-color: red; */
  }
  /* .left, .map, .right {
    flex: 3 1 0; 
    min-width: 0; 
    display: flex;
    flex-direction: column;
  }
  .left .panel,
  .map .panel,
  .right .panel {
    flex: 1;       
    min-height: 0; 
    margin-bottom: 0.1875rem;
  } */
/* 约束屏幕尺寸 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
</style>
