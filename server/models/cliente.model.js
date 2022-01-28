const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome_cliente: String,
    telefone_cliente: String
},
{
    timestamps: true
});

const clientes = mongoose.model('Clientes', DataSchema)
module.exports = clientes

