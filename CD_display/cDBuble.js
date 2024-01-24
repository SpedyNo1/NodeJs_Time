const CD_Buble = (time, point, CDValue, tempValue) => {
    const CDBuble = {
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
                  "text": "Conductivity ",
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
                  "text": `${time}`,
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
          "backgroundColor": "#2B4031",
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
                      "text": `${point}`,
                      "size": "lg",
                      "color": "#11D94A",
                      "wrap": true,
                      "contents": []
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "offsetTop": "20px",
                  "width": "300px",
                  "height": "103px",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${CDValue}`,
                      "size": "4xl",
                      "color": "#11D94A",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": "uS/cm",
                      "size": "xl",
                      "color": "#11D94A",
                      "align": "start",
                      "gravity": "center",
                      "margin": "sm",
                      "offsetBottom": "0px",
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
                  "text": `TEMP ${tempValue} °C`,
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
    return CDBuble;
  };
  module.exports =  CD_Buble;