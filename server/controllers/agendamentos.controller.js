const Agendamentos = require('../models/agendamento.model')
const Clientes = require('../models/cliente.model')

module.exports = {
    
    async index(req, res){
        const agendamento = await Agendamentos.find().populate({
            path: 'cliente',
            model: Clientes
        })
        return res.json(agendamento)
    },
    async create(req, res){
        const agendamento = await Agendamentos.create(req.body)
        return res.json(agendamento)    
    },
    async details(req, res){
        const { _id } = req.params
        const agendamento = await Agendamentos.findById({_id}).populate({
            path: 'cliente',
            model: Clientes
        })
        return res.json(agendamento)
    },
    async delete(req, res){
        const { _id } = req.params
        const agendamento = await Agendamentos.findByIdAndDelete({_id})
        return res.json(agendamento)
    },
    async update(req, res){
        try{
            const { _id, nome_procedimento, valor_procedimento, data_agendamento, horario_agendamento, cliente } = req.body

        let data = {_id, nome_procedimento, valor_procedimento, data_agendamento, horario_agendamento, cliente}

        const agendamento = await Agendamentos.findByIdAndUpdate(_id, data, {new:true})

        return res.json(agendamento)
        }catch(err){
            console.log(err)

        }
        
    }
}