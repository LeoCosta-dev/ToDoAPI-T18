import DatabaseMetodos from "../DAO/DatabaseUsuariosMetodos.js";

const usuario ={
    nome: "José das Couves",
    email: "couve@mineira.com.br",
    telefone: "31777777777"
}

try {

    const tabela = await DatabaseMetodos.createTableUsuarios()
    console.log(tabela)

    const criada = await DatabaseMetodos.inserirUsuario(usuario)
    console.log(criada)

} catch (e) {
    console.log(e)
}