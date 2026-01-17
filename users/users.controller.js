const UsersService = require('./users.service')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UsersService.login(email, password)
    const token = jwt.sign(
      { sub: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.json({ token })
  } catch (err) {
    if (err.message === 'INVALID_CREDENTIALS') {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.status(500).json({ message: 'kontol kau' })
  }
}

exports.signUp = async (req, res) => {
  const { email, password, name } = req.body

  try {
    const user = await UsersService.signUp(name, email, password)

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (err) {
    if (err.message === 'INVALID_INPUT') {
      return res.status(400).json({ message: 'Invalid input data' })
    }

    if (err.message === 'EMAIL_ALREADY_EXISTS') {
      return res.status(409).json({ message: 'Email already exists' })
    }

    res.status(500).json({ message: 'Internal server error' })
  }

}
