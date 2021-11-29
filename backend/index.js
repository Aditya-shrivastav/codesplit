const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const userRouter = require('./routes/userRouter');
const passport = require('passport');
const User = require('./models/users')
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

require('dotenv').config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}


const app = express()
const server = http.createServer(app)

const connect = mongoose.connect(process.env.MONGO_URL, connectionParams);

connect.then(
  (db) => {
    console.log("Connected to the Database")
  },
  (err) => {
    console.log(`Error: ${err}`)
  }
)

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/user', userRouter)


var googleOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `http://localhost:3000/user/googleSignup/callback`,
  passReqToCallback: true
}


passport.use(
  new GoogleStrategy(googleOptions, async (req, accessToken, refreshToken, profile, done) => {

    // find the user in the database based on their google id
    let user = await User.findOne({ 'google.id': profile.id })
    if (user) {
      user.google = {
        id: profile.id,
        accessToken: accessToken,
        refreshToken: refreshToken
      }
      await user.save()
      return done(null, user)
    }

    if (!profile.emails || profile.emails.length === 0) {
      return done(null, false, {
        message: 'Your google account does not provide your email, kindly use another method for Signup'
      })
    }
    else {
      user = await User.findOne({ email: profile.emails[0].value })
      if (user) {
        return done(null, false, {
          message: 'The Email Id associated with this google account is already in use'
        })
      }
      else if (!user) {
        var newUser = new User()
        newUser.google.id = profile.id
        newUser.google.accessToken = accessToken
        newUser.google.refreshToken = refreshToken
        newUser.name = profile.name.givenName + ' ' + profile.name.familyName
        newUser.name = newUser.name.replace(/(\w|')*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
        newUser.email = profile.emails[0].value
        await newUser.save()
        return done(null, newUser)
      }

      return done(null, false, { message: 'Could not perform the operation' })
    }
  })
)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(`user with ${socket.id} connected`)

  socket.on('disconnect', () => {
    console.log(`user with is ${socket.id} leave the app`)
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`)
})
