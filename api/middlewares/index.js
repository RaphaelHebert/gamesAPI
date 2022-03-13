const jwt = require("jsonwebtoken")

const { jwtsecret } = require("../../configs/secrets")

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({ message: "unauthorized: user must be logged in"})
    }
    try{
        token = jwt.verify(token, jwtsecret)
        req.body.userId = token.payload.userId
        req.body.username = token.payload.username
        next()
    } catch(err) {
        res.status(401).json({ message: "must be logged in"})
    } 
}

module.exports = {
    isLoggedIn
}