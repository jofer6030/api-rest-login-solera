const pool = require("../config/dbConnect");
const { checkPassword } = require("../helper/checkPassword");

class User {
  static async loginUser(username, password) {
    if (!username || !password) {
      return {
        status: 400,
        message: "Bad Request",
      };
    }
    try {
      const [user] = await pool.query(
        `SELECT * FROM Users WHERE username = ?`,
        [username]
      );

      if (!user.length) {
        return {
          status: 404,
          message: "User not found",
          user: null,
        };
      }

      const isPasswordCorrect = await checkPassword(password, user[0].password);

      if (!isPasswordCorrect) {
        return {
          status: 401,
          message: "Password incorrect",
          user: null,
        };
      }

      return {
        status: 200,
        message: "User found",
        user: user[0],
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = User;
