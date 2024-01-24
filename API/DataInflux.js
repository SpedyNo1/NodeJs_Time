const axios = require('axios');
const qs = require('qs');
// async function fetchData() {
//   try {
//     let data = JSON.stringify({
//       "bucket_name": "sensor",
//       "measureament_name": "mqtt_consumer",
//       "field": [
//         "chlorine_value",
//         "DO_value",
//         "pH_value",
//         "temp"
//       ]
//     });

//     let config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://sgm_api_hatyai.dataiotapp.com/api/v1/content/read/latest',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data: data
//     };
//     const response = await axios.request(config);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
//-----------
async function fetchData() {
  try {
    let data = qs.stringify({
    });
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/v1/content/read/latest',
      headers: { },
      data : data
    };
    
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = fetchData;