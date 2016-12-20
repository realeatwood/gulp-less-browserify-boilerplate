! function() {
    'use strict'
    var wrapPark = document.getElementById('wrapPark');
    var carFlux = echarts.init(document.getElementById("carFlux"));
    var total = echarts.init(document.getElementById("incomeParking"));
    var info = echarts.init(wrapPark)
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
            barWidth: '25%',
            data: [{
                value: 5600, // 动态当日数据   
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
                value: 4200, // 动态当日数据
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'], // 日期数组 动态添加
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            axisTick: {
                show: false
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
        }, {
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
                    color: "rgba(255,206,122,.9)"
                }
            },
            data: [5000, 10000, 5000, 20000, 15000, 23000, 5000], // 数据动态添加

        }, {
            name: '',
            type: 'line',
            stack: '总量1',
            areaStyle: { normal: {} },
            itemStyle: {
                normal: {
                    color: "rgba(0,241,255,.9)"
                }
            },
            data: [10000, 5000, 20000, 5000, 25000, 5000, 15000] // 数据动态添加
        }]
    };
    total.setOption(optionTotal)


    var optionInnerCircle = {
        series: [{
            type: 'pie',
            radius: ['48%', '50%'],
            center: ['35%', '50%'],
            hoverAnimation: false,
            data: [{
                itemStyle: {
                    normal: {
                        color: "rgb(253,137,0)"
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                }
            }]
        }]
    }
    var optionParkInfo = {
        title: {
            text: '已使用',
            subtext: '70%', // 使用率
            x: '34%',
            y: '34%',
            textAlign: "center",
            textStyle: {
                color: "rgb(0,241,255)",
                fontSize: 15,
                fontWeight: "normal"
            },
            subtextStyle: {
                color: "rgb(0,241,255)",
                fontSize: 32,
                fontWeight: "bolder",
                padding: 10
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '70%'],
            center: ['35%', '50%'],
            startAngle: 0,

            data: [{
                value: 500, //非空车位
                name: '',
                itemStyle: {
                    normal: {
                        color: 'rgb(0,241,255)',
                        borderColor: "rgb(0,241,255)",
                        borderWidth: 2,
                        borderType: "solid"
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: "rgb(0,241,255)"
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                        lineStyle: {
                            color: "rgb(0,241,255)",
                            width: 1,

                        }
                    }
                }
            },{
                value: 500, // 空车位
                name: '',

                itemStyle: {
                    normal: {
                        color: 'rgb(0,72,76)',
                        borderColor: "rgb(6,84,91)",
                        borderWidth: 2,
                        borderType: "solid"
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: "rgb(0,241,255)"
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                        lineStyle: {
                            color: "rgb(0,241,255)",
                            width: 1,
                        }
                    }
                }
            }],
            // .sort(function(a, b) {
            //     return a.value - b.value }),
            // roseType: 'angle',
            label: {
                normal: {

                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 40,
                    length2: 100
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,241,255)',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0,241,255, 0.5)'
                }
            }
        }]
    };
    info.setOption(optionParkInfo);

    var wrapInner = echarts.init(document.getElementById("wrapInner"));

    wrapInner.setOption(optionInnerCircle)



    var smallcircle = document.getElementById('smallcircle');
    var x = smallcircle.offsetLeft;
    var y = smallcircle.offsetTop;
    var widthWrap = smallcircle.offsetWidth;
    var heightWrap = smallcircle.offsetHeight;
    console.log(widthWrap, heightWrap)
    console.log(x, y)
    const r = 0.23 * widthWrap ;
    console.log(r)
    // 外层圆心坐标
    var x0 = 0.35 * widthWrap - 0 * widthWrap  ;
    var y0 = 0.5  * heightWrap - 0.04 * heightWrap ;
    var L = (500 / 1000) * 2 * Math.PI;
    //圆心坐标
    var x1 = x0 + r * Math.cos(L);
    var y1 = y0 + r * Math.sin(L) ;
    console.log(x1,y1)
    // function drawSmallCircle(x,y) {
    	var ctx = document.getElementById("smallcircle").getContext("2d");
    	var circle = new Image();
    	circle.src = "../images/smallcircle.png";
        circle.onload = function() {
        ctx.beginPath();
        ctx.drawImage(circle, x1, y1, 32, 32)
        ctx.closePath();
        ctx.stroke()
    }

    // }
    // drawSmallCircle(x0,y0)

}()
