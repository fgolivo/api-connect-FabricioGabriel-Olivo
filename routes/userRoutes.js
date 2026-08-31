const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Mapeamento da rota parametrizada utilizando os dois pontos (:)
router.get('/', userController.getAllUsers);

// Mapeamento semântico do método POST para a criação
router.post('/', userController.createUser);

// Mapeamento semântico do método PUT para atualização total do recurso
router.put('/:id', userController.updateUser);

// Mapeamento semântico do método DELETE para remoção do recurso
router.delete('/:id', userController.deleteUser);

module.exports = router;