import * as echarts from "echarts"
import px2rem from '@/utils/px2rem'
export function initPieChart1(container) {
  // console.log("调用成功", px2rem(0.22));
  const chart = echarts.init(container);

  let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0%',
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // 修改内圆半径和外圆半径为百分比是相对于容器宽度来说的
        radius: ['50%', '80%'],
        // 设置饼形图在容器中的位置
        center: ["50%", "43%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
        ],
      }
    ]
  };

  chart.setOption(option);
  window.addEventListener("resize", function () {
    // console.log("change ", px2rem(0.22));
    chart.resize();
    chart.setOption(option);
  });
}