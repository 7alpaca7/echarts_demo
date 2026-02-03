<script>
  import Header from "./components/header.vue";
  import {initFlexible} from "./utils/flexible";
  import Panel from "./components/panel.vue";
  import MapHeader from "./components/map-header.vue";
  import MapMainbox from "./components/map-mainbox.vue";
  
  initFlexible();
  export default{
    data(){
      return {

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
          <Panel />
          <Panel />
          <Panel />
      </div>
      <div class="map">
        <MapHeader />
        <MapMainbox />
      </div>
      <div class="right">
          <Panel />
          <Panel />
          <Panel />
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
    /* background-color: red; */
  }
  .map{
    height: 100%;
    flex: 5;
    /* background-color: blue; */
  }
  .right{
    height: 100%;
    flex: 3;
    /* background-color: red; */
  }
</style>
