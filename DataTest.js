// api.js
const axios = require('axios');

function fetchData() {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://strapi.dataiotapp.com/api/topic-tests?populate=%2A',
    headers: { 
      'Authorization': 'Bearer 36d5aeb3116f10a8cb30779cea357975db8bf25e7b8ba78857dc83bc2a7e160ba67d80a434a5be79ce6f540b29d69e6ae6fed4957bee4abea608f5d4814fe106efdbfdf8578d9e84548214ef24f6b8b00fb9c082b34870782a09cba2099d765b13732ba7fd904a25e9ab7cd8e56ff9880ce6dfc099c3f179e0c2abb4a3f7a49a'
    }
  };

  return axios.request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

module.exports = fetchData;
