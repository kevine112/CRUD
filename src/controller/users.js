const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers()
        res.json({
            message: 'GET all users succes',
            data : data
        });
        
    } catch (error) {
        res.status(500).json({
            message : 'server eror',
            serverMessage : error,
        })
    }
};

const createNewUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'CREATE new users succes',
        data : req.body
    });
};

const updateUser = (req,res) => {
    const {idUser} = req.params
    console.log('id user:', idUser)
    res.json ({
        message : "update user succes",
        data : req.body
    })
}

const deleteUser = (req,res) => {
    const {idUser} = req.params
    res.json ({
        message : "DELETE user succes",
        data : {
            id : idUser,
            name : 'kevin',
            umur : 22,
            alamat : "Batam"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}