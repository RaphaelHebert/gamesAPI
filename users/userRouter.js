const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json(`hello from all the users `)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json(`hello from user ${id}`)
})


router.post('/', (req, res) => {
    res.status(200).json(`hello from user POST`)
})

module.exports = (router)