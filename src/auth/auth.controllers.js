const { findUserByEmail } = require("../users/users.controllers");
const { ComparePassword } = require("../utils/crypto");

const checkUserCredentials = async (email, password) => {
  const user = await findUserByEmail(email);

  const validatePassword = ComparePassword(password, user.password);
  if (!validatePassword) {
    return false;
  }
  return user;
};

module.exports = checkUserCredentials;