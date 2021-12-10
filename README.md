# Examination

## Como completar esse test

Clone o projeto para sua maquina

```bash
git clone https://github.com/Dione-Vianna/examination.git
cd examination
yarn install
yarn start
```

- Completar o código onde tem comentários
- O resultado final vai ser uma api para criação de todos

Exemplo de retorno do banco de dados

```json
[
  {
    "todos_id": "11a44d29-6230-48db-a1d6-472aba9330a2",
    "created_at": "2021-12-10T14:06:27.983Z",
    "updated_at": "2021-12-10T14:20:03.699Z",
    "task": "meu todo",
    "owner": "vianna",
    "status": 0
  }
]
```

- Obs: todos_id, created_at e updated_at são gerados automaticamente no banco de dados

## Obrigatório

- Uma rota para listar todos
- Uma rota para criação de todos
- Uma rota para atualização de todos
- Uma rota para remoção de todos

## Um passo a diante

### Para aqueles que querem ir além

- Fazer validação de todos
- Não poder cria um tudo existente
- Retornar um erro amigável ao tentar criar um tudo que já exista
- Retornar um erro amigável ao tentar apagar um tudo que não exista
