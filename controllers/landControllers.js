require('mongoose');
const landQuery = require('../modules/landQueries');
const LandModel = require('../models/landModel');


const getLanding = async (req, res) => {

    const mass = parseInt(req.query.minimum_mass)
    const from = req.query.from;
    const to = req.query.to;

    if (mass) {
        try {
            const landByMinMass = await landQuery.getLandsByMinMass(mass);
            res.status(200).json(landByMinMass);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }
    //GET http://localhost:3000/api/astronomy/landings?minimum_mass={mass} (Ej: minimum_mass=20000)


    else if (from && to) {
        try {
            const landsFromTo = await landQuery.getLandsBetweenDate(from, to);
            res.status(200).json(landsFromTo);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }
    //GET http://localhost:3000/api/astronomy/landings?from={year}&to={year} (Ej: from=1920&to=2005)


    else if (from) {
        try {
            const landsFrom = await landQuery.getLandsFromDate(from);
            res.status(200).json(landsFrom);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }
    //GET http://localhost:3000/api/astronomy/landings?from={year} (Ej: from=2005)


    else if (to) {
        try {
            const landsTo = await landQuery.getLandsToDate(to);
            res.status(200).json(landsTo);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }
    //GET http://localhost:3000/api/astronomy/landings?to={year} (Ej: to=1920)


    else {
        try {
            const landsAll = await landQuery.getAllLands();
            res.status(200).json(landsAll);
        }
        catch (err) {
            console.log(`Error: ${err.stack}`);
            res.status(404).json({ "Message": "Not found" });
        }
    }
    //GET http://localhost:3000/api/astronomy/landings
}



const getLandingByMass = async(req, res) => {
    try{
        const mass = parseInt(req.params.mass);
        const filter = { mass: mass };
        const landMass =  await LandModel.find(filter).exec();
        if (landMass == 0) {
            res.status(200).json({"Message": "No landing provided"});  
        } else {
            res.status(200).json(landMass)
        } 
    } catch (err) {
        console.log(`Error: ${err.stack}`)
        res.status(404).json({ "Message": "Not found" });  
    }
}
//GET http://localhost:3000/api/astronomy/landings/mass/{mass}




const getLandingByClass = async (req, res) => {
    try {
        const recclass = req.params.class
        const filter = { recclass: recclass }
        const landClass = await LandModel.find(filter).exec();
        if (landClass == 0) {
            res.status(200).json({ "Message": "No landings for the class provided" })
        } else {
            res.status(200).json(landClass)
        }
    } catch (err) {
        console.log(`Error: ${err.stack}`)
        res.status(404).json({ "Message": "Bad Request" })
    }
}
//GET http://localhost:3000/api/astronomy/landings/class/{recclass}





const createLanding = async (req, res) => {
    try {
        const newLanding = req.body;
        const createLanding = await LandModel.create(newLanding);
        res.status(201).json(createLanding)
    } catch (error) {
        res.status(404).json({"Msg":"Error"});
    }
}
/*
POST http://localhost:3000/api/astronomy/landings/create

Body:
{
  "name":"Prueba2",
  "id": "3",
  "nametype":"Valid",
  "recclass":"L5",
  "mass":21,
  "fall":"Fell",
  "year":"1880-01-01T00:00:00.000",
  "reclat":50.775000,
  "reclong":6.083330,
  "geolocation": {
  "latitude":53.775,
  "longitude":7.08333
  }
}
*/



const updateLanding = async (req, res) => {
    try {
        const { id } = req.body;
        const filter = { id: id };
        const landingUpdate = await LandModel.findOneAndUpdate(filter, req.body);
        res.status(201).json({ "Message": `Landing ${filter.id} updated` })
    } catch (error) {
        console.log(error);
        res.status(400).json({ "Message": "Bad Request" });
    }
}
/*
PUT http://localhost:3000/api/astronomy/landings/update

Body:
{
  "name":"Prueba1",
  "id": "1",
  "nametype":"Valid",
  "recclass":"L5",
  "mass":21,
  "fall":"Fell",
  "year":"1880-01-01T00:00:00.000",
  "reclat":50.775000,
  "reclong":6.083330,
  "geolocation": {
  "latitude":53.775,
  "longitude":7.08333
  }
}
*/



const deleteLanding = async (req, res) => {
    try {
        const { id } = req.body;
        const filter = { id: id };
        console.log(filter);
        const landingDelete = await LandModel.deleteOne(filter);
        console.log(landingDelete);
        res.status(200).json({ "Message": `${landingDelete} has been deleted` })
    } catch (err) {
        console.log(err);
        res.status(400).json({ "Message": "Bad Request" });
    }
}
/*
DELETE http://localhost:3000/api/astronomy/landings/delete

Body:
{
  "id":2
}

o

{
    "id":"2"
}
*/



const landControllers = {
    getLanding,
    getLandingByMass,
    getLandingByClass,
    createLanding, 
    updateLanding,
    deleteLanding
}

module.exports = landControllers;