const express = require('express');

const UserController = require('../controller/users.js')

const router = express.Router();

// CREATE METHOD POST
router.post("/", UserController.createNewUsers);

// READ METHOD GET
router.get("/", UserController.getAllUsers);

// UPDATE METHOD PATCH
router.patch('/:idUser', UserController.updateUser)

//  DELETE METHOD DELETE
router.delete('/:idUser', UserController.deleteUser)
module.exports = router; 