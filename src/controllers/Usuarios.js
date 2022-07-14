import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesService from "../services/ValidacoesService.js";

class Usuarios{
    static rotas(app){
        app.get("/usuarios", (req,res)=>{
            const nome = "sds"
            const isValid = ValidacoesService.validaNome(nome)

            if(isValid){
                const usuario = new UsuarioModel(nome, "couve@mineira.com.br", "2199999999")
                res.status(200).json({...usuario, verbo: "get"})
            } else {
                res.status(400).send("Erro")
            }
        })

        app.post("/usuarios", (req, res)=>{
            const nome = "sds"
            const isValid = ValidacoesService.validaNome(nome)

            if(isValid){
                const usuario = new UsuarioModel(nome, "couve@mineira.com.br", "2199999999")
                res.status(201).json({...usuario, verbo: "post"})
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}


export default Usuarios;