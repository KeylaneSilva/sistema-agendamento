const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome_despesa: String,
    valor_despesa: Number,
    tipo_despesa: {type: Number, default: 1},
    data_despesa: {type: Date, default: Date.now()}
},
{
    timestamps: true
})

const despesas = mongoose.model('Despesas', DataSchema)
module.exports = despesas