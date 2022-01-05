const express = require('express')

// import controllers review, Team
const teamController = require('../controllers/teamControllers')
const playerController = require('../controllers/playerControllers')
const matchController = require('../controllers/matchControllers')
const resultController = require('../controllers/resultControllers')


const router = express.Router();


// team
router.post('/addTeam', teamController.addTeam)

router.get('/allTeam', teamController.getAllTeam)

router.get('/team/:id', teamController.getOneTeam)

router.put('/team/:id', teamController.updateTeam)

router.delete('/team/:id', teamController.deleteTeam)


// player
router.post('/addPlayer', playerController.addPlayer)

router.get('/allPlayer', playerController.getAllPlayer)

router.get('/player/:id', playerController.getOnePlayer)

router.put('/player/:id', playerController.updatePlayer)

router.delete('/player/:id', playerController.deletePlayer)


// match
router.post('/addMatch', matchController.addMatch)

router.get('/allMatch', matchController.getAllMatch)

router.get('/match/:id', matchController.getOneMatch)

router.put('/match/:id', matchController.updateMatch)

router.delete('/match/:id', matchController.deleteMatch)


// result
router.post('/addResult', resultController.addResult)

router.get('/allResult', resultController.getAllResult)

router.get('/result/:id', resultController.getOneResult)

router.put('/result/:id', resultController.updateResult)

router.delete('/result/:id', resultController.deleteResult)



module.exports = router