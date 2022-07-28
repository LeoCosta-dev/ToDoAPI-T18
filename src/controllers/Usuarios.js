import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesUsuarios from "../services/ValidacoesUsuarios.js";
import DatabaseUsuariosMetodos from "../DAO/DatabaseUsuariosMetodos.js";
import Database from "../infra/Database.js";

DatabaseUsuariosMetodos.createTable()

class Usuarios{
    static rotas(app){
        app.get("/usuarios", async (req,res)=>{
            const response = await DatabaseUsuariosMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:id", async (req, res)=>{
            try {
                const usuario = await DatabaseUsuariosMetodos.listarUsuarioPorId(req.params.id)
                if(!usuario){
                    throw new Error("Usuario não encontrado para esse Id")
                }
                res.status(200).json(usuario)
            } catch (error) {
                res.status(404).send(error.message)
            }
        })

        app.post("/usuarios", async (req, res)=>{

            const isValid = ValidacoesUsuarios.isValid(...Object.values(req.body))

            try {              
                if(isValid){
                    const usuario = new UsuarioModel(...Object.values(req.body))
                    const response = await DatabaseUsuariosMetodos.inserirUsuario(usuario)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/usuarios/:id", (req, res)=> {
            const isValid = ValidacoesService.isValid(...Object.values(req.body))

            if(isValid){
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseUsuariosMetodos.atualizarPorId(req.params.id, usuario)
                res.status(201).json(response)
            } else {
                res.status(400).json({Erro:"Erro"})
            }
        })
        

        app.patch("/usuarios/:id", (req, res)=>{
            const response = DatabaseUsuariosMetodos.atualizaPropriedadesPorId(req.params.id, req.body)
            res.status(200).json(response)
        })

        app.delete("/usuarios/:index", (req, res) => {
            if(ValidacoesService.validaIndex(req.params.index, Database.Usuarios)){
                const usuario = DatabaseUsuariosMetodos.deletaUsuarioPorId(req.params.index)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Usuário não encontrado"})
            }
        })
    }
}


export default Usuarios;