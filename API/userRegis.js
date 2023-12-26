const axios = require('axios');
const userList = require('./userList');

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
          'Authorization': 'Bearer 36d5aeb3116f10a8cb30779cea357975db8bf25e7b8ba78857dc83bc2a7e160ba67d80a434a5be79ce6f540b29d69e6ae6fed4957bee4abea608f5d4814fe106efdbfdf8578d9e84548214ef24f6b8b00fb9c082b34870782a09cba2099d765b13732ba7fd904a25e9ab7cd8e56ff9880ce6dfc099c3f179e0c2abb4a3f7a49a', 
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
