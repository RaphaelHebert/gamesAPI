const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()



const userRoutes = require("./users/userRouter")


const PORT = 8000


const mockData = {
    userName: "joe",
    email: "joe010@gmail.com"
}


server.use("/users", userRoutes)

server.get("/", (req, res) => {
    // const body = req.body
    // const url = req.baseUrl
    res.status(200).json(mockData)
})

server.use(function(req, res) {
    res.status(404).send("404 Page not found");
  });


server.use((err, req, res, next) => {
    console.error(err);

    res
      .status(500)
      .json({ message: 'There was an error performing the required operation' });
  });
  

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}` )
})