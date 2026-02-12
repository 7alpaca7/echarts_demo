import * as echarts from "echarts"
import px2rem from '@/utils/px2rem'
export function initBarChart1(container) {
  // console.log("调用成功", px2rem(0.22));
  const chart = echarts.init(container);
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      appendToBody: true, // tooltip 挂载到 body 上，不会影响父容器尺寸
      confine: true,      // tooltip 不会溢出容器
      textStyle: {
        fontSize: px2rem(0.22)
      }
    },
    color: ["#2f89cf"],
    grid: {
      left: "0%",
      top: px2rem(0.1),
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        // 设置x轴标签文字样式
        // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: px2rem(0.15)
        },
        //  x轴样式不显示
        axisLine: {
          show: false
          // 如果想要设置单独的线条样式 
          // lineStyle: {
          //    color: "rgba(255,255,255,.1)",
          //    width: 1,
          //    type: "solid"
        }

      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: px2rem(0.15)
        },
        // y轴线条样式
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            // width: 1,
            // type: "solid"
          },
          // y 轴分隔线样式
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }

      },

    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        // 修改柱子宽度
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
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