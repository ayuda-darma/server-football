const db = require ('../models')
const validate = require('../function/validation.js')

//create main model
const Result = db.result

// create result
const addResult = async (req, res) => {
    
    try {
        let info = {
            result_score: req.body.result_score,
            goal_home_team_player: req.body.goal_home_team_player,
            goal_away_team_player: req.body.goal_away_team_player,
            goal_home_team_time: req.body.goal_home_team_time,
            goal_away_team_time: req.body.goal_away_team_time,
        }
    
        const result = await Result.create(info)
        res.status(200).send(result)
        console.log(result)
        
    } catch (error) {
        console.log(error);
    }

   
}

// get all result
const getAllResult = async (req, res) => {

    let result = await Result.findAll({})
    res.status(200).send(result)

}

// get single result
const getOneResult = async (req, res) => {

    let id = req.params.id
    let result = await Result.findOne({ where: { id: id }})
    res.status(200).send(result)

}

// update result
const updateResult = async (req, res) => {

    let id = req.params.id

    const result = await Result.update(req.body, { where: { id: id }})

    res.status(200).send(result)

}

// delete result by id
const deleteResult = async (req, res) => {

    let id = req.params.id
    
    await Result.destroy({ where: { id: id }} )

    res.status(200).send('Result was deleted !')

}

module.exports = {
    addResult,
    getAllResult,
    getOneResult,
    updateResult,
    deleteResult,
}