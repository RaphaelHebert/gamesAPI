const express = require('express')

const router = express.Router()

const { getUsers, getUserByID, addUser } = require('./models')


router.get('/', async (req, res, next) => {
    try {
        const users = await getUsers()
        if(users.length > 0){
            res.status(200).json(users)
        } else {
            res.status(404).json({ message: "404: No user in the database"})
        } 
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res,next) => {
    try {
        const { id } = req.params
        const user = await getUserByID(id)
        if(user){
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: `404 no user with id ${id}`})
        }
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        await addUser(req.body)
        res.status(200).json(`${req.body.username} has been added to the db`)
    } catch(err) {
        next(err)
    }
})

module.exports = (router)