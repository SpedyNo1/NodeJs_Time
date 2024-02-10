const axios = require('axios');

async function userList() {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://strapi.dataiotapp.com/api/line-users',
      headers: { 
        'Authorization': 'Bearer a7e56c11762a64752cd91d5bdb9cfb259d44ce44458b3006e05f16003a5dd64559b84f28876c91f72e4e180fa47ba843e22fab7e882e08d24e9a89b96967c4cdc1875eeb121fcc122c383ca15520b880f553c51e746ab97d75ef96b5022474fae49b944f3eb02bc66001c9babdc12756029f6465733fae469d3cf58ceea04743'
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
