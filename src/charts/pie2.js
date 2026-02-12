import * as echarts from "echarts"
import px2rem from '@/utils/px2rem'
export function initPieChart2(container) {
  // console.log("调用成功", px2rem(0.22));
  const chart = echarts.init(container);

  let option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      }
    },
    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: ['20%', '75%'],
        center: ['50%', '43%'],
        // 半径模式
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ],
        // 图形的文字标签
        label: {
          fontSize: 13
        },
        // 链接图形和文字的线形
        labelLine: {
          // 斜的那根
          length: 6,
          // 横的那根
          length2: 10
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