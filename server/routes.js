const express = require('express')
const routes = express.Router()

const Usuarios = require('../server/controllers/usuarios.controller')
const Clientes = require('../server/controllers/clientes.contrioller')

// Usuários

routes.get('/api/usuarios', Usuarios.index)
routes.post('/api/usuarios', Usuarios.create)
routes.get('/api/usuarios/details/:_id', Usuarios.details)
routes.delete('/api/usuarios/delete/:_id', Usuarios.delete)
routes.put('/api/usuarios/update', Usuarios.update)


// Clientes

routes.get('/api/clientes', Clientes.index)
routes.post('/api/clientes', Clientes.create)
routes.get('/api/clientes/details/:_id', Clientes.details)
routes.delete('/api/clientes/delete/:_id', Clientes.delete)
routes.put('/api/clientes/update', Clientes.update)


module.exports = routes