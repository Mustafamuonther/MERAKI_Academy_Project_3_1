const express = require("express")

const{register,loginUser}= require("../controllers/users")

const usersRouter =express.Router();

usersRouter.post("/register",register)
usersRouter.post("/login",loginUser)

module.exports = usersRouter;