const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/users')

const connectPassport = () => {
  var googleOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:3000/user/googleSignup/callback`,
    passReqToCallback: true,
  }

  passport.use(
    new GoogleStrategy(
      googleOptions,
      async (req, accessToken, refreshToken, profile, done) => {
        // find the user in the database based on their google id
        let user = await User.findOne({ 'google.id': profile.id })
        if (user) {
          user.google = {
            id: profile.id,
            accessToken: accessToken,
            refreshToken: refreshToken,
          }
          await user.save()
          return done(null, user)
        }

        if (!profile.emails || profile.emails.length === 0) {
          return done(null, false, {
            message:
              'Your google account does not provide your email, kindly use another method for Signup',
          })
        } else {
          user = await User.findOne({ email: profile.emails[0].value })
          if (user) {
            return done(null, false, {
              message:
                'The Email Id associated with this google account is already in use',
            })
          } else if (!user) {
            var newUser = new User()
            newUser.google.id = profile.id
            newUser.google.accessToken = accessToken
            newUser.google.refreshToken = refreshToken
            newUser.name =
              profile.name.givenName + ' ' + profile.name.familyName
            newUser.name = newUser.name.replace(/(\w|')*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
            })
            newUser.email = profile.emails[0].value
            await newUser.save()
            return done(null, newUser)
          }

          return done(null, false, {
            message: 'Could not perform the operation',
          })
        }
      }
    )
  )
}

module.exports = connectPassport
