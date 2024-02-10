const axios = require('axios');
async function fetchData() {
  try {
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  //url: 'https://strapi.dataiotapp.com/api/line-users?populate=%2A',
  url: "https://strapi.dataiotapp.com/api/measurement-points?populate=%2A",
  headers: { 
    'Authorization': 'Bearer a7e56c11762a64752cd91d5bdb9cfb259d44ce44458b3006e05f16003a5dd64559b84f28876c91f72e4e180fa47ba843e22fab7e882e08d24e9a89b96967c4cdc1875eeb121fcc122c383ca15520b880f553c51e746ab97d75ef96b5022474fae49b944f3eb02bc66001c9babdc12756029f6465733fae469d3cf58ceea04743'
  }
};
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
module.exports = fetchData;