import UsuarioModel from "../models/UsuarioModel.js";
/**
 * Classe que irá gerenciar toda a rota de Usuários da nossa aplicação
 */
class Usuarios{
    /**
     * 
     * Método estático de gerenciamento das rotas
     * Ele é estático para que sejá possível o seu uso sem precisar instanciar a classe com 'new'
     * Seu parametro app irá receber o express presente no arquivo app.js 
     */
    static rotas(app){
        /**
         * Método get do express, esse método gerencia as requisições do tipo get que chegam ao nosso servidor
         * Para gerenciar o método recebe dois parametros, o primeiro é uma string com a rota
         * O segundo é uma callback que recebe como parametros a requisição e a resposta que vamos enviar para a requisição
         */
        app.get("/usuarios", (req,res)=>{
            /**
             * Método send informando o que vamos enviar para a outra ponta do servidor (Aquela que fez a requisição para a gente.)
             */
            const usuario = new UsuarioModel("José das Couves", "couve@mineira.com.br", "2199999999")
            res.send(usuario)
        })
    }
}

/**
 * Exportação da classe Usuários para que a mesma seja acessada em outros arquivos.
 */
export default Usuarios;