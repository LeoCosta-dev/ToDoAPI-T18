import { Database } from "../infra/Database.js";

class DatabaseMetodos{
    
    /**
     * 
     * @returns array<object>
     */
    static listarTodoOBanco(){
        return Database
    }

    /**
     * 
     * @returns Array<object>
     */
    static listarTodosUsuarios(){
        return Database.Usuarios
    }

    /**
     * 
     * @param {number} index 
     * @returns object
     */
    static listarUsuarioPorIndex(index){
        return Database.Usuarios[index]
    }

    /**
     * 
     * @param {object} usuario 
     * @returns object
     */
    static inserirUsuario(usuario){
        Database.Usuarios = [...Database.Usuarios, usuario]
        return {success: "Usuário criado com sucesso", index: Database.Usuarios.length - 1}
    }

    /**
     * 
     * @param {number} id 
     * @returns object
     */
    static deletaUsuarioPorId(id){
        const usuarios = Database.Usuarios.filter((usuario, index)=>{
            return id != index
        })
        Database.Usuarios = usuarios
        return {id: id, success: "usuario excluido com sucesso!"}
    }
}

export default DatabaseMetodos