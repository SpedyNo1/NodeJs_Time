let express = require('express')
let app = express()
app.set('view engine', 'ejs')
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
const line_send_data = require('./API/LineSendData.js');
const mqtts_line = require('./mqtts/mqtts.js');
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
let data1;
const timer2 = [24, 6, 12, 18];
let count = 0;
let sort_min_positive;
const formatSeconds = s => [parseInt(s / 60 / 60), parseInt(s / 60 % 60), parseInt(s % 60)].join(':').replace(/\b(\d)\b/g, '0$1');
const pad = (d) => (d < 10) ? '0' + d.toString() : d.toString();
app.get('/', (req, res) => {
  res.render('test')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get("/test", (req, res) => {
  res.send("ok");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
//mqtts_line()
const main = async () => {
  try {
    let data_influx = await data_influxx();
    let data_strapi = await data_strapii();
    const today = new Date();
    var today1 = today.toLocaleTimeString("th-TH", { timeZone: "Asia/Bangkok" });
    h = parseInt(today1.split(':')[0])
    m = parseInt(today1.split(':')[1])
    s = parseInt(today1.split(':')[2])
    for (let i = 0; i < data_strapi.data.length; i++) {
      //console.log(data_strapi.data[i].attributes.name)
      let pH = -1;
      let tds = -1;
      let temp = -1;
      data1 = createCarousel()
      data1[0].contents.contents.push(cover_Buble(data_strapi.data[i].attributes.factory, data_strapi.data[i].attributes.name, data_strapi.data[i].attributes.location))
      for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
        for (let k = 0; k < data_influx.data.length; k++) {
          if (data_influx.data[k].topic.split('/')[2] === data_strapi.data[i].attributes.devices.data[j].attributes.serialnumber) {
            if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "pH") {
              // const tds = 320;
              // const temp = 25;
              // const calcium = 150;
              // const alcalinity = 34;
              // const pH = 7.5;
              temp = data_influx.data[k].temp;
              pH = data_influx.data[k].pH_value;
              console.log("pH : " + `${pH}`)
              data1[0].contents.contents.push(pH_Buble(pad(h) + ":" + pad(m), data_strapi.data[i].attributes.name, pH.toFixed(2), temp.toFixed(2)));
            } else if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "conductivity") {
              tds = data_influx.data[k].conductivity_value;
              console.log("tds : " + `${tds}`)
              data1[0].contents.contents.push(CD_Buble(pad(h) + ":" + pad(m), data_strapi.data[i].attributes.name, data_influx.data[k].conductivity_value.toFixed(2), data_influx.data[k].temp.toFixed(2)));
            }
          }
        }
        if (pH != -1 && tds != -1) {
          const calcium = data_strapi.data[i].attributes.calcium;
          const alcalinity = data_strapi.data[i].attributes.alcalinity;
          console.log("calcium : " + `${calcium}`)
          console.log("temp : " + `${temp}`)
          console.log("alcalinity : " + `${alcalinity}`)
          console.log("pH : " + `${pH}`)
          let { LSI, indication } = await calculateLSI(pH, tds, temp, calcium, alcalinity)
          console.log(LSI)
          data1[0].contents.contents.push(LSI_Buble(pad(h) + ":" + pad(m), data_strapi.data[i].attributes.name, LSI.toFixed(2), temp.toFixed(2)));
        }
      }
      for (let j = 0; j < data_strapi.data[i].attributes.line_users.data.length; j++) {
        // console.log(data_strapi.data[i].attributes.line_user.data[j].attributes.line_UID)
        // console.log("lenn : "+`${data1[0].contents.contents.length}`)
        line_send_data(data1, data_strapi.data[i].attributes.line_users.data[j].attributes.line_UID)
      }
    }
    return;
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเรียก fetchData:', error.message);
  }
};

startTime()
time_counter()
function startTime() {
  let test = []
  const today = new Date();
  var today1 = today.toLocaleTimeString("th-TH", { timeZone: "Asia/Bangkok" });
  h = parseInt(today1.split(':')[0])
  m = parseInt(today1.split(':')[1])
  s = parseInt(today1.split(':')[2])
  console.log(pad(h) + ":" + `${m}` + ":" + `${s}`)
  let all = (h * 60 * 60) + (m * 60)
  for (let i = 0; i < timer2.length; i++) {
    test[i] = (timer2[i] * 60 * 60) - all
  }
  let positiveNumbers = test.filter(num => num > 0);
  sort_min_positive = Math.min(...positiveNumbers) / 60;
  console.log(sort_min_positive, "MIN", formatSeconds(sort_min_positive * 60))
  count = 0;
}
function time_counter() {
  if (count != sort_min_positive) {
    count++;
    console.log(count, sort_min_positive)
  } else {
    startTime();
    main();
  }
  setTimeout(time_counter, 1000 * 60);
}

// startTime()
// function startTime() {
//     const today = new Date();
//     var today1 = today.toLocaleTimeString("th-TH", {timeZone: "Asia/Bangkok"});
//     h = today1.split(':')[0]
//     m = today1.split(':')[1]
//     s = today1.split(':')[2]
//     setTimeout(startTime, 1000);
//     console.log(`${h}`+":"+`${m}`+":"+`${s}`)
//     if((h==0||h==6||h==12||h==18)&&(m==0)){
//     main()
//     }
// }
//---------------------------------------------------------------------------------------------------------------
app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all([req.body.events.map(handleEvents)]).then((result) =>
    res.json(result)
  );
});
async function handleEvents(event) {
  console.log(event);
  try {
    if(event.type == "message" && event.message.text == "Register") {
      try {
        const { userId, userProfile, userName, userPic } = await getUserInformation(client, event.source.userId);
        const notitext = await userRegis(userName, userId, userPic);
        return client.replyMessage(event.replyToken, [
          {
            type: "text",
            text: notitext,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    }
    else if (event.type == "message" && event.message.text == "Check") {
      try {
        const { userId, userProfile, userName, userPic } = await getUserInformation(client, event.source.userId);
        data_influx = await data_influxx();
        data_strapi = await data_strapii();
        const today = new Date();
        var today1 = today.toLocaleTimeString("th-TH", { timeZone: "Asia/Bangkok" });
        h = parseInt(today1.split(':')[0])
        m = parseInt(today1.split(':')[1])
        s = parseInt(today1.split(':')[2])
        let check_line = 0;
        for (let i = 0; i < data_strapi.data.length; i++) {
          //console.log(data_strapi.data[i].attributes.name)
          data1 = createCarousel()
          data1[0].contents.contents.push(cover_Buble(data_strapi.data[i].attributes.factory, data_strapi.data[i].attributes.name, data_strapi.data[i].attributes.location))
          for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
            //console.log(data_strapi.data[i].attributes.devices.data[j].attributes.Serial)
            for (let k = 0; k < data_influx.data.length; k++) {
              if (data_influx.data[k].topic.split('/')[2] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
                if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "pH") {
                  const tds = data_strapi.data[i].attributes.tds;
                  const temp = data_influx.data[k].temp;
                  const calcium = data_strapi.data[i].attributes.calcium;
                  const alcalinity = data_strapi.data[i].attributes.alcalinity;
                  const pH = data_influx.data[k].pH_value;
                  console.log("tds : " + `${tds}`)
                  console.log("calcium : " + `${calcium}`)
                  console.log("temp : " + `${temp}`)
                  console.log("alcalinity : " + `${alcalinity}`)
                  console.log("pH : " + `${pH}`)
                  let { LSI, indication } = await calculateLSI(pH, tds, temp, calcium, alcalinity)
                  //console.log(LSI)
                  data1[0].contents.contents.push(LSI_Buble(pad(h) + ":" + pad(m), data_strapi.data[i].attributes.name, LSI.toFixed(2), temp.toFixed(2)));
                  data1[0].contents.contents.push(pH_Buble(pad(h) + ":" + pad(m), data_strapi.data[i].attributes.name, pH.toFixed(2), temp.toFixed(2)));
                  //console.log("lenn : "+`${data1[0].contents.contents.length}`)
                } else if (data_strapi.data[i].attributes.devices.data[j].attributes.sensor === "conductivity") {
                  data1[0].contents.contents.push(CD_Buble(pad(h) + ":" + pad(m), data_strapi.data[i].attributes.name, data_influx.data[k].conductivity_value.toFixed(2), data_influx.data[k].temp.toFixed(2)));
                }
              }
            }
          }
          for (let j = 0; j < data_strapi.data[i].attributes.line_users.data.length; j++) {
            if (data_strapi.data[i].attributes.line_users.data[j].attributes.line_UID == userId) {
              line_send_data(data1, userId)
              check_line++;
            }
          }
        }
        if (check_line == 0) {
          return client.replyMessage(event.replyToken, [
            {
              type: "text",
              text: "No data",
            },
          ]);
        }
      } catch (error) {
        console.error(error);
        return client.replyMessage(event.replyToken, [
          {
            type: "text",
            text: "No data",
          },
        ]);
      }
    } else {
      return client.replyMessage(event.replyToken, [
        {
          type: "text",
          text: "Error!!",
        },
      ]);
    }
    if (event.type == "follow") {
      const { userId, userProfile, userName, userPic } = await getUserInformation(client, event.source.userId);
      return welcomeMessage(event.replyToken, userName);
    }
  } catch (error) {
    console.error("Error handling events:", error);
  }
}


