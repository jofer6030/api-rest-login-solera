const User = require("../model/User");

const loginUserQueryParams = async (req, res) => {
  const { username, password } = req.query;
  const response = await User.loginUser(username, password);
  const { status, user, message } = response;

  res.status(status).json({
    message,
    user: !user ? undefined : user.fullname,
  });
};

const loginUserParams = async (req, res) => {
  const { username, password } = req.params;
  const response = await User.loginUser(username, password);
  const { status, user, message } = response;

  res.status(status).json({
    message,
    user: !user ? undefined : user.fullname,
  });
};

module.exports = {
  loginUserQueryParams,
  loginUserParams,
};
