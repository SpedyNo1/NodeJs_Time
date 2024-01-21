//Variable {time(Text),measurementpoint(text,int),pHValue(float),TempValue(float)}

const LSI_Buble = (LSI,temp) => {
    if(-2.0 < LSI && LSI <= -0.5){
        const LSIBuble =  {
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "LSI",
                      "weight": "bold",
                      "size": "xl",
                      "flex": 3,
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "image",
                      "url": "https://img2.pic.in.th/pic/Pngtreevector-clock-icon_4187265.th.png",
                      "flex": 1,
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": "12.00",
                      "size": "lg",
                      "color": "#414141",
                      "flex": 1,
                      "align": "end",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "width": "300px",
              "height": "192px",
              "backgroundColor": "#2C323D",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "height": "60px",
                      "contents": [
                        {
                          "type": "image",
                          "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                          "align": "start",
                          "size": "xxs",
                          "offsetTop": "3px",
                          "offsetBottom": "0px",
                          "offsetStart": "32px"
                        },
                        {
                          "type": "text",
                          "text": "Measurement Point 1",
                          "size": "lg",
                          "color": "#4481F2",
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "offsetTop": "20px",
                      "width": "300px",
                      "height": "103px",
                      "contents": [
                        {
                          "type": "text",
                          "text": `${LSI}`,
                          "size": "3xl",
                          "color": "#F25544FF",
                          "align": "center",
                          "wrap": true,
                          "offsetTop": "5px",
                          "contents": []
                        },
                        {
                          "type": "separator"
                        },
                        {
                          "type": "text",
                          "text": "Serious corrosion !!!",
                          "size": "lg",
                          "color": "#F25D44FF",
                          "align": "start",
                          "gravity": "top",
                          "margin": "sm",
                          "wrap": true,
                          "offsetStart": "20px",
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": `TEMP ${temp} °C`,
                      "color": "#000000FF",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          }
          console.log(LSI)
          console.log("======")
          return LSIBuble;
    }else if(-0.5 < LSI && LSI < 0){
        const LSIBuble={
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "LSI",
                      "weight": "bold",
                      "size": "xl",
                      "flex": 3,
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "image",
                      "url": "https://img2.pic.in.th/pic/Pngtreevector-clock-icon_4187265.th.png",
                      "flex": 1,
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": "12.00",
                      "size": "lg",
                      "color": "#414141",
                      "flex": 1,
                      "align": "end",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "width": "300px",
              "height": "192px",
              "backgroundColor": "#2C323D",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "height": "60px",
                      "contents": [
                        {
                          "type": "image",
                          "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                          "align": "start",
                          "size": "xxs",
                          "offsetTop": "3px",
                          "offsetBottom": "0px",
                          "offsetStart": "32px"
                        },
                        {
                          "type": "text",
                          "text": "Measurement Point 1",
                          "size": "lg",
                          "color": "#4481F2",
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "offsetTop": "20px",
                      "width": "300px",
                      "height": "103px",
                      "contents": [
                        {
                          "type": "text",
                          "text": `${LSI}`,
                          "size": "3xl",
                          "color": "#F7CB10FF",
                          "align": "center",
                          "wrap": true,
                          "offsetTop": "12px",
                          "contents": []
                        },
                        {
                          "type": "separator",
                          "margin": "xs"
                        },
                        {
                          "type": "text",
                          "text": "Slightly corrosion but non-scale forming",
                          "size": "md",
                          "color": "#F7CB10FF",
                          "align": "start",
                          "gravity": "top",
                          "margin": "sm",
                          "wrap": true,
                          "offsetBottom": "3px",
                          "offsetStart": "7px",
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": `TEMP ${temp} °C`,
                      "color": "#000000FF",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          }
          return LSIBuble;
    }else if(LSI==0){
        const LSIBuble={
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "LSI",
                      "weight": "bold",
                      "size": "xl",
                      "flex": 3,
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "image",
                      "url": "https://img2.pic.in.th/pic/Pngtreevector-clock-icon_4187265.th.png",
                      "flex": 1,
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": "12.00",
                      "size": "lg",
                      "color": "#414141",
                      "flex": 1,
                      "align": "end",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "width": "300px",
              "height": "192px",
              "backgroundColor": "#2C323D",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "height": "60px",
                      "contents": [
                        {
                          "type": "image",
                          "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                          "align": "start",
                          "size": "xxs",
                          "offsetTop": "3px",
                          "offsetBottom": "0px",
                          "offsetStart": "32px"
                        },
                        {
                          "type": "text",
                          "text": "Measurement Point 1",
                          "size": "lg",
                          "color": "#4481F2",
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "offsetTop": "20px",
                      "width": "300px",
                      "height": "103px",
                      "contents": [
                        {
                          "type": "text",
                          "text": `${LSI}`,
                          "size": "3xl",
                          "color": "#31FE0EFF",
                          "align": "center",
                          "wrap": true,
                          "offsetTop": "12px",
                          "contents": []
                        },
                        {
                          "type": "separator",
                          "margin": "xs"
                        },
                        {
                          "type": "text",
                          "text": "Balanced but pitting corrosion possible",
                          "size": "md",
                          "color": "#31FE0EFF",
                          "align": "start",
                          "gravity": "top",
                          "margin": "sm",
                          "wrap": true,
                          "offsetBottom": "3px",
                          "offsetStart": "7px",
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": `TEMP ${temp} °C`,
                      "color": "#000000FF",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          }
          return LSIBuble;
    }else if(0.0 < LSI && LSI < 0.5){
        const LSIBuble = {
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "LSI",
                      "weight": "bold",
                      "size": "xl",
                      "flex": 3,
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "image",
                      "url": "https://img2.pic.in.th/pic/Pngtreevector-clock-icon_4187265.th.png",
                      "flex": 1,
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": "12.00",
                      "size": "lg",
                      "color": "#414141",
                      "flex": 1,
                      "align": "end",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "width": "300px",
              "height": "192px",
              "backgroundColor": "#2C323D",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "height": "60px",
                      "contents": [
                        {
                          "type": "image",
                          "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                          "align": "start",
                          "size": "xxs",
                          "offsetTop": "3px",
                          "offsetBottom": "0px",
                          "offsetStart": "32px"
                        },
                        {
                          "type": "text",
                          "text": "Measurement Point 1",
                          "size": "lg",
                          "color": "#4481F2",
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "offsetTop": "20px",
                      "width": "300px",
                      "height": "103px",
                      "contents": [
                        {
                          "type": "text",
                          "text": `${LSI}`,
                          "size": "3xl",
                          "color": "#F7CB10FF",
                          "align": "center",
                          "wrap": true,
                          "offsetTop": "12px",
                          "contents": []
                        },
                        {
                          "type": "separator",
                          "margin": "xs"
                        },
                        {
                          "type": "text",
                          "text": "Slightly scale forming and corrosive",
                          "weight": "regular",
                          "size": "md",
                          "color": "#F7CB10FF",
                          "align": "start",
                          "gravity": "top",
                          "margin": "sm",
                          "wrap": true,
                          "offsetBottom": "3px",
                          "offsetStart": "7px",
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": `TEMP ${temp} °C`,
                      "color": "#000000FF",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          }
          return LSIBuble;
    }else if(0.5 < LSI && LSI < 2.0){
        const LSIBuble ={
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "LSI",
                      "weight": "bold",
                      "size": "xl",
                      "flex": 3,
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "image",
                      "url": "https://img2.pic.in.th/pic/Pngtreevector-clock-icon_4187265.th.png",
                      "flex": 1,
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": "12.00",
                      "size": "lg",
                      "color": "#414141",
                      "flex": 1,
                      "align": "end",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "width": "300px",
              "height": "192px",
              "backgroundColor": "#2C323D",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "height": "60px",
                      "contents": [
                        {
                          "type": "image",
                          "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                          "align": "start",
                          "size": "xxs",
                          "offsetTop": "3px",
                          "offsetBottom": "0px",
                          "offsetStart": "32px"
                        },
                        {
                          "type": "text",
                          "text": "Measurement Point 1",
                          "weight": "regular",
                          "size": "lg",
                          "color": "#4481F2",
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "offsetTop": "20px",
                      "width": "300px",
                      "height": "103px",
                      "contents": [
                        {
                          "type": "text",
                          "text": `${LSI}`,
                          "size": "3xl",
                          "color": "#F25544FF",
                          "align": "center",
                          "wrap": true,
                          "offsetTop": "12px",
                          "contents": []
                        },
                        {
                          "type": "separator",
                          "margin": "xs"
                        },
                        {
                          "type": "text",
                          "text": "Scale forming but non corrosive",
                          "weight": "regular",
                          "size": "md",
                          "color": "#F25544FF",
                          "align": "start",
                          "gravity": "top",
                          "margin": "sm",
                          "wrap": true,
                          "style": "normal",
                          "offsetTop": "10px",
                          "offsetBottom": "3px",
                          "offsetStart": "3px",
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": `TEMP ${temp} °C`,
                      "color": "#000000FF",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          }
          return LSIBuble;
    }else{
        const LSIBuble = {
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": "LSI",
                      "weight": "bold",
                      "size": "xl",
                      "flex": 3,
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "image",
                      "url": "https://img2.pic.in.th/pic/Pngtreevector-clock-icon_4187265.th.png",
                      "flex": 1,
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": "12.00",
                      "size": "lg",
                      "color": "#414141",
                      "flex": 1,
                      "align": "end",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "width": "300px",
              "height": "192px",
              "backgroundColor": "#2C323D",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "height": "60px",
                      "contents": [
                        {
                          "type": "image",
                          "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                          "align": "start",
                          "size": "xxs",
                          "offsetTop": "3px",
                          "offsetBottom": "0px",
                          "offsetStart": "32px"
                        },
                        {
                          "type": "text",
                          "text": "Measurement Point 1",
                          "size": "lg",
                          "color": "#4481F2",
                          "wrap": true,
                          "contents": []
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xs"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "offsetTop": "20px",
                      "width": "300px",
                      "height": "103px",
                      "contents": [
                        {
                          "type": "text",
                          "text": "-0.53",
                          "size": "3xl",
                          "color": "#F7CB10FF",
                          "align": "center",
                          "wrap": true,
                          "offsetTop": "12px",
                          "contents": []
                        },
                        {
                          "type": "separator",
                          "margin": "xs"
                        },
                        {
                          "type": "text",
                          "text": "error",
                          "size": "md",
                          "color": "#F7CB10FF",
                          "align": "start",
                          "gravity": "top",
                          "margin": "sm",
                          "wrap": true,
                          "offsetBottom": "3px",
                          "offsetStart": "7px",
                          "contents": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": `TEMP ${temp} °C`,
                      "color": "#000000FF",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    }
                  ]
                }
              ]
            }
          }
          return LSIBuble;
    }

  };
  module.exports =  LSI_Buble;