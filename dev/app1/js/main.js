! function() {
    'use strict'
    var wrapPark = document.getElementById('wrapPark');
    var wrapInner = echarts.init(document.getElementById("wrapInner"));
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
            areaStyle: {
                normal: {}
            },
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
            areaStyle: {
                normal: {}
            },
            itemStyle: {
                normal: {
                    color: "rgba(0,241,255,.9)"
                }
            },
            data: [10000, 5000, 20000, 5000, 25000, 5000, 15000] // 数据动态添加
        }]
    };

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
                value: 700, //非空车位
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
            }, {
                value: 300, // 空车位
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

    //启动图表
    carFlux.setOption(optionFlux);
    info.setOption(optionParkInfo);
    wrapInner.setOption(optionInnerCircle)
    total.setOption(optionTotal)

    //亮点特效
    var smallcircle = document.getElementById('smallcircle');
    var x = smallcircle.offsetLeft;
    var y = smallcircle.offsetTop;
    var widthWrap = smallcircle.offsetWidth;
    var heightWrap = smallcircle.offsetHeight;
    const r = 0.23 * widthWrap;
    // 外层圆心坐标
    var x0 = 0.35 * widthWrap;
    var y0 = 0.5 * heightWrap - 0.04 * heightWrap;
    // 空车位占总比  动态数据调用
    // var L = (700 / 1000) * 2 * Math.PI;
    // //圆心坐标
    // var x1 = x0 + r * Math.cos(L) - 16.5;
    // var y1 = y0 + r * Math.sin(L) - 6;
    // //初始亮点坐标
    // var initialX = x0 + r * Math.cos(2 * Math.PI) - 16.5,
    //     initialY = y0 + r * Math.sin(2 * Math.PI) - 6;


    // 实时监控 亮点特效，  未完成动画效果
    function drawSmallCircle(n,total) {
        // 空车位占总比  动态数据
        var L = (n / total) * 2 * Math.PI;
        //圆心坐标
        var x1 = x0 + r * Math.cos(L) - 16.5;
        var y1 = y0 + r * Math.sin(L) - 6;
        var ctx = smallcircle.getContext("2d");
        var circle = new Image();
        circle.src = "../images/smallcircle.png";
        circle.onload = function() {
            ctx.beginPath();
            ctx.drawImage(circle, x1, y1, 32, 32)
            ctx.closePath();
            ctx.stroke()
        }
    }
    // function drawMoveCircle(x, y) {
    //     var canvas = document.getElementById("smallcircle")
    //     var ctx = canvas.getContext("2d");
    //     var circle = new Image();
    //     circle.src = "../images/smallcircle.png";
    //     circle.onload = function() {
    //         ctx.clearRect(x,y,32,32)
    //         ctx.beginPath();
    //         ctx.drawImage(circle, x, y, 32, 32)
    //         ctx.closePath();
    //         ctx.stroke()
    //     }
    // }
    // setInterval(function () {
    //     drawMoveCircle(x1,y1)
    //     console.log("1")
    // },1000)
    function drawLabel(x, y, text, direction) {
        var canvas = document.getElementById("smallcircle")
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle = "rgb(0,241,255)";
        ctx.moveTo(x, y);
        ctx.lineTo(x + 0.1 * widthWrap, y + 0.1 * heightWrap * direction);
        ctx.lineTo(x + 0.45 * widthWrap, y + 0.1 * heightWrap * direction)
        ctx.fillStyle = "rgb(0,241,255)";
        ctx.font = "16px fantasy"
        if (direction === -1) {
            ctx.fillText(text, x + 0.22 * widthWrap, y + 0.15 * heightWrap * direction)
        } else {
            ctx.fillText(text, x + 0.22 * widthWrap, y + 0.05 * heightWrap * direction)
        }
        ctx.stroke()
    }
    drawSmallCircle(1000,1000)
    drawSmallCircle(700,1000)
    drawLabel(0.5 * widthWrap, 0.75 * heightWrap, "总车位:1000", 1)
    drawLabel(0.5 * widthWrap, 0.25 * heightWrap, "空车位:300", -1)
}()