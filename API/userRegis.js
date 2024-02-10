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
          'Authorization': 'Bearer a7e56c11762a64752cd91d5bdb9cfb259d44ce44458b3006e05f16003a5dd64559b84f28876c91f72e4e180fa47ba843e22fab7e882e08d24e9a89b96967c4cdc1875eeb121fcc122c383ca15520b880f553c51e746ab97d75ef96b5022474fae49b944f3eb02bc66001c9babdc12756029f6465733fae469d3cf58ceea04743', 
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
