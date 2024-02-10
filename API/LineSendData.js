const axios = require('axios');
async function sendFlexMessage(mes,UID) {
  try {
    let data = JSON.stringify({
      to: UID,
      messages: mes,
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.line.me/v2/bot/message/push',
      headers: {
        Authorization:
        'Bearer 9u+EZFdUZamKg8xgz/goisGLtMDjeZZ1i6FphDqb7TwvGwkbNGa2yuy6+o9bpr1L3GCgeZTqSqwLXReOkKnqYcX40tcmtNoi7sfY2OUCEDLPVV2M9ctz5L2FgjroDgCgepR8Sj9I4XbMA4yeyYlmeAdB04t89/1O/w1cDnyilFU=',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    const response = await axios(config);
    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
}

// Call the function to send the Flex Message
module.exports = sendFlexMessage;