const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuerry = 'SELECT * FROM users';
    return dbPool.execute(SQLQuerry);
};

const createNewUsers = (body) => {
    const SQLQuerry = `INSERT INTO users (name, umur, alamat) VALUES("${body.name}", "${body.umur}", "${body.alamat}")`;
    return dbPool.execute(SQLQuerry);
};

const updateUser = (body, idUser) => {
    const SQLQuerry = `UPDATE users SET name="${body.name}", umur="${body.umur}", alamat="${body.alamat}" WHERE id=${idUser}`;
    return dbPool.execute(SQLQuerry);
};

const deleteUser = (idUser) => {
    const SQLQuerry = `DELETE FROM users WHERE id=${idUser}`
    return dbPool.execute(SQLQuerry);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
};
