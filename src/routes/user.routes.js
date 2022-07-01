const { Router } = require("express");
const {
  loginUserParams,
  loginUserQueryParams,
} = require("../controllers/user.controllers");

const router = Router();

const userRoutes = (app) => {
  app.use("/api/user", router);

  /* login?username&password */
  router.post("/login", loginUserQueryParams);

  /* login/:username/:password */
  router.post("/login/:username/:password", loginUserParams);
};

module.exports = {
  userRoutes,
};
