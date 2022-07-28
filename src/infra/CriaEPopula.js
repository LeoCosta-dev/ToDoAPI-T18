import DatabaseUsuariosMetodos from "../DAO/DatabaseUsuariosMetodos.js";
import DatabaseTarefasMetodos from "../DAO/DatabaseTarefasMetodos.js";
import DAO from "../DAO/DAO.js";

const usuario ={
    nome: "José das Couves",
    email: "couve@mineira.com.br",
    telefone: "31777777777"
}

const tarefa = {
    id_usuario: 1,
    description: "Hudson joga rpg",
    status: "a fazer"
}

try {
    await DAO.ativaChavesEstrangeiras()

    const usuarios = await DatabaseUsuariosMetodos.createTableUsuarios()
    console.log(usuarios, ">>>>>> Usuarios")

    const tarefas = await DatabaseTarefasMetodos.createTableTarefas()
    console.log(tarefas, ">>>>>> Tarefas")

    const usuarioCriado = await DatabaseUsuariosMetodos.inserirUsuario(usuario)
    console.log(usuarioCriado, ">>>>>> Usuarios")

    const tarefaCriada = await DatabaseTarefasMetodos.inserirTarefa(tarefa)
    console.log(tarefaCriada, ">>>>>> Tarefas")

} catch (e) {
    console.log("erro >>>>>>", e)
}