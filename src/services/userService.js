const models = require('../models');

const getAllUser = async () => {
  try {
    const users = await models.User.findAll()
    
    return users;
  } catch (error) {
    throw error;
  }
}

const postUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body
    const user = await models.User.create({
      firstName,
      lastName,
      email,
      phoneNumber
    })

    return user
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllUser,
  postUser
}
