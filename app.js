/**
 * importando o express
 */
import express from "express";

/**
 * Definindo uma variável para a porta que deixará nossa aplicação disponível
 * O comando 'process.env' serve para acessar variável de ambiente, util quando chegar o momento de subir a aplicação
 */
const port =  process.env.PORT || 3000;

/**
 * Instancia do express sendo atribuída em uma variável de nome app para melhor utilização
 */
const app = express()

/**
 * Chamada do método listen presente no express
 * Esse método é responsável por subir o servidor
 * Como parametro ele receber a porta que será disponibilizada em nossa máquina e uma callback
 */
app.listen(port, ()=>{
    /**
     * Log informativo, passando o endereço para acesso do servidor
     */
    console.log(`Servidor online no endereço http://localhost:${port}`)
})