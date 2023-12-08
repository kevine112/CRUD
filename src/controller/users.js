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

const createNewUsers = async(req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUsers(body)
        res.json({
            message: 'CREATE new users succes',
            data : req.body
        });
    } catch (error) {
        res.status(500).json({
            message : 'server eror',
            serverMessage : error,
        })
        }
        
    }

const updateUser = async(req,res) => {
    const {idUser} = req.params
    const {body} = req
    try {
        await UsersModel.updateUser(body,idUser)
        res.json ({
            message : "update user succes",
            data : {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message : 'server eror',
            serverMessage : error,
        })
        }
    }


const deleteUser = async(req,res) => {
    const {idUser} = req.params
    try {
        await UsersModel.deleteUser(idUser)
        res.json ({
            message : "DELETE user succes",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message : 'server eror',
            serverMessage : error,
        })
        }
    }

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser,
}