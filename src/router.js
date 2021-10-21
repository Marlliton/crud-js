const express = require("express");
const RegisterController = require("./controller/RegisterController");

const route = express.Router();

route.get("/", RegisterController.home);

route.post("/actions/:action/:userid", RegisterController.action);

route.post("/register", RegisterController.register);

module.exports = route;
