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
                      "align": "start",
                      "size": "xxs",
                      "offsetTop": "3px",
                      "offsetBottom": "0px",
                      "offsetStart": "32px"
                    },
                    {
                      "type": "text",
                      "text": `Measurement Point ${point}` ,
                      "size": "lg",
                      "color": "#E082FF",
                      "wrap": true,
                      "contents": []
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${facName}`,
                      "size": "4xl",
                      "color": "#D6FF82",
                      "align": "center",
                      "gravity": "center",
                      "contents": []
                    },
                    {
                      "type": "text",
                      "text": `${des}`,
                      "size": "xs",
                      "color": "#FFFFFFFF",
                      "align": "center",
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