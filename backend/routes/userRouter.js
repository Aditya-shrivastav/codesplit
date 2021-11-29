const express = require('express');
const passport = require('passport');
const { registerUser, signupByGoogle } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);

router.get(
    '/googleSignup',
    passport.authenticate('google', {
        scope: ['email', 'profile'],
        accessType: 'offline',
        prompt: 'consent'
    })
);

router.get('/googleSignup/callback', signupByGoogle);

module.exports = router;