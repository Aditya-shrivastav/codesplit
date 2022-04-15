const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const userRouter = require('./routes/userRouter')
const connectDB = require('./config/db')
const connectPassport = require('./config/passport')
const router = express.Router();
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

const getClients = (room) => {
  console.log(room)
  const users = Array.from(io.sockets.adapter.rooms.get(room));
  return users;
}

io.on('connection', (socket) => {
  socket.on('join_room', (room) => {
    socket.join(room)
    console.log(`user with id = ${socket.id} joined room ${room}`);
  })

  socket.on('change', (data) => {
    socket.broadcast.to(data.room).emit('recieve', data)
  })

  socket.on('user_joins', (room) => {
    const users = getClients(room)
    socket.broadcast.to(room).emit('user_joined', users);
    console.log(`Users joined : ${users}`);
  })

  socket.on('disconnect', () => {
    console.log(`user with is ${socket.id} leave the app`)
  })

  socket.on('call_user', ({ userToCall, signalData, from, name }) => {
    socket.broadcast.to(userToCall).emit("call_user", { signal: signalData, from, name })
  })

  socket.on("answer_call", (data) => {
    console.log('answer call called', data.to)
    socket.broadcast.to(data.to).emit("call_accepted", data.signal)
  })

  socket.on("leave_call", (id) => {
    console.log("leave_call", id)
    socket.broadcast.to(id).emit("leave_call", { success: true })
  })

})


router.get('/getClients', async (req, res, next) => {
  const { room } = req.query;
  const users = getClients(room);
  return res.json({ success: true, users })
})


app.use('/user', router)

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`)
})
