const db = require ('../models')
const validate = require('../function/validation.js')

//create main model
const Team = db.team

// create team
const addTeam = async (req, res) => {
    
    try {
        const check = validate(req.body, "team")
        let is_valid = false
        
        try {
            console.log(check.error.details[0].message)
        } catch (err) {
            console.log("Validation Pass")
            is_valid = true
        }

        if(!is_valid) {
            res.statusMessage = "Invalid request"
                return res.status(409).json({
                    "status": 400,
                    "code": "400",
                    "data": null,
                    "message": check.error.details[0].message
                })
        } else {
            const count = await Team.count({
                where: {
                    team_name: req.body.team_name
                }
            })

            if (count != 0) {
                res.statusMessage = "Conflict"
                return res.status(409).json({
                    "status": 409,
                    "code": "409",
                    "data": null,
                    "message": "Team Name already exist"
                })
            } else {
                const result = await Team.create(req.body)
                res.statusMessage = "Success"
                return res.status(201).json({
                    "status": 201,
                    "code": "201",
                    "data": {
                        "id": result.id
                    },
                    "message": "Success"
                })
            }
        }

    } catch (error) {
        console.log(error);
    }

}

// get all team
const getAllTeam = async (req, res) => {

    let team = await Team.findAll({})
    res.status(200).send(team)

}

// get single team
const getOneTeam = async (req, res) => {

    let id = req.params.id
    let team = await Team.findOne({ where: { id: id }})
    res.status(200).send(team)

}

// update team
const updateTeam = async (req, res) => {

    let id = req.params.id

    const team = await Team.update(req.body, { where: { id: id }})

    res.status(200).send(team)

}

// delete team by id
const deleteTeam = async (req, res) => {

    let id = req.params.id
    
    await Team.destroy({ where: { id: id }} )

    res.status(200).send('Team was deleted !')

}

module.exports = {
    addTeam,
    getAllTeam,
    getOneTeam,
    updateTeam,
    deleteTeam,
}