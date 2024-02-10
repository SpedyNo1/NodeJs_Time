const axios = require('axios');

async function userList() {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://strapi.dataiotapp.com/api/line-users',
      headers: { 
        'Authorization': process.env.strapi_auth
      }
    };
    const response = await axios.request(config);

    if ("data" in response.data && Array.isArray(response.data.data)) {
      const lineUIDArray = response.data.data.map(item => item.attributes.line_UID);
    //   console.log(lineUIDArray);
      return lineUIDArray;  
    } else {
      console.log("line_UID is not found");
      return [];  
    }
  } catch (error) {
    console.error(error.message);
    return [];  
  }
}

module.exports = userList;
