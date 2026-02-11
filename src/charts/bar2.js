import * as echarts from "echarts"
import px2rem from '@/utils/px2rem'
export function initBarChart2(container) {
  console.log("调用成功", px2rem(0.22));
  const chart = echarts.init(container);

  let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  let option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
      // containLabel: true
    },
    // 不显示x轴
    xAxis: {
      show: false
    },
    yAxis: [{
      type: 'category',
      data: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Node'],
      // 不显示y轴线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        color: "#fff"
      },
      inverse: true
    }, {
      type: 'category',
      data: [702, 350, 610, 793, 664],
      // 不显示y轴线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
      // 把刻度标签里面的文字颜色设置为白色
      axisLabel: {
        textStyle: {
          fontSize: 12,
          color: "#fff"
        }
      },
      inverse: true
    }],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            // params 传进来的是柱子对象
            // params.dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c}会自动的解析为数据
          /*
            字符串模版
              {a} 系列名
              {b} 数据名
              {c} 数据值
              {@xxx} 数据中名为‘xxx’的维度的值
              {@[n]} 数据中维度n的值，从0开始计数
          */
          formatter: "{c}%"
        },
        yAxisIndex: 0
      },
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        yAxisIndex: 1
      }
    ]
  };

  chart.setOption(option);
  window.addEventListener("resize", function () {
    console.log("change ", px2rem(0.22));
    chart.resize();
    chart.setOption(option);
  });
}