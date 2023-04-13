const Users = require('../models/users.model')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

const findAllUsers = async () => {
    const users = await Users.findAll()
    return users
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const findUserByEmail = async (email) => {
  const data = await Users.findOne({
      where: {
          email : email
      }
  })
  return data
}

const createUser = async (userObj) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: hashPassword(userObj.password)
    })
    return newUser
}

const updateUser = async(id, userObj) => {

    const selectedUser = await Users.findOne({
        where: {
            id: id
        }
    })
    
    if(!selectedUser) return null

    const modifiedUser = await selectedUser.update(userObj)
    return modifiedUser
}

const deleteUser = async(id) => {
    const user = await Users.destroy({
        where: {
            id: id
        }
    })
    return user // 1 || 0
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    findUserByEmail
}