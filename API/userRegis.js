const axios = require('axios');
const userList = require('./userList');
require('dotenv').config()
async function userRegis(userName, userId, userPic) {
  let notitext;

  try {
    const lineUIDArray = await userList();

    if (lineUIDArray.includes(userId)) {
      notitext = "บัญชีนี้มีการลงทะเบียนแล้วครับ";
    } else {
      notitext = "การลงทะเบียนสำเร็จแล้วครับ";
      let data = JSON.stringify({
        "data": {
          "line_name": userName,
          "line_UID": userId,
          "line_pic": userPic
        }
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://strapi.dataiotapp.com/api/line-users',
        headers: { 
          'Authorization': process.env.strapi_auth, 
          'Content-Type': 'application/json'
        },
        data: data
      };

      const response = await axios(config);
      // console.log(JSON.stringify(response.data));
    }
    return notitext;
  } catch (error) {
    console.error(error);
    throw error; 
  }
}

module.exports = userRegis;
