let express = require('express')
let app = express()
app.set('view engine','ejs')
let port = process.env.PORT || 3000;
const axios = require('axios');
const data_influxx = require('./DataInflux');
const data_strapii = require('./DataStrapi');
const data_testt = require('./DataTest');
const line_send_data = require('./LineSendData');
const pH_Buble = require('./pH_display/pHBuble.js');
const pH_Flex = require('./pH_display/pHFlex.js');
const CD_Buble = require('./CD_display/cDBuble.js');
const CD_Flex = require('./CD_display/cDFlex.js');
const cover_Buble = require('./cover_carousel/coverBuble.js');
const cover_Flex = require('./cover_carousel/coverFlex.js');
const createCarousel = require('./carouselMAKE.js');
app.get('/',(req,res) =>{
    res.render('test')
})

app.get('/about',(req,res) =>{
    res.render('about')
})
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})
let data1;
const main = async () => {
  try {
    let data_influx = await data_influxx();
    let data_strapi = await data_strapii();
    //let data_influx = await data_testt();
    //     //console.log(data_strapi);
    //     //console.log(data_influx);
    //     for (let i = 0; i < data_strapi.data.length; i++) {
    //       //console.log(response.data.data[i])
    //       if (data_strapi.data[i].attributes.confirmed == true) {
    //         data1 = createCarousel()
    //         //console.log(response.data.data[i].attributes.devices.data)
    //         console.log(data_strapi.data[i].attributes.line_UID)
    //         for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
    //           //console.log(data_strapi.data[i].attributes.devices.data[j].attributes.Serial)
    //           for (let k = 0; k < data_influx.data.length; k++) {
    //             //console.log(typeof (data_influx.data[k].Serial))
    //             if (data_influx.data[k].attributes.Serial === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
    //               //data1[0].contents.contents.push(CD_Buble('11.00', 2, 1.0, 2.0));
    //               if(data_influx.data[k].attributes.field==="pH"){
    //                 data1[0].contents.contents.push(pH_Buble('11.00', 2, data_influx.data[k].attributes.value, data_influx.data[k].attributes.temp));
    //                 //console.log(typeof(data_influx.data[k].attributes.value))
    //                 //console.log(data_influx.data[k].attributes.value)
    //               }else if(data_influx.data[k].attributes.field==="Conductivity"){
    //                 data1[0].contents.contents.push(CD_Buble('11.00', 2, data_influx.data[k].attributes.value, data_influx.data[k].attributes.temp));
    //               }
    //             }
    //           }
    //         }
    //         line_send_data(data1)
    //       }
    //     }

    for (let i = 0; i < data_strapi.data.length; i++) {
      //console.log(response.data.data[i])
      if (data_strapi.data[i].attributes.confirmed == true) {
        data1 = createCarousel()
        //console.log(response.data.data[i].attributes.devices.data)
        data1[0].contents.contents.push(cover_Buble(data_strapi.data[i].attributes.site,'4','This location is on tower1'))
        console.log(data_strapi.data[i].attributes.line_UID)
        for (let j = 0; j < data_strapi.data[i].attributes.devices.data.length; j++) {
          //console.log(data_strapi.data[i].attributes.devices.data[j].attributes.Serial)
          for (let k = 0; k < data_influx.data.length; k++) {
            if (data_influx.data[k].topic.split('/')[1] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
              if (data_influx.data[k].field === "pH_value") {
                for (let l = data_influx.data.length - 1; l > k; l--) {
                  if (data_influx.data[l].topic.split('/')[1] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
                    data1[0].contents.contents.push(pH_Buble('11.00', 2, data_influx.data[k].value.toFixed(2), data_influx.data[l].value.toFixed(2)));
                    break
                  }
                }
              } else if (data_influx.data[k].field === "DO_value") {
                for (let l = data_influx.data.length - 1; l > k; l--) {
                  if (data_influx.data[l].topic.split('/')[1] === data_strapi.data[i].attributes.devices.data[j].attributes.Serial) {
                    data1[0].contents.contents.push(CD_Buble('11.00', 2, data_influx.data[k].value.toFixed(2), data_influx.data[l].value.toFixed(2)));
                    break
                  }
                }
              }
            }
          }
        }
        line_send_data(data1)
      }
    }

    //    line_send_data(data1)
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเรียก fetchData:', error.message);
  }
};
startTime()
function startTime() {
    const today = new Date();
    var today1 = today.toLocaleTimeString("th-TH", {timeZone: "Asia/Bangkok"});
    let h = today1.split(':')[0]
    let m = today1.split(':')[1]
    let s = today1.split(':')[2]
    setTimeout(startTime, 1000*60);
    if((h==0||h==6||h==18||h==24||h==20||h==21||h==19||h==17)&&(m==0||m==10||m==20||m==30||m==40||m==50)){
    main()
    console.log("dsfsdf")
    }
    // console.log(today1)
    console.log(`${h}`+":"+`${m}`+":"+`${s}`)
}
