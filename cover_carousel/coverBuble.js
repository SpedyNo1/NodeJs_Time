const cover_Buble = (facName,point,des) => {
    const coverBuble = {
      "type": "bubble",
      "direction": "ltr",
      "body": {
        "type": "box",
        "layout": "vertical",
        "borderWidth": "0px",
        "backgroundColor": "#650485",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "offsetTop": "47px",
            "height": "250px",
            "contents": [
              {
                "type": "box",
                "layout": "horizontal",
                "height": "60px",
                "contents": [
                  {
                    "type": "image",
                    "url": "https://img2.pic.in.th/pic/Asset-28ca45b4b9a47eb89.png",
                    "margin": "none",
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
                    "color": "#E082FF",
                    "align": "start",
                    "wrap": true,
                    "offsetEnd": "40px",
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "height": "200px",
                "contents": [
                  {
                    "type": "text",
                    "text": `${facName}`,
                    "size": "3xl",
                    "color": "#D6FF82",
                    "align": "center",
                    "gravity": "center",
                    "wrap": true,
                    "position": "relative",
                    "offsetTop": "10px",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": `${des}`,
                    "size": "xs",
                    "color": "#FFFFFFFF",
                    "align": "center",
                    "offsetTop": "8px",
                    "contents": []
                  }
                ]
              }
            ]
          }
        ]
      }
    }
    return coverBuble;
  };
  module.exports =  cover_Buble;