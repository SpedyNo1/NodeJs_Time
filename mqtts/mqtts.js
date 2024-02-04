function mqtts(){
    const mqtt = require('mqtt')
const fs = require('fs')
const line_send_data = require('../API/LineSendData.js');
const { connectOptions } = require('./use_mqtts.js')
const clientId = 'mqttx_9e420e8e' + Math.random().toString(16).substring(2, 8)
const options = {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'admin',
  password: '1234',
  reconnectPeriod: 1000,
  rejectUnauthorized: true,
}
const line_id = ["Ucfb2ce7a74c84602b757e1f1e2ec0182","Ufe028284bac6e239117d315cb2897c63"]
const { protocol, host, port } = connectOptions
let connectUrl = `${protocol}://${host}:${port}`
if (['ws', 'wss'].includes(protocol)) {
  connectUrl += '/mqtt'
}
if (['mqtts', 'wss'].includes(protocol) && fs.existsSync('broker.emqx.io-ca.crt')) {
  options['ca'] = fs.readFileSync('broker.emqx.io-ca.crt')
}

const client = mqtt.connect(connectUrl, options)
const topic = "test/1"
const qos = 0
client.on('connect', () => {
  console.log(`${protocol}: Connected`)
  client.subscribe(topic, { qos }, (error) => {
    if (error) {
      console.log('subscribe error:', error)
      return
    }
    console.log(`${protocol}: Subscribe to topic '${topic}'`)
  })
})
client.on('reconnect', (error) => {
  console.log(`Reconnecting(${protocol}):`, error)
})
client.on('error', (error) => {
  console.log(`Cannot connect(${protocol}):`, error)
})
client.on('message', (topic, payload) => {
  //console.log('Received Message:', topic, payload.toString())
  let demo1 = JSON.parse(payload.toString())
  let mes=[
    {
        "type":"text",
        "text": payload.toString()
    }
]
  line_send_data(mes,"Ufe028284bac6e239117d315cb2897c63")
  console.log(demo1.device)
})
}
module.exports = mqtts;


