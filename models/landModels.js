const landSchema = require('../schemas/landSchema')


const getLandsByMinMass = async (minimum_mass) => {
    try {
        const landsByMinMass = await landSchema.find({mass: {$gt:minimum_mass}});
        console.log(typeof minimum_mass);
        console.log(minimum_mass);
        console.log(landsByMinMass);
        return landsByMinMass; 
    }
    catch(err){
        console.error(err);
    }
};


const getLandsFromDate = async (from) => {
    try {
        const landsFrom = await landSchema.find({year:{$gt:from}});
        return landsFrom;
    }
    catch(err){
        console.error(err);
    }
};


const getLandsToDate = async (to) => {
    try {
        const landsTo = await landSchema.find({year:{$lt:to}});
        return landsTo;
    }
    catch(err){
        console.error(err);
    }
};


const getLandsBetweenDate = async (from, to) => {
    try {
        const landsBetween = await landSchema.find({year:{$gt:from, $lt:to}});
        return landsBetween;
    }
    catch(err){
        console.error(err);
    }
};


const getAllLandings = async () => {
    try{
        const allLandings = await landSchema.find({},"-_id");
        console.log(allLandings);
        return allLandings;
    }
    catch(err){
        console.error(err);
    }
};


const landModels = {
    getLandsByMinMass,
    getLandsFromDate,
    getLandsToDate,
    getLandsBetweenDate,
    getAllLandings
}

module.exports = landModels;