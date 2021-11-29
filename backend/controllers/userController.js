const User = require('../models/users');
const passport = require('passport');

module.exports = {
    registerUser: async (req, res, next) => {
        try {
            let { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ message: 'Please Provide all the fields' });
            }

            if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return res.status(404).json({ message: 'Please Enter a valid Email' });
            }

            if (password.length < 6 || password.length > 15) {
                return res.status(404).json({ message: 'Password should be of length 6 to 12' });
            }

            const userExist = await User.findOne({ email });

            if (userExist) {
                return res.status(404).json({ message: 'User already exist, Please try with another email.' })
            }

            let hashPassword = crypto.AES.encrypt(password, process.env.encryptionKey).toString();

            const user = await User.create({
                email,
                name,
                hashPassword
            })

            console.log(JSON.stringify(user))

            return res.status(200).json({ success: true })

        } catch (err) {
            return res.status(404).json({ message: `Error: ${JSON.stringify(err)}` })
        }
    },

    signupByGoogle: async (req, res, next) => {
        try {
            passport.authenticate('google', { session: false }, function (err, user, info) {
                if (err) {
                    return next(err)
                }
                if (!user) {
                    return res.redirect(`${config.appUrl}/login`)
                }

                console.log(JSON.stringify(user))

                return res.redirect('http://localhost:3000')

            })(req, res, next)
        } catch (err) {
            return res.status(404).json({ message: `Error: ${JSON.stringify(err)}` })
        }
    }
}