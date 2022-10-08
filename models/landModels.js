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
    getAllLandings
}

module.exports = landModels