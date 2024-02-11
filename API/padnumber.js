// api.js
const axios = require('axios');

function fetchData(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

module.exports = fetchData;
