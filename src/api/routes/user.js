const { register, login } = require("../controllers/user");
const usersRoutes = require("express").Router();

usersRoutes.post("/register", register);
usersRoutes.post("/login", login)

module.exports = usersRoutes;