require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { userRoutes } = require("./src/routes/user.routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  routes() {
    userRoutes(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

new Server();
