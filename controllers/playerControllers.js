const db = require ('../models')
const validate = require('../function/validation.js')

//create main model
const Player = db.player

const addPlayer = async (req, res) => {
    
    try {
        const check = validate(req.body, "player")
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
            const count = await Player.count({
                where: {
                    player_name: req.body.player_name
                }
            })

            if (count != 0) {
                res.statusMessage = "Conflict"
                return res.status(409).json({
                    "status": 409,
                    "code": "409",
                    "data": null,
                    "message": "Player Name already exist"
                })
            } else {
                const result = await Player.create(req.body)
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

// get all player
const getAllPlayer = async (req, res) => {

    let player = await Player.findAll({})
    res.status(200).send(player)

}

// get single player
const getOnePlayer = async (req, res) => {

    let id = req.params.id
    let player = await Player.findOne({ where: { id: id }})
    res.status(200).send(player)

}

// update player
const updatePlayer = async (req, res) => {

    let id = req.params.id

    const player = await Player.update(req.body, { where: { id: id }})

    res.status(200).send(player)

}

// delete player by id
const deletePlayer = async (req, res) => {

    let id = req.params.id
    
    await Player.destroy({ where: { id: id }} )

    res.status(200).send('Player was deleted !')

}

module.exports = {
    addPlayer,
    getAllPlayer,
    getOnePlayer,
    updatePlayer,
    deletePlayer,
}