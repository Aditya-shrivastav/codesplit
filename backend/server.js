const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const userRouter = require('./routes/userRouter')
const connectDB = require('./config/db')
const connectPassport = require('./config/passport')

require('dotenv').config()

const app = express()
const server = http.createServer(app)

// middlewares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// config functions
connectDB()
connectPassport()

// all routers
app.use('/user', userRouter)

// Socket.io connection
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.on('join_room', (room) => {
    socket.join(room)
    console.log(`user with id = ${socket.id} joined room ${room}`)
  })

  socket.on('change', (data) => {
    socket.broadcast.to(data.room).emit('recieve', data)
  })

  socket.on('disconnect', () => {
    console.log(`user with is ${socket.id} leave the app`)
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`)
})
