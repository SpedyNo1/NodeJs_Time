const axios = require('axios');
require('dotenv').config()
async function fetchData() {
  try {
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: "https://strapi.dataiotapp.com/api/measurement-points?populate=%2A",
  headers: { 
    'Authorization': process.env.strapi_auth
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