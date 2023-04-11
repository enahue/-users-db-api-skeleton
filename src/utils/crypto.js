const brcryp = require("bcrypt");

const hashPassword = (plainPassword) => {
  const data = brcryp.hashSync(plainPassword, 10);

  return data;
};

const ComparePassword = (plainPassword, hashedPassword) => {
  const data = brcryp.compareSync(plainPassword, hashedPassword);
  return data;
};

module.exports = {
  hashPassword,
  ComparePassword
}