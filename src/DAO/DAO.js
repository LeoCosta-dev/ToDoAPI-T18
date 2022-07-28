import Database from "../infra/Database.js";

class DAO{
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static createTable(query){
        
        this.activePragma()

        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso!")
                }
            })
        })
    }

    static inserir(entidade, query){
        const body = Object.values(entidade)

        return new Promise((resolve, reject)=>{
            Database.run(query, [...body], (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Cadastrado com sucesso!"})
                }
            })
        })
    }

    static listarTodos(query){
        return new Promise((resolve, reject)=> {
            Database.all(query, (e, resultado)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    static listarPorId(id, query){
        return new Promise((resolve, reject)=> {
            Database.get(query, id, (e, resultado)=>{
                if(e){
                    reject(e)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

}

export default DAO