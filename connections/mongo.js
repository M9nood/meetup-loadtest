const mongoose = require('mongoose')
let _connected = false

async function connect(){
  if (_connected) {
    return
  }
  await mongoose.connect('mongodb://localhost/event_node', {useNewUrlParser: true})
  mongoose.connection.on('error', (err) => console.error(err, 'MongoDb connection error:'))
  console.log('MongoDb Connected')
  _connected = true
}

module.exports = {
  connect
}