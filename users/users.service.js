const bcrypt = require('bcrypt')
const User = require('./users.schema')

async function login(email, password) {
  if (!email || !password) {
    throw new Error('INVALID_CREDENTIALS')
  }

  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('INVALID_CREDENTIALS')
  }

  const match = await bcrypt.compare(password, user.passwordHash)
  if (!match) {
    throw new Error('INVALID_CREDENTIALS')
  }

  return user
}

async function signUp(name, email, password) {
  if (!name || !email || !password) {
    throw new Error('INVALID_INPUT')
  }

  const exists = await User.findOne({ email })
  if (exists) {
    throw new Error('EMAIL_ALREADY_EXISTS')
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    passwordHash,
  })

  return user
}

module.exports = {
  login,
  signUp,
}
