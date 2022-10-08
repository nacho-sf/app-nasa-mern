const express = require("express");

const landController = require("../controllers/landControllers");

const landRouter = express.Router();

landRouter.get("/", landController.getLanding);
//landRouter.get("/mass/:mass", landController.getLanding);
//landRouter.get("/class/:class", landController.getLanding);
//landRouter.post("/create", landController.postLanding);
//landRouter.put("/update", landController.putLanding);
//landRouter.delete("/delete", landController.deleteLanding);

module.exports = landRouter;