const Userd = require('../models/users.models')
const uuid = require('uuid')
const {hashPassword} = require('../utils/crypto')
const Users = require('../models/users.models')

const createNewUser = async(UserObj) => {
const newUser = {
  id:uuid.v4(),
  firstName: UserObj.firstName,
  lastName: UserObj.lastName,
  email: UserObj.email,
  password: hashPassword(UserObj.password),
  birthday: UserObj.birthday,
  phone: UserObj.phone
}
const data = await Users.create(newUser)
return data
}