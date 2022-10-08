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
            res.status(404).json({ "Message": "Not found" });
        }
    }


    else if (req.query.from) {
        try {
            let landsFrom = await landModel.getLandsFromDate(req.query.from);
            res.status(200).json(landsFrom);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }


    else if (req.query.to) {
        try {
            let landsTo = await landModel.getLandsToDate(req.query.to);
            res.status(200).json(landsTo);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }


    else if (req.query.from && req.query.to) {
        try {
            let landsBetween = await landModel.getLandsBetweenDate(req.query.from, req.query.to);
            res.status(200).json(landsBetween);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }


    else {
        try {
            const landings = await landModel.getAllLandings();
            res.status(200).json(landings);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({"Message": "Not found"});
        }
    }
}



const getLandingByMass = async(req, res) => {

    let massParam = req.params.mass;
    let mass = parseInt(massParam)

    try{
     let landMass =  await landModel.getLandingByMass(mass);
    res.status(200).json(landMass)   
    }
    catch (err) {
    console.log(`Error: ${err.stack}`)
    res.status(404).json({ "Message": "Not found" });  
    }
}



const getLandingByClass = async(req, res) => {

    try{
     let landClass =  await landModel.getLandingByClass(req.params.class);
    res.status(200).json(landClass);   
    }
    catch (err) {
    console.log(`Error: ${err.stack}`)
    res.status(404).json({ "Message": "Not found" });  
    }
}



const landControllers = {
    getLanding,
    getLandingByMass,
    getLandingByClass,
    //createLanding, 
    //updateLanding,
    //deleteLanding
}

module.exports = landControllers;