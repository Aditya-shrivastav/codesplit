const mongoose = require('mongoose')

const connectDB = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  const connect = mongoose.connect(process.env.MONGO_URL, connectionParams)

  connect.then(
    () => {
      console.log('Connected to the Database')
    },
    (err) => {
      console.log(`Error: ${err}`)
    }
  )
}

module.exports = connectDB
