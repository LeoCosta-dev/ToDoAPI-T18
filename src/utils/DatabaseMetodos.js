import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    static listarTodoOBanco(){
        return Database
    }

    /**
     * 
     * @returns Array<Object>
     */
    static listarTodosUsuarios(){
        return Database.Usuarios
    }

    static listarUsuarioPorIndex(index){
        return Database.Usuarios[index]
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

    static deletaUsuarioPorId(id){
        const usuarios = Database.Usuarios.filter((usuario, index)=>{
            return id != index
        })
        Database.Usuarios = usuarios
        return {id: id, success: "usuario excluido com sucesso!"}
    }
}

export default DatabaseMetodos