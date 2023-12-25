const axios = require('axios');

async function sendFlexMessage(demo) {
  try {
    let data = JSON.stringify({
      to: 'U2c754ebde74011b8f27c2910c491c5ae',
      messages: demo,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.line.me/v2/bot/message/push',
      headers: {
        Authorization:
          'Bearer RnTjMKvVD5DJ2SOlRLk1RaRQBKQrcSsMKcqpTRHDc4pZdPwYDjZqtS/ZKtTmL2dFe6dA13+JZn1o2eFDZUSKylHVTDYMQ5tvs6hIISYWxFn1CEu6QN36A7e5iyuP3nHvAyWgwHQmjylpyYvxNQfLuwdB04t89/1O/w1cDnyilFU=',
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