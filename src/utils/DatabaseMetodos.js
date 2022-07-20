import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    static listarTodoOBanco(){
        return Database
    }

    static listarTodosUsuarios(){
        return Database.Usuarios
    }

    /**
     * 
     * @param {Object} usuario 
     * @returns Object
     */
    static inserirUsuario(usuario){
        Database.Usuarios = [...Database.Usuarios, usuario]
        return Database.Usuarios
    }
}

export default DatabaseMetodos