const express = require('express');
const rotas = express.Router();
const candidatoController = require('../controller/candidatoController')

rotas.get('/', candidatoController.listar)
rotas.post('/', candidatoController.inserir)
rotas.get('/:id', candidatoController.buscarPorId)
rotas.put('/:id', candidatoController.atualizar)
rotas.delete('/:id', candidatoController.deletar)

module.exports = rotas