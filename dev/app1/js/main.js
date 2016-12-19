! function() {
    'use strict'
    var carFlux = echarts.init(document.getElementById("carFlux"));
    var total = echarts.init(document.getElementById("incomeParking"));

    var optionFlux = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        textStyle: {
            color: 'rgba(0,241,255,1)'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['车流量（进）', '车流量（出）'],
            axisTick: {
                alignWithLabel: true,
                show: false,

            },
            axisLine: {
                lineStyle: {
                    color: "rgb(88,105,125)"
                }
            }
        },
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "rgb(88,105,125)"
                }
            },
            axisTick: {
                show: false,
            }
        }, {
            type: 'category',
            data: [""],
            axisLine: {
                lineStyle: {
                    color: "rgb(88,105,125)"
                }
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            name: '数量',
            type: 'bar',
            barWidth: '20%',
            data: [{
                value: 5600,
                itemStyle: {
                    normal: {
                        color: "rgba(0,241,255,.9)",
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "inside"
                    }
                }
            }, {
                value: 4200,
                itemStyle: {
                    normal: {
                        color: "rgba(208,146,10,.9)",
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: "#fff"
                        },
                        position: "inside"
                    }

                }
            }],

        }]
    };
    carFlux.setOption(optionFlux);

    var optionTotal = {

        textStyle: {
            color: 'rgba(0,241,255,1)'
        },
        tooltip: {
            trigger: 'axis'
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            axisTick:{
            	show:false
            }
        }],
        yAxis: [{
            type: 'value',
            name: "收入",
            axisTick: {
                lineStyle: {
                    color: "#fff"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            }
        },{
            type: 'category',
            data: [""],
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            name: '',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            itemStyle: {
                normal: {
                    color: "rgba(0,241,255,.9)"
                }
            },
            data: [100, 132, 101, 134, 90, 230, 210],

        }, {
            name: '',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            itemStyle: {
                normal: {
                    color: "rgba(208,146,10,.9)"
                }
            },
            data: [50, 182, 191, 234, 290, 330, 310]
        }]
    };
    total.setOption(optionTotal)
}()
