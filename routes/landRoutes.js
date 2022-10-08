const express = require("express");

const landController = require("../controllers/landController");

const landRouter = express.Router();

landRouter.get("/", landController.getLanding);
landRouter.post("/", landController.postLanding);
landRouter.put("/", landController.putLanding);
landRouter.delete("/", landController.deleteLanding);

module.exports = landRouter;