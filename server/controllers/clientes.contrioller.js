const Clientes = require('../models/cliente.model')

module.exports = {
    async index(req, res){
        const cliente = await Clientes.find()
        return res.json(cliente)
    },
    async create(req, res){
        const { nome_cliente, telefone_cliente } = req.body
        let data = {}
        let cliente = await Clientes.findOne({nome_cliente})
        
        if(!cliente){
            data = {nome_cliente, telefone_cliente}
            const cliente = await Clientes.create(data)
            return res.status(200).json(cliente)
        }else{
            return res.status(500).json(cliente)

        }
    },
    async details(req, res){
        const { _id } = req.params
        const cliente = await Clientes.findById({_id})
        return res.json(cliente)
    },
    async delete(req, res){
        const { _id } = req.params
        const cliente = await Clientes.findByIdAndDelete({_id})
        return res.json(cliente)
    },
    async update(req, res){
        const { _id, nome_cliente, telefone_cliente } = req.body
        let data = { _id, nome_cliente, telefone_cliente }

        const cliente = await Clientes.findByIdAndUpdate(_id, data, {new:true})
        return res.json(cliente)
    }
}