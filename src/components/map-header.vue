<script>

</script>
<template>
    <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>104563</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
    </div>
</template>
<style scoped>
  /* 
    上面是no 数字模块
下面是map 地图模块
数字模块 no 有个背景颜色 rgba(101, 132, 226, 0.1); 有个15像素的内边距
注意中间列 column 有个 左右 10px 下 15px 的外边距
no 模块里面上下划分 上面是数字（no-hd) 下面 是 相关文字说明(no-bd)
no-hd 数字模块 有一个边框 1px solid rgba(25, 186, 139, 0.17)
no-hd 数字模块 里面分为两个小li 每个小li高度为 80px 文字大小为 70px 颜色为 #ffeb7b 字体是图标字体 electronicFont
no-hd 利用 after 和 before制作2个小角， 边框 2px solid #02a6b5 宽度为 30px 高度为 10px
小竖线 给 第一个小li after 就可以 1px宽 背景颜色为 rgba(255, 255, 255, 0.2); 高度 50% top 25% 即可
no-bd 里面也有两个小li 高度为 40px 文字颜色为 rgba(255, 255, 255, 0.7) 文字大小为 18px 上内边距为 10px
  */
.no{
  background-color: rgba(101, 132, 226, 0.1);
  padding: .1875rem;
}
.no-hd{
  border: .0125rem solid rgba(25, 186, 139, 0.17);
}
.no-hd > ul{
  display: flex;
}
@font-face {
  font-family: "DIGIT";
  src: url("./assets/font/DS-DIGIT.TTF");
}
.no-hd > ul > li{
  flex:1;
  position: relative;
  height: 1rem;
  list-style: none;
  font-size: .875rem;
  color: #ffeb7b;
  font-family: "DIGIT";
  text-align: center;
}
.no-hd > ul > li:nth-child(1)::after{
  background: rgba(255, 255, 255, 0.2);
  position:absolute;
  width: .0125rem;
  height: 50%;
  top: 25%;
  right:0;
  content: "";
}
.no-bd > ul{
  display: flex;
} 
.no-bd > ul > li{
  list-style: none;
  position: relative;
  flex: 1;
  text-align: center;
  color:rgba(255, 255, 255, 0.7);
  height: .5rem;
  font-size: .225rem;
  padding-top: .125rem;
} 
.no-bd > ul > li:nth-child(1)::after{
  background: rgba(255, 255, 255, 0.2);
  position:absolute;
  width: .0125rem;
  height: 50%;
  top: 25%;
  right:0;
  content: "";
}
</style>