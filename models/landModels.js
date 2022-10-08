const landSchema = require('../schemas/landSchema')

const getAllLandings = async () => {
    try{
        const allLandings = await landSchema.find({},"-_id");
        console.log(allLandings);
        return allLandings;
    }
    catch(err){
        console.error(err);
    }
}


const landModels = {
    getAllLandings
    
}

module.exports = landModels