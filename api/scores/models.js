const db = require('../../data/dbConfig')


const userScores = (id, game) => {
    return db('scores as s')
        .join('games as g', 's.game-id', 'g.game-id')
        .select('s.score')
        .where({'g.game_name': game, 's.user-id': id})
        .orderBy('score')
}

const topTen = (game) => {
    return db('scores as s')
        .join('games as g', 's.game-id', 'g.game-id')
        .select('s.score')
        .where({'g.game_name': game})
        .orderBy('score')
        .limit(10)
}

const newScore = (score, userId, gameId) => {
    return db("scores").insert({score: score, "user-id": userId, "game-id": gameId })
}

module.exports = {
    userScores,
    topTen,
    newScore
}