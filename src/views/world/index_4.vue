<template>
  <div id="app">
    <el-row :gutter="350">
      <el-col :xs="500" :sm="24" :md="12" :lg="6" :xl="6">
        <div id="echarts_1" style="width:500px; height:460px"></div>
      </el-col>
      <el-col :xs="500" :sm="24" :md="12" :lg="6" :xl="6">
        <div id="echarts_2" style="width:750px; height:495px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="500">
      <div id="echarts_3" style="width:1400px; height:480px"></div>
    </el-row>
    <el-row :gutter="350">
      <div id="echarts_4" style="width:1300px; height:480px"></div>
    </el-row>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts_1"));
    var myChart1 = echarts.init(document.getElementById("echarts_2"));
    var myChart2 = echarts.init(document.getElementById("echarts_3"));
    var myChart3 = echarts.init(document.getElementById("echarts_4"));
    var colors = ["#5793f3", "#d14a61", "#675bba"];
    myChart.setOption({
      title: {
        // text: "全国酒店数量Top10"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {
        data: ["全国酒店数量Top10"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: "category",
        data: [
          "轻住酒店",
          "如家酒店",
          "汉庭酒店",
          "7天酒店",
          "城市便捷酒店",
          "维也纳酒店",
          "速8酒店",
          "麗疯酒店",
          "尚客优连锁酒店",
          "全季酒店"
        ]
      },
      series: [
        {
          name: "全国酒店数量Top10",
          type: "bar",
          barWidth: 20,
          itemStyle: { normal: { color: "#4ad2ff" } },
          data: [1639, 1567, 1567, 1128, 915, 777, 715, 599, 567, 552]
        }
      ]
    });
    // 绘制图表
    myChart1.setOption({
      title: {
        text: "项目在各个省份所有酒店中的数量",
        right: 280
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        right: 100,
        data: ["服务", "运动娱乐", "餐饮", "配套设施"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center"
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold"
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 14678, name: "服务" },
            { value: 782, name: "运动娱乐" },
            { value: 2688, name: "餐饮" },
            { value: 7395, name: "配套设施" }
          ]
        }
      ]
    });
    myChart2.setOption({
      color: colors,

      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross"
        }
      },
      legend: {
        data: ["轻住酒店在各个省份的数量"]
      },
      grid: {
        top: 70,
        bottom: 50,
        left: 300
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1]
            }
          },

          data: [
            "北京",
            "天津",
            "重庆",
            "上海",
            "河北",
            "山西",
            "辽宁",
            "吉林",
            "黑龙江",
            "江苏",
            "浙江",
            "安徽",
            "四川",
            "贵州",
            "云南",
            "陕西",
            "福建",
            "江西",
            "山东",
            "河南",
            "湖北",
            "湖南",
            "广东",
            "海南",
            "甘肃",
            "青海",
            "台湾",
            "新疆",
            "内蒙古",
            "西藏",
            "宁夏",
            "广西"
          ]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "轻住酒店在各个省份的数量",
          type: "line",
          smooth: true,
          data: [
            0,
            14,
            68,
            35,
            63,
            18,
            89,
            30,
            103,
            42,
            78,
            65,
            50,
            24,
            60,
            93,
            48,
            24,
            202,
            96,
            72,
            58,
            124,
            26,
            13,
            10,
            0,
            11,
            87,
            0,
            27,
            11
          ]
        }
      ]
    });
    myChart3.setOption({
      xAxis: {
        type: "category",
        data: [
          "北京",
          "天津",
          "重庆",
          "上海",
          "河北",
          "山西",
          "辽宁",
          "吉林",
          "黑龙江",
          "江苏",
          "浙江",
          "安徽",
          "四川",
          "贵州",
          "云南",
          "陕西",
          "福建",
          "江西",
          "山东",
          "河南",
          "湖北",
          "湖南",
          "广东",
          "海南",
          "甘肃",
          "青海",
          "台湾",
          "新疆",
          "内蒙古",
          "西藏",
          "宁夏",
          "广西"
        ]
      },
      legend: {
        data: ["全国酒店中的游乐场所在各个省的数量"]
      },
      yAxis: {
        type: "value"
      },
      grid: {
        left: 225
      },
      series: [
        {
          data: [
            235,
            193,
            344,
            320,
            931,
            480,
            625,
            250,
            228,
            530,
            821,
            1145,
            1370,
            530,
            808,
            570,
            1212,
            715,
            1617,
            838,
            826,
            940,
            3025,
            833,
            273,
            93,
            0,
            58,
            423,
            57,
            153,
            773
          ],
          name: "全国酒店中的游乐场所在各个省的数量",
          type: "line",
          symbol: "triangle",
          symbolSize: 20,
          lineStyle: {
            color: "green",
            width: 4,
            type: "dashed"
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "yellow",
            color: "blue"
          }
        }
      ]
    });
  }
};
</script>
