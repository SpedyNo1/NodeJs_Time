const cover_Buble = (facName,point,des) => {
    const coverBuble = {
      "type": "bubble",
      "direction": "ltr",
      "header": {
        "type": "box",
        "layout": "vertical",
        "width": "300px",
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
            "width": "300px",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "width": "300px",
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
                    "text": "0.00",
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
                    "margin": "xs",
                    "wrap": true,
                    "position": "relative",
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
                "text": "TEMP  35 °C",
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
    return coverBuble;
  };
  module.exports =  cover_Buble;