const db = require ('../models')
const validate = require('../function/validation.js')

//create main model
const Match = db.match

// create match
const addMatch = async (req, res) => {
    
    try {
        let info = {
            match_date: req.body.match_date,
            match_time: req.body.match_time,
            match_home_team: req.body.match_home_team,
            match_away_team: req.body.match_away_team,
        }
    
        const result = await Result.create(info)
        res.status(200).send(result)
        console.log(result)
        
    } catch (error) {
        console.log(error);
    }

}

// get all match
const getAllMatch = async (req, res) => {

    let match = await Match.findAll({})
    res.status(200).send(match)

}

// get single match
const getOneMatch = async (req, res) => {

    let id = req.params.id
    let match = await Match.findOne({ where: { id: id }})
    res.status(200).send(match)

}

// update match
const updateMatch = async (req, res) => {

    let id = req.params.id

    const match = await Match.update(req.body, { where: { id: id }})

    res.status(200).send(match)

}

// delete match by id
const deleteMatch = async (req, res) => {

    let id = req.params.id
    
    await Match.destroy({ where: { id: id }} )

    res.status(200).send('Match was deleted !')

}

module.exports = {
    addMatch,
    getAllMatch,
    getOneMatch,
    updateMatch,
    deleteMatch,
}