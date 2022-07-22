import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";
import { Database } from "../infra/Database.js";

class Usuarios{
    static rotas(app){
        app.get("/usuarios", (req,res)=>{
            const response = DatabaseMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:id", (req, res)=>{
            if(ValidacoesService.validaIndex(req.params.id, Database.Usuarios)){
                const usuario = DatabaseMetodos.listarUsuarioPorIndex(req.params.id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Usuário não encontrado"})
            }
        })

        app.post("/usuarios", (req, res)=>{
            const isValid = ValidacoesService.isValid(...Object.values(req.body))

            if(isValid){
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirUsuario(usuario)
                res.status(201).json(response)
            } else {
                res.status(400).json({Erro:"Erro"})
            }
        })

        app.put("/usuarios/:id", (req, res)=> {
            const isValid = ValidacoesService.isValid(...Object.values(req.body))

            if(isValid){
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.atualizarPorId(req.params.id, usuario)
                res.status(201).json(response)
            } else {
                res.status(400).json({Erro:"Erro"})
            }
        })
        

        app.patch("/usuarios/:id", (req, res)=>{
            const response = DatabaseMetodos.atualizaPropriedadesPorId(req.params.id, req.body)
            res.status(200).json(response)
        })

        app.delete("/usuarios/:index", (req, res) => {
            if(ValidacoesService.validaIndex(req.params.index, Database.Usuarios)){
                const usuario = DatabaseMetodos.deletaUsuarioPorId(req.params.index)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Usuário não encontrado"})
            }
        })
    }
}


export default Usuarios;