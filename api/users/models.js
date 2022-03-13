const db = require('../../data/dbConfig')

const getUsers = () => {
    return db('users')
}

const getUserByID = id => {
    return db('users').where({'user-id': id}).first()
}

const getUserByUsername = username => {
    return db('users').where({'username': username}).first()
}

const addUser = newUser => {
    return db('users').insert(newUser)
}

module.exports = {
    getUsers,
    getUserByID,
    getUserByUsername,
    addUser
}

