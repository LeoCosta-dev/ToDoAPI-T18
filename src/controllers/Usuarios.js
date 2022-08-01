import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesUsuarios from "../services/ValidacoesUsuarios.js";
import DatabaseUsuariosMetodos from "../DAO/DatabaseUsuariosMetodos.js";
import Database from "../infra/Database.js";

DatabaseUsuariosMetodos.createTableUsuarios()

class Usuarios{
    static rotas(app){
        app.get("/usuarios", async (req,res)=>{
            const response = await DatabaseUsuariosMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/heroku", async (req,res)=>{
            const response = await DatabaseUsuariosMetodos.listarTodosUsuarios()
            res.status(200).json(response)
            console.log("estou rodando na heroku")
        })

        app.get("/usuarios/:id", async (req, res)=>{
            try {
                const usuario = await DatabaseUsuariosMetodos.listarUsuarioPorId(req.params.id)
                if(!usuario){
                    throw new Error("Usuario não encontrado para esse Id")
                }
                res.status(200).json(usuario)
            } catch (error) {
                res.status(404).json(error.message)
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

        app.delete("/usuarios/:id", async (req, res) => {
            try {                
                const usuario = await DatabaseUsuariosMetodos.deletaUsuarioPorId(req.params.id)
                if(!usuario){
                    throw new Error("Usuário não encontrado")
                }
                res.status(200).json(usuario)
            } catch (error) {    
                res.status(404).json({Error: error.message})
            }
                        
        })
    }
}


export default Usuarios;