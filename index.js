const express = require('express')

const server = express()

const PORT = 8000


const mockData = {
    userName: "joe",
    email: "joe010@gmail.com"
}

server.get("/", (req, res) => {
    // const body = req.body
    // const url = req.baseUrl
    res.status(200).json(mockData)
})


server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}` )
})