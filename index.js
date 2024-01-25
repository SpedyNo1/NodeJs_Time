let express = require('express')
let app = express()
app.set('view engine','ejs')
let port = process.env.PORT || 3000;
require("dotenv").config();
const line = require("@line/bot-sdk");
const axios = require('axios');
const { welcomeMessage } = require("./API/welcomeMes.js");
const { getUserInformation } = require("./API/getUserInformation.js");
const createLineClient = require("./API/lineConfig");
const { config, client } = createLineClient();
const data_influxx = require('./API/DataInflux.js');
const data_strapii = require('./API/DataStrapi.js');
const data_testt = require('./API/DataTest.js');
const line_send_data = require('./API/LineSendData.js');
const pH_Buble = require('./pH_display/pHBuble.js');
const pH_Flex = require('./pH_display/pHFlex.js');
const CD_Buble = require('./CD_display/cDBuble.js');
const CD_Flex = require('./CD_display/cDFlex.js');
const LSI_Buble = require('./LSI_display/LSI_Buble.js');
const cover_Buble = require('./cover_carousel/coverBuble.js');
const cover_Flex = require('./cover_carousel/coverFlex.js');
const createCarousel = require('./API/carouselMAKE.js');
const userRegis = require("./API/userRegis.js");
const userList = require("./API/userList.js");
const calculateLSI = require("./API/calculateLSI.js");
let h;
let m;
let s;
app.get('/',(req,res) =>{
    res.render('test')
})
app.get('/about',(req,res) =>{
    res.render('about')
})
app.get("/test", (req, res) => {
  res.send("ok");
});
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})
let data1;
let data_influx;
let data_strapi;
const main = async () => {
  try {
    data_influx = await data_influxx();
    data_strapi = await data_strapii();
    console.log(data_influx)
    for (let i = 0; i < data_strapi.data.length; i++) {
      //console.log(data_strapi.data[i].attributes.name)
      data1 = createCarousel()
      data1[0].contents.contents.push(cover_Buble(data_strapi.data[i].attributes.factory, data_strapi.data[i].attributes.name, data_strapi.data[i].attributes.location))
      for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
        //console.log(data_strapi.data[i].attributes.devices.data[j].attributes.Serial)
        for (let k = 0; k < data_influx.data.length; k++) {
          if (data_influx.data[k].topic.split('/')[2] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
            if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "pH") {
                // const tds = 320;
                // const temp = 25;
                // const calcium = 150;
                // const alcalinity = 34;
                // const pH = 7.5;
                const tds = data_strapi.data[i].attributes.tds;
                const temp = data_influx.data[k].temp;
                const calcium = data_strapi.data[i].attributes.calcium;
                const alcalinity = data_strapi.data[i].attributes.alcalinity;
                const pH = data_influx.data[k].pH_value;
                console.log("tds : "+`${tds}`)
                console.log("calcium : "+`${calcium}`)
                console.log("temp : "+`${temp}`)
                console.log("alcalinity : "+`${alcalinity}`)
                console.log("pH : "+`${pH}`) 
                let {LSI,indication} = await calculateLSI(pH,tds,temp,calcium,alcalinity)
                console.log(LSI)
                data1[0].contents.contents.push(LSI_Buble(`${h}` + ":" + `${m}`,data_strapi.data[i].attributes.name,LSI.toFixed(2),temp.toFixed(2)));
                data1[0].contents.contents.push(pH_Buble(`${h}` + ":" + `${m}`,data_strapi.data[i].attributes.name,pH.toFixed(2), temp.toFixed(2)));
                //console.log("lenn : "+`${data1[0].contents.contents.length}`)
            } else if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "Conductivity"){
                  data1[0].contents.contents.push(CD_Buble(`${h}` + ":" + `${m}`, data_strapi.data[i].attributes.name, data_influx.data[k].conductivity_value.toFixed(2), data_influx.data[k].temp.toFixed(2)));
            }
          }
        }
      }
      for (let j = 0; j < data_strapi.data[i].attributes.line_user.data.length; j++) {
        // console.log(data_strapi.data[i].attributes.line_user.data[j].attributes.line_UID)
        // console.log("lenn : "+`${data1[0].contents.contents.length}`)
        line_send_data(data1, data_strapi.data[i].attributes.line_user.data[j].attributes.line_UID)
      }
    }
    // for (let i = 0; i < data_strapi.data.length; i++) {
    //   //console.log(response.data.data[i])
    //   if (data_strapi.data[i].attributes.confirmed == true) {
    //     data1 = createCarousel()
    //     //console.log(response.data.data[i].attributes.devices.data)
    //     data1[0].contents.contents.push(cover_Buble(data_strapi.data[i].attributes.site,'4','This location is on tower1'))
    //     //console.log(data_strapi.data[i].attributes.line_UID)
    //     for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
    //       //console.log(data_strapi.data[i].attributes.devices.data[j].attributes.Serial)
    //       for (let k = 0; k < data_influx.data.length; k++) {
    //         if (data_influx.data[k].topic.split('/')[1] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
    //           if (data_influx.data[k].field === "pH_value") {
    //             for (let l = data_influx.data.length - 1; l > k; l--) {
    //               if (data_influx.data[l].topic.split('/')[1] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
    //                 data1[0].contents.contents.push(pH_Buble(`${h}`+":"+`${m}`, 2, data_influx.data[k].value.toFixed(2), data_influx.data[l].value.toFixed(2)));
    //                 break
    //               }
    //             }
    //           } else if (data_influx.data[k].field === "DO_value") {
    //             for (let l = data_influx.data.length - 1; l > k; l--) {
    //               if (data_influx.data[l].topic.split('/')[1] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
    //                 data1[0].contents.contents.push(CD_Buble(`${h}`+":"+`${m}`, 2, data_influx.data[k].value.toFixed(2), data_influx.data[l].value.toFixed(2)));
    //                 break
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //     line_send_data(data1,data_strapi.data[i].attributes.line_UID)
    //   }
    // }
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเรียก fetchData:', error.message);
  }
};
startTime()
function startTime() {
    const today = new Date();
    var today1 = today.toLocaleTimeString("th-TH", {timeZone: "Asia/Bangkok"});
    h = today1.split(':')[0]
    m = today1.split(':')[1]
    s = today1.split(':')[2]
    setTimeout(startTime, 60000);
    console.log(`${h}`+":"+`${m}`+":"+`${s}`)
    if((h==0||h==6||h==12||h==18)&&(m==0)){
    main()
    }
}
//---------------------------------------------------------------------------------------------------------------
app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all([req.body.events.map(handleEvents)]).then((result) =>
    res.json(result)
  );
});
async function handleEvents(event) {
  console.log(event);
  try {
    if (event.type == "follow") {
      const { userId, userProfile, userName, userPic } =
        await getUserInformation(client, event.source.userId);
      return welcomeMessage(event.replyToken, userName);
    }
    if (event.type == "message" && event.message.text == "Register") {
      try {
        const { userId, userProfile, userName, userPic } =
          await getUserInformation(client, event.source.userId);
        const notitext = await userRegis(userName, userId, userPic);
        return client.replyMessage(event.replyToken,[
          {
            type: "text",
            text: notitext,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    }
    else if (event.type == "message" && event.message.text == "check") {
      try {
        const { userId, userProfile, userName, userPic } = await getUserInformation(client, event.source.userId);
        data_influx = await data_influxx();
        data_strapi = await data_strapii();
        return client.replyMessage(event.replyToken,[
          {
            type: "text",
            text: userId,
          },
        ]);
        // for (let i = 0; i < data_strapi.data.length; i++) {
        //   //console.log(data_strapi.data[i].attributes.name)
        //   data1 = createCarousel()
        //   data1[0].contents.contents.push(cover_Buble(data_strapi.data[i].attributes.factory, data_strapi.data[i].attributes.name, data_strapi.data[i].attributes.location))
        //   for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
        //     //console.log(data_strapi.data[i].attributes.devices.data[j].attributes.Serial)
        //     for (let k = 0; k < data_influx.data.length; k++) {
        //       if (data_influx.data[k].topic.split('/')[2] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
        //         if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "pH") {
        //             // const tds = 320;
        //             // const temp = 25;
        //             // const calcium = 150;
        //             // const alcalinity = 34;
        //             // const pH = 7.5;
        //             const tds = data_strapi.data[i].attributes.tds;
        //             const temp = data_influx.data[k].temp;
        //             const calcium = data_strapi.data[i].attributes.calcium;
        //             const alcalinity = data_strapi.data[i].attributes.alcalinity;
        //             const pH = data_influx.data[k].pH_value;
        //             console.log("tds : "+`${tds}`)
        //             console.log("calcium : "+`${calcium}`)
        //             console.log("temp : "+`${temp}`)
        //             console.log("alcalinity : "+`${alcalinity}`)
        //             console.log("pH : "+`${pH}`) 
        //             let {LSI,indication} = await calculateLSI(pH,tds,temp,calcium,alcalinity)
        //             //console.log(LSI)
        //             data1[0].contents.contents.push(LSI_Buble(`${h}` + ":" + `${m}`,data_strapi.data[i].attributes.name,LSI.toFixed(2),temp.toFixed(2)));
        //             data1[0].contents.contents.push(pH_Buble(`${h}` + ":" + `${m}`,data_strapi.data[i].attributes.name,pH.toFixed(2), temp.toFixed(2)));
        //             //console.log("lenn : "+`${data1[0].contents.contents.length}`)
        //         } else if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "Conductivity"){
        //               data1[0].contents.contents.push(CD_Buble(`${h}` + ":" + `${m}`, data_strapi.data[i].attributes.name, data_influx.data[k].conductivity_value.toFixed(2), data_influx.data[k].temp.toFixed(2)));
        //         }
        //       }
        //     }
        //   }
        //   for (let j = 0; j < data_strapi.data[i].attributes.line_user.data.length; j++) {
        //     // console.log(data_strapi.data[i].attributes.line_user.data[j].attributes.line_UID)
        //     console.log("lenn : "+`${data1[0].contents.contents.length}`)
        //     if(data_strapi.data[i].attributes.line_user.data[j].attributes.line_UID==userId){
        //       return client.replyMessage(event.replyToken,data1);
        //     }else{
        //       return client.replyMessage(event.replyToken,[
        //         {
        //           type: "text",
        //           text: "No data",
        //         },
        //       ]);
        //     }
        //   }
        // }
      } catch (error) {
        console.error(error);
        return client.replyMessage(event.replyToken,[
          {
            type: "text",
            text: "dfsdf",
          },
        ]);
      }
    }else{
      return client.replyMessage(event.replyToken,[
        {
          type: "text",
          text: "Error!!",
        },
      ]);
    }

    //-------------------------- END image message--------------------------------------//
  } catch (error) {
    console.error("Error handling events:", error);
    return client.replyMessage(event.replyToken,[
      {
        type: "text",
        text: "Error!!",
      },
    ]);
  }
}


