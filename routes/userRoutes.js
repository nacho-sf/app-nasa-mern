const express = require("express");

const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", userController.getUser);
userRouter.post("/", userController.postUser);
userRouter.put("/", userController.putUser);
userRouter.delete("/", userController.deleteUser);

module.exports = userRouter;