const express = require('express')
const { isLoggedIn } = require("../middlewares")


const router = express.Router()

const { topTen, userScores, newScore} = require('./models')


router.get('/:game/:id', isLoggedIn, async (req, res, next) => {
    try {
        const { id, game } = req.params
        const scores = await userScores(id, game)
        if( scores.length > 0 ){
            res.status(200).json(scores)
        } else {
            res.status(404).json({ message: `No scores available in the ${game} user-id ${id}`})
        }
    } catch(err) {
        next(err)
    }
})

router.get('/:name/topTen', async (req, res,next) => {
    try{
        const { name } = req.params
        const top = await topTen(name)
        if(top.length > 0){
            res.status(200).json(top)
        } else {
            res.status(404).json({ message: `No score available for this ${name}`})
        }
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {score, userId, gameId} = req.body
        await newScore(score, userId, gameId)
        res.status(200).json(`hello from scores POST`)
    } catch(err) {
        next(err)
    }
})

module.exports = (router)