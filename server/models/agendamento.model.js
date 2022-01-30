const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome_procedimento: String,
    valor_procedimento: Number,
    data_agendamento: {
        type: Date,
        default: Date.now()
    },
    horario_agendamento: String,
    //ref cliente
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "clientes",
        required: true
    }
},
{
    timestamps: true
});

const agendamentos = mongoose.model('Agendamentos', DataSchema)
module.exports = agendamentos