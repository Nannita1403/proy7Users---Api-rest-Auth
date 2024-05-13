const { isAuth, isNannita } = require("../../middlewares/auth");
const { register, login, getUsers, deleteUser } = require("../controllers/user");
const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAuth], getUsers);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.delete("/:id", [isNannita], deleteUser);


module.exports = usersRoutes;