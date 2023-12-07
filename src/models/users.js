const dbPool = require('../config/database')

const getAllUsers = () => {
    const SQLQuerry = 'SELECT * FROM users'
    return dbPool.execute(SQLQuerry)
}

module.exports = {
    getAllUsers,
}