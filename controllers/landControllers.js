const landModel = require('../models/landModels')

const getLanding = async (req, res) => {

    try {
        const landings = await landModel.getAllLandings();
        res.status(200).json(landings);
    }
    catch (error) {
        console.log(`Error: ${error.stack}`);
        res.status(404).json({"Message": "Landings not found"});
    }
}



const landControllers = {
    getLanding,
    //getLandingByMass,
    //getLandingByClass,
    //createLanding, 
    //updateLanding,
    //deleteLanding
}

module.exports = landControllers;