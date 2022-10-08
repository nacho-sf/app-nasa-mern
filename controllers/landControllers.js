const landModel = require('../models/landModels')

const getLanding = async (req, res) => {

    let minMass = req.query.minimum_mass;
    const minimum_mass = parseInt(minMass)

    if (minimum_mass) {
        try {
            const landByMinMass = await landModel.getLandsByMinMass(minimum_mass);
            res.status(200).json(landByMinMass);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Landing not found" });
        }
    }

    else {
        try {
            const landings = await landModel.getAllLandings();
            res.status(200).json(landings);
        }
        catch (error) {
            console.log(`Error: ${error.stack}`);
            res.status(404).json({"Message": "Landings not found"});
        }
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