const mongoose = require('mongoose')
const crypto = require('crypto-js')
const Schema = mongoose.Schema

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hashPassword: { type: String },
    google: {
      id: { type: String },
      accessToken: { type: String },
      refreshToken: { type: String },
    },
  },
  {
    timestamps: true,
  }
)

User.methods.matchPassword = async function (enteredPassword) {
  const decryptPassword = await crypto.AES.decrypt(
    this.hashPassword,
    process.env.encryptionKey
  ).toString(crypto.enc.Utf8)
  return enteredPassword === decryptPassword
}

module.exports = mongoose.model('User', User)
