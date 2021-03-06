require('dotenv').load()
const mongoose = require('mongoose')
console.log(mongoose.connection.readyState)

// set env url
mongoose.connect(process.env.MONGO_URI,
  {
    username: process.env.USER,
    password: process.env.PASS
  }
)

var message = `//
 0 = disconnected,
 1 = connected,
 2 = connecting,
 3 = disconnecting`
console.log(message)
console.log(mongoose.connection.readyState)
/*
const db = mongoose.connection
console.log('Connecting...')
while (db.readyState === 2) {
  if (db.readyState === 1) { console.log('Connected.') } else console.log(db.readyState)
}
*/
