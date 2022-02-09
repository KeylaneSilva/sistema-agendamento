const Despesas = require('../models/despesas.model');

module.exports = {

    async index(req, res){
        const despesa = await Despesas.find();
        return res.json(despesa)
    },
    async create(req, res){
        const despesa = await Despesas.create(req.body)
        return res.json(despesa)
    },
    async details(req, res){
        const { _id } = req.params;
        const despesa = await Despesas.findOne({_id})
        return res.json(despesa)
    },
    async delete(req, res){
        const { _id } = req.params;
        const despesa = await Despesas.findByIdAndDelete({ _id })
        return res.json(despesa) 
    },
    async update(req, res){
        const { _id, nome_despesa, valor_despesa, tipo_despesa, data_despesa} = req.body

        const data = { _id, nome_despesa, valor_despesa, tipo_despesa, data_despesa }
        
        const despesa = await Despesas.findByIdAndUpdate({ _id}, data, {new:true})
        return res.json(despesa)
    }
}