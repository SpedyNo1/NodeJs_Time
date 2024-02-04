function mqtts() {
  const mqtt = require('mqtt')
  const fs = require('fs')
  const line_send_data = require('../API/LineSendData.js');
  const createCarousel = require('../API/carouselMAKE.js');
  const relay_display = require('../relay_display/relay_flex.js');
  const { connectOptions } = require('./use_mqtts.js');
const { formToJSON } = require('axios');
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
    let data = JSON.parse(payload.toString())
    let data1 = createCarousel()
    data1[0].contents.contents.push(relay_display(data.R1.name,data.R2.name,data.R3.name,data.R4.name,data.R1.status,data.R2.status,data.R3.status,data.R4.status))
    for (let j = 0; j < data.line.length; j++){
      line_send_data(data1, data.line[j])
    }
  })

}
 module.exports = mqtts;


