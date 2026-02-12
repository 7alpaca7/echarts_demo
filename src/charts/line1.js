import * as echarts from "echarts"
import px2rem from '@/utils/px2rem'

const yearData = [
    {
        year: "2020", // 年份
        data: [
            // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
        year: "2021", // 年份
        data: [
            // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
        ]
    }
];
let option = {
    color: ['#00f2f1', '#ed3f35'],
    legend: {
        data: ['新增粉丝', '新增游客']
    },
    grid: {
        top: "10%",
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
        // 显示边框
        show: true,
        borderColor: "#012f4a",
        // 包含刻度文字在内
        containLabel: true
    },
    legend: {
        textStyle: {
            color: "#4c9bfd"
        },
        right: "5%",
        top: "0%"
    },
    xAxis: {
        type: 'category',
        // 去除轴内间距
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            // 去除刻度线
            show: false
        },
        axisLabel: {
            color: "#4c9bfd"
        },
        axisLine: {
            // 去除轴线
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            // 去除刻度线
            show: false
        },
        axisLabel: {
            color: "#4c9bfd"
        },
        axisLine: {
            // 去除轴线
            show: false
        },
        // 分割线
        splitLine: {
            lineStyle: {
                color: "#012f4a"
            }
        }
    },
    series: [
        {
            name: '新增粉丝',
            type: 'line',
            data: yearData[0].data[0],
            // 折线平滑
            smooth: true
        },
        {
            name: '新增游客',
            type: 'line',
            data: yearData[0].data[1],
            smooth: true
        }
    ]
};
let chart;
function getOption() {
    return option;
}
export function setDataSets(aim){
    option.series[0].data = yearData[aim].data[0];
    option.series[1].data = yearData[aim].data[1];
    getChart().setOption(option);
}
function getChart(){
    return chart;
}
export function initLineChart1(container) {
    chart = echarts.init(container);
    let option = getOption();
    chart.setOption(option);
    window.addEventListener("resize", function () {
        console.log("change ", px2rem(0.22));
        chart.resize();
        chart.setOption(option);
    });
}