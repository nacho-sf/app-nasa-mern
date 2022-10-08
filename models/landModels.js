const landSchema = require('../schemas/landSchema')

const getAllLandings = async () => {
    try{
        const getLandings = await landSchema.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}


module.exports = {
    getAllLandings
    
}