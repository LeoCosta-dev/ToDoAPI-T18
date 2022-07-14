import express from "express";
import * as dotenv from "dotenv"
import Usuarios from "./src/controllers/Usuarios.js"

dotenv.config()

const port =  process.env.PORT || 3000;

const app = express()

app.listen(port, ()=>{
    console.log(`Servidor online no endereço http://localhost:${port}`)
})


Usuarios.rotas(app)