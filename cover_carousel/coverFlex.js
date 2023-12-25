const cover_Buble  = require('./coverBuble.js');
const cover_Flex = (facName,point,des) => {
  const result = cover_Buble(facName,point,des);
  const coverFlex = {
        "type": "flex",
        "altText": "pH",
        "contents": result,
    }

  return coverFlex 
}
module.exports = cover_Flex;


