// Criar uma variável router e import router do express
// Criar uma variável de connection e importar connection.js

// Rotas para manipulação de todos

router.get('/todos', (req, res) => {
  // buscar todos no banco de dados
  res.send('Lista de todos');
});

router.put('/todos/:id', (req, res) => {
  // atualizar um todo
  res.send('Atualizar um todo');
});

router.post('/todos', (req, res) => {
  // criar um todo
  res.send('Criar um todo');
});

router.delete('/todos/:id', (req, res) => {
  // Apagar um todo
  res.send('todo apagado');
});

// lembre-se de exportar o router
