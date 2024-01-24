//Variable {time(Text),measurementpoint(text,int),pHValue(float),TempValue(float)}

const pH_Buble = (time, point, pHValue, tempValue) => {
  const pHBuble = {
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
              "text": "pH sensor",
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
      "backgroundColor": "#FDD74B",
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
                  "url": "https://img5.pic.in.th/file/secure-sv1/Asset-3.png",
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
                  "color": "#A57F23",
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
                  "text": `${pHValue}`,
                  "size": "4xl",
                  "color": "#A57F23",
                  "align": "center",
                  "gravity": "center",
                  "contents": []
                },
                {
                  "type": "text",
                  "text": "pH",
                  "size": "xl",
                  "color": "#A57F23",
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
  };
  return pHBuble;
};
module.exports =  pH_Buble;

//How to use with reply message//
//************************************************ */
// const  pH_Buble  = require('./pHBuble.js'); //Import file.js
// const result = pH_Buble("12.00", '1', 1.0, 2.0); //Define function

//Make flexmessage format//
// const flexMessage = {
//   "type": "flex",
//   "altText": "pH",
//   "contents": result,
// };
// console.log(JSON.stringify(result, null, 2));
// return client.replyMessage(event.replyToken, [flexMessage]);
//************************************************ */