const mongoose = require('mongoose')

async function connectMongo() {
  if (mongoose.connection.readyState === 1) return

  await mongoose.connect(process.env.MONGO_URI, {
    autoIndex: false,
    serverSelectionTimeoutMS: 5000,
  })

  console.log('MongoDB connected')
}

async function disconnectMongo() {
  await mongoose.disconnect()
}

module.exports = {
  connectMongo,
  disconnectMongo,
}
