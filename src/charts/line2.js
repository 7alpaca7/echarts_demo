import * as echarts from "echarts"
import px2rem from '@/utils/px2rem'
export function initLineChart2(container) {
  // console.log("调用成功", px2rem(0.22));
  const chart = echarts.init(container);

  let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  let option = {
    tooltip: {
      trigger: 'axis',

    },
    grid: {
      left: "3%",
      right: "3%",
      bottom: "3%",
      top:"10%",
      containLabel: "true"
    },
    legend: {
      data: ['邮件营销', '联盟广告'],
      top: "0%",
      right:"3%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        smooth: true,
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点
        symbol: "circle",
        // 设置拐点大小
        symbolSize: 5,
        // 设置拐点颜色及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12
        },
        showSymbol: false
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
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