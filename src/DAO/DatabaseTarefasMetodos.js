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
}

export default DatabaseTarefasMetodos;