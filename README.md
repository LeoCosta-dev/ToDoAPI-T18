# ToDoAPI-T18

## Como instalar:

* Abra seu terminal em uma pasta de fácil acesso e cole o seguinte comando:

```
git clone https://github.com/LeoCosta-dev/ToDoAPI-T18.git
```

* Navegue até a pasta do projeto com o seguinte comando:

```
cd ToDoAPI-T18
```

* Instale as dependencias necessárias com o seguinte comando:

```
npm i
```

* Inicie o projeto rodando o comando:

```
npm start
```

## Exemplo de rotas:
### Post: url/usuarios

Objeto de requisição:
<br>

```json
{
	"nome": "José",
	"email": "couve@mineira.com.br",
	"telefone": "2199999999"
}
```
<br>
Exemplo de resposta:
<br>

```json
[
	{
		"nome": "José",
		"email": "couve@mineira.com.br",
		"telefone": "2199999999"
	}
]
```
