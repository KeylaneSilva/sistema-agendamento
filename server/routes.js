const express = require('express')
const routes = express.Router()

const Usuarios = require('../server/controllers/usuarios.controller')
const Clientes = require('../server/controllers/clientes.contrioller')
const Agendamentos = require('../server/controllers/agendamentos.controller')
const Despesas = require('../server/controllers/despesas.controller')

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

// Agendamentos

routes.get('/api/agendamentos', Agendamentos.index)
routes.post('/api/agendamentos', Agendamentos.create)
routes.get('/api/agendamentos/details/:_id', Agendamentos.details)
routes.delete('/api/agendamentos/delete/:_id', Agendamentos.delete)
routes.put('/api/agendamentos/update', Agendamentos.update)

// Despesas

routes.get('/api/despesas', Despesas.index)
routes.post('/api/despesas', Despesas.create)
routes.get('/api/despesas/details/:_id', Despesas.details)
routes.delete('/api/despesas/delete/:_id', Despesas.delete)
routes.put('/api/despesas/update', Despesas.update)

module.exports = routes