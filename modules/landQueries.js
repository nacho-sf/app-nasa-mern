const landModel = require('../models/landModel')


const getLandsByMinMass = async (minimum_mass) => {
    try {
        const agg = [
            {
                '$project':
                {
                    '_id': 0,
                    'name': 1,
                    'mass': 1,
                    'geolocation':1
                }
            },
            {
                '$match': { '$expr': { '$gte': [{ '$toDecimal': '$mass' }, minimum_mass] } }
            }
        ];
        const result = landModel.aggregate(agg);
        return result;
    } catch (error) {
        console.log(err);
        throw err;
    }
}



const getLandsFromDate = async (from) => {
    let dateFrom = from? new Date(`${from}T00:00:00.000Z`):new Date(0000);
   
    try {
        const agg = [
            {
                '$addFields':
                {
                    'date': { '$convert': { 'input': '$year', 'to': 'date' } }
                }
            },
            {
                '$project':
                {
                    '_id': 0,
                    'name': 1,
                    'mass': 1,
                    'date': 1,
                    'geolocation':1,
                }
            },
            {
                '$match': { 'date': { '$gte': dateFrom } }
            },
            {
                '$sort': { 'year': -1 }
            }
        ]
        const result = await landModel.aggregate(agg);
        return result;
    }

    catch (err) {
        console.log(err)
    }
}



const getLandsToDate = async (to) => {
    let dateTo = to ? new Date(`${to}T00:00:00.000Z`) : new Date();
   
    try {
        const agg = [
            {
                '$addFields':
                {
                    'date': { '$convert': { 'input': '$year', 'to': 'date' } }
                }
            },
            {
                '$project':
                {
                    '_id': 0,
                    'name': 1,
                    'mass': 1,
                    'date': 1,
                    'geolocation':1,
                }
            },
            {
                '$match': { 'date': { '$lte': dateTo } }
            },
            {
                '$sort': { 'year': -1 }
            }
        ]
        const result = await landModel.aggregate(agg);
        return result;
    }

    catch (err) {
        console.log(err)
    }
}




const getLandsBetweenDate = async (from, to) => {
    let dateFrom = from? new Date(`${from}T00:00:00.000Z`):new Date(0000);
    let dateTo = to ? new Date(`${to}T00:00:00.000Z`) : new Date();
    if (dateFrom > dateTo) {
        throw error
    } 
   
    try {
        const agg = [
            {
                '$addFields':
                {
                    'date': { '$convert': { 'input': '$year', 'to': 'date' } }
                }
            },
            {
                '$project':
                {
                    '_id': 0,
                    'name': 1,
                    'mass': 1,
                    'date': 1,
                    'geolocation':1,
                }
            },
            {
                '$match': { 'date': { '$gte': dateFrom, '$lte': dateTo } }
            },
            {
                '$sort': { 'year': -1 }
            }
        ]
        const result = await landModel.aggregate(agg);
        return result;
    }

    catch (err) {
        console.log(err)
    }
}



const getAllLands = async () => {
    try {
        const agg = [
            {
                '$project':
                {
                    '_id': 0,
                    'id': 1,
                    'name': 1,
                    'mass': 1,
                    'recclass': 1,
                    'geolocation':1
                }
            },
        ];
        const result = landModel.aggregate(agg);
        return result;
    } catch (error) {
        console.log(err);
        throw err;
    }
}




const landModels = {
    getLandsByMinMass,
    getLandsFromDate,
    getLandsToDate,
    getLandsBetweenDate,
    getAllLands    
}

module.exports = landModels;