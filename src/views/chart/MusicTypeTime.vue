<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  import { getMusicTypeResult, getResult } from '../../api/common'

  export default {
    name: 'MusicTypeTopic',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        resultTypeList:[],
        resultValueList:[],
      }
    },
    mounted() {
      this.drawLine()
    },
    methods:{
      async getTheChangeResult(){
        const res = await getMusicTypeResult({query:"分类年代热度"});
        console.log(res.data)
        this.resultTypeList = res.data.typeList;
        this.resultValueList = res.data.valueList;
      },

      async drawLine() {

        await this.getTheChangeResult();
        // 基于准备好的dom，初始化echarts实例
        const myChart = this.$echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption(
          {
            color :["#3398D8"],
            title: {
              text: '音乐类型年代分析'
            },
            tooltip: {
              trigger:"axis",
              axisPointer:{
                type: "shadow"
              }
            },

            grid:{
              left : "3%",
              right : "4%",
              button : "2%",
              containLabel : true
            },

            xAxis: [
              {
                type:'category',
                data :this.resultTypeList,
                axisTick:{
                  alignWithLabel:true
                }
              }
            ],
            yAxis: {
              type: 'value'
            },
            series: [{
              name: '热度',
              type: 'bar',
              data: this.resultValueList
            }]
          }
        )
      }
    }
  }
</script>


<style scoped>

</style>
