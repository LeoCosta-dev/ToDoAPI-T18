import Database from "../infra/Database.js";

class DAO{
    static async ativaChavesEstrangeiras() {
        const query = 'PRAGMA foreign_keys = ON';

        Database.run(query, error => {
            if (error)
                console.log(error.message);
            else
                console.log('Chaves estrangeiras ativadas com sucesso.');
        });
    }

    static createTable(query){
        
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
                    reject(e.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }

    static atualizaPorId(entidade, id, query){
        const body = Object.values(entidade)
        return new Promise((resolve, reject)=>{
            Database.run(query,[...body, id], (e, result)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static deletaPorId(query, id){
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({erro: false, message: `Registro com Id ${id} deletado com sucesso`})
                }
            })
        })
    }

}

export default DAO