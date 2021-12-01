const User = require('../models/users')
const passport = require('passport')
const crypto = require('crypto-js')

module.exports = {
  registerUser: async (req, res, next) => {
    try {
      let { firstName, lastName, email, password, confirmPassword } = req.body

      if (!firstName || !lastName || !email || !password) {
        return res.json({
          success: false,
          message: 'All fields are required*',
        })
      }

      if (
        !email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return res.json({
          success: false,
          message: 'Please Enter a valid Email',
        })
      }

      if (password !== confirmPassword) {
        return res.json({
          success: false,
          message: 'Password should match with confirm password',
        })
      }

      if (password.length < 6 || password.length > 15) {
        return res.json({
          success: false,
          message: 'Password should be of length 6 to 15',
        })
      }

      const userExist = await User.findOne({ email })

      if (userExist) {
        return res.json({
          success: false,
          message: 'This email already exist, Please try with another email.',
        })
      }

      let hashPassword = crypto.AES.encrypt(
        password,
        process.env.encryptionKey
      ).toString()

      const user = await User.create({
        email,
        firstName,
        lastName,
        hashPassword,
      })

      return res.status(200).json({
        success: true,
        message: 'Register Successfull',
        data: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      })
    } catch (err) {
      return res.json({ Error: `Error: ${JSON.stringify(err)}` })
    }
  },

  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body
      if (
        !email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return res.json({
          success: false,
          message: 'Please Enter a valid Email',
        })
      }

      if (password.length < 6 || password.length > 15) {
        return res.json({
          success: false,
          message: 'Password lenght should between 6 to 15',
        })
      }

      const userExist = await User.findOne({ email })

      if (userExist && (await userExist.matchPassword(password))) {
        return res.status(200).json({
          success: true,
          message: 'Login Successfull',
          data: {
            _id: userExist._id,
            firstName: userExist.firstName,
            lastName: userExist.lastName,
            email: userExist.email,
          },
        })
      }

      return res.json({ success: false, message: 'Invalid Credentials' })
    } catch (error) {
      return res.json({ Error: `Error: ${JSON.stringify(error)}` })
    }
  },

  signupByGoogle: async (req, res, next) => {
    try {
      passport.authenticate(
        'google',
        { session: false },
        function (err, user, info) {
          if (err) {
            return next(err)
          }
          if (!user) {
            return res.redirect(`${config.appUrl}/login`)
          }

          console.log(JSON.stringify(user))

          return res.redirect('http://localhost:3000/')
        }
      )(req, res, next)
    } catch (err) {
      return res.status(404).json({ message: `Error: ${JSON.stringify(err)}` })
    }
  },
}
