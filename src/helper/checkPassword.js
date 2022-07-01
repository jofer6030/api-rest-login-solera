const bcrypt = require("bcrypt");

const checkPassword = (password, passwordDB) => {
  return bcrypt.compareSync(password, passwordDB);
};

module.exports = {
  checkPassword,
};
