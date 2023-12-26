const createLineClient = require('./lineConfig');
const { config, client } = createLineClient();

const welcomeMessage = async(replyToken, userName) => {
    return client.replyMessage(replyToken, [
      {
        type: "flex",
        altText: `Hello ${userName}`,
        contents: {
        "type": "bubble",
        "direction": "ltr",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "WELCOME ",
              "weight": "bold",
              "size": "xl",
              "color": "#002B0EFF",
              "align": "center",
              "contents": []
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://img5.pic.in.th/file/secure-sv1/Artboard-1b52db389678bae26.png",
          "size": "5xl",
          "aspectRatio": "1.51:1",
          "aspectMode": "cover",
          "backgroundColor": "#FFFFFFFF"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Please Click Register botton",
              "align": "center",
              "contents": []
            }
          ]
        },
        
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "button",
              "style": "secondary",
              "action": {
                "type": "postback",
                "label": "REGISTER",
                "text": "Register",
                "data": "Register"
              },
              "color": "#3BD240FF"
            }
          ]
        }
      }
    }
  
    ]);
  }
  module.exports = {
    welcomeMessage,
  };