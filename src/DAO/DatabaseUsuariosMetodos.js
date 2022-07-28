import DAO from "./DAO.js"

class DatabaseUsuariosMetodos extends DAO{

    static async createTableUsuarios(){
        const query = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `
        const response = await this.createTable(query)
        return response
    }

    static async inserirUsuario(usuario){
        const query = `INSERT INTO usuarios (nome, email, telefone) VALUES (?,?,?)`
        const response = await this.inserir(usuario, query)
        return response
    }

    static async listarTodosUsuarios(){
        const query = ` SELECT * FROM usuarios`
        const response = await this.listarTodos(query)
        return response
    }

    static async listarUsuarioPorId(id){
        const query = ` SELECT * FROM usuarios WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    }
}

export default DatabaseUsuariosMetodos