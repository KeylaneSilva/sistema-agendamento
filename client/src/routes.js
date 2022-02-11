import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// IMPORTS ADMIN

import Dasboard from './pages/admin/dashboard';


import Agendamento from './pages/admin/agendamentos'
import AgendamentoCadastrar from './pages/admin/agendamentos/agendamentos.cadastrar'
import AgendamentoEditar from './pages/admin/agendamentos/agendamentos.editar'

import Despesas from './pages/admin/despesas'
import DespesasCadastrar from './pages/admin/despesas/despesas.cadastrar'
import DespesasEditar from './pages/admin/despesas/despesas.editar'

import Usuarios from './pages/admin/usuarios'
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar'
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar'

// IMPORT CLIENT

import Home from './pages/client/home'


export default function Routes1() {
  return (
    <Routes>
        {/* ROTA ADMIN */}
        <Route element={ <Agendamento/>} path="admin/agendamentos" exact />
        <Route element={ <AgendamentoCadastrar/>} path="admin/agendamentos/cadastrar" exact />
        <Route element={ <AgendamentoEditar/>} path="admin/agendamentos/editar/:idAgendamento" exact />

        <Route element={<Despesas/>} path="admin/despesas" exact />
        <Route element={<DespesasCadastrar/>} path="admin/despesas/cadastrar" exact />
        <Route element={<DespesasEditar/>} path="admin/despesas/editar/:idDespesa" exact />

        <Route element={<Usuarios/>} path="admin/usuarios" exact />
        <Route element={<UsuariosCadastrar/>} path="admin/usuarios/cadastrar" exact />
        <Route element={<UsuariosEditar/>} path="admin/usuarios/eidtar/:idUsuario" exact />

        <Route element={<Dasboard/>} path="admin/" exact />


        {/* ROTA CLIENTE */}
        <Route element={<Home/>} path="/" exact/>
    </Routes>
  )
}







