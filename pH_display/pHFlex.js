// Variable {time,measurementpoint,pHValue,TempValue}
const  pH_Buble  = require('./pHBuble.js');

const pH_Flex = (time, point, pHValue, tempValue) => {
  const result = pH_Buble(time, point, pHValue, tempValue);
  const pHFlex = {
        "type": "flex",
        "altText": "pH",
        "contents": result,
    }

  return pHFlex;
}
module.exports = pH_Flex;


//How to use with reply message//
//************************************************ */
// const  pH_Buble  = require('./pHBuble.js'); //Import file.js
// const result = pH_Flex("12.00", '1', 1.0, 2.0); //Define function
// return client.replyMessage(event.replyToken, [result]);
//************************************************ */