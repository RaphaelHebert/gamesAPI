require("dotenv").config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()



const userRoutes = require("./api/users/router")
const scoresRoutes = require("./api/scores/router")
const authRouter = require("./api/auth/router")
 
const { PORT } = require('./configs/server')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/users", userRoutes)
server.use("/scores", scoresRoutes)
server.use("/auth/", authRouter)

server.use("*", (req, res) => {
    res.status(404).send("Oops.. 404 Page not found");
})

server.use((err, req, res, next) => {
    res
      .status(500)
      .json({ message: `There was an error performing the required operation: \n ${err.message}` });
  });
  

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}` )
})