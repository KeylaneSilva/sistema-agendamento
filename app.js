const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./server/routes')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8798 

//conexão com o mongodb
mongoose.connect('mongodb://localhost:27017/sistema-agendamento', {
    useUnifiedTopology: true,
    useNewUrlParser: true
},(err) => {
    if(err){
        console.log('Houve um erro: '+err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes)


app.listen(PORT, () => {
    console.log("Servidor rodando na porta" + PORT)
})