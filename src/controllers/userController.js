const UserService = require('../services/userService');

const all = async (req, res, next) => {
  try {
    const users = await UserService.getAllUser()
    req.data = users;
    next()
  } catch (error) {
    next(error)
  }
}

const post = async (req, res, next) => {
  try {
    const users = await UserService.postUser(req, res, next)
    req.data = users
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  all,
  post
}
