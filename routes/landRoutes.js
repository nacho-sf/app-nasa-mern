const express = require("express");

const landController = require("../controllers/landControllers");

const landRouter = express.Router();

landRouter.get("/", landController.getLanding);
landRouter.get("/mass/:mass", landController.getLandingByMass);
landRouter.get("/class/:class", landController.getLandingByClass);
landRouter.post("/create", landController.createLanding);
landRouter.put("/update", landController.updateLanding);
landRouter.delete("/delete", landController.deleteLanding);

module.exports = landRouter;