// Variable {time,measurementpoint,pHValue,TempValue}
const CD_Buble  = require('./cDBuble.js');
const CD_Flex = (time, point, pHValue, tempValue) => {
  const result = CD_Buble(time, point, pHValue, tempValue);
  const cDFlex = {
        "type": "flex",
        "altText": "pH",
        "contents": result,
    }

  return cDFlex 
}
module.exports = CD_Flex;


