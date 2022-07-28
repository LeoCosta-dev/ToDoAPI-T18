import DAO from "./DAO.js";

class DatabaseTarefasMetodos extends DAO {
    static async createTableTarefas(){
        const query = `
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_usuario INTEGER,
            description VARCHAR,
            status VARCHAR,
            FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
            )
            `
            const response = await this.createTable(query)
            return response
        }
        
        static async inserirTarefa(tarefa){
            const query = `INSERT INTO tarefas (id_usuario, description, status) values (?,?,?)`
            const response = await this.inserir(tarefa, query)
            return response
        }
    
        static async listarTodasAsTarefas(){
            const query = `SELECT * FROM tarefas`
            const response = await this.listarTodos(query)
            return response
        }

        static async listarTarefasPorId(id){
            const query = `SELECT * FROM tarefas WHERE id = ?`
            const response = await this.listarPorId(id, query)
            return response
        }

        static async DeletarTarefaPorId(id){
            const query = `DELETE FROM tarefas WHERE id = ?`
            const response = await this.deletaPorId(query, id)
            return response
        }
}

export default DatabaseTarefasMetodos;