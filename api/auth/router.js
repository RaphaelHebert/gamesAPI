const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const { getUserByUsername, addUser } = require("../users/models")


router.post('/signIn', async (req, res, next) => {
    const { username, password } = req.body
    try{
        const user = await getUserByUsername(username)
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user)
            res.status(200).json({
                message: `${user.username} just logged in.`,
                token,
            })
        } else {
            res.status(401).json({ message: "Bad credentials"})
        }
    } catch(err) {
        next(err)
    }
})

router.post('/signUp', async (req, res, next) => {
    const { username, password, email } = req.body

    try{
        const hash = bcrypt.hashSync(password, 14);
        const user = {
            username: username,
            email: email,
            password: hash
        }
        const newUser = await addUser(user)
        if(newUser){
            res.status(200).json({
                message: `${newUser} just signed up!`,
            })
        } else {
            res.status(401).json({ message: `Oops.. something went wrong. Maybe ${username} or ${email} already used`})
        }
    } catch(err) {
        next(err)
    }
})

const generateToken = user => {
    const payload = {
        username: user.username,
        userId: user['user-id'],
    };
    const secret = "a secret phrase";
    const options = {
        expiresIn: '12h',
    }
    return jwt.sign(payload, secret, options)
}

module.exports = (router)