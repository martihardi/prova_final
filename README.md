# Examination

## Como completar esse test

1. Clone o projeto para sua maquina

```bash
git clone https://github.com/Dione-Vianna/examination.git
cd examination
```

2. Instale as dependências `yarn install`
3. Renomeie o arquivo `.example.env` para `.env`
4. Completar o código onde tem comentários
5. Inicie o servidor `yarn start`
6. Crie as rodas no insomnia para os testes
7. Crie um repository no github e envie o projeto
8. O resultado final vai ser uma api para criação de todos

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
