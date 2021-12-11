const router = require('express').Router();
// Criar uma variável de connection e importar connection.js
const connection = require('./connection');
// Rotas para manipulação de todos



router.get('/todos', (req, res) => {
  connection.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send(results.rows);
  });
});
router.put('/todos/:id', (req, res) => {
  // atualizar um todo
  const id = req.params.id;
   const { task, owner, status } = req.body;
  connection.query('UPDATE todos SET task = $1, owner = $2, status = $3 WHERE todos_id = $4', [task, owner, status, id], (err, results) => {  
    if (err) {
      return res.status(400).json({
        error: 'erro ao criar',
        message: 'erro',
      });
    } else {
      res.json(results.rows);
    }
  });
});

router.post('/todos', (req, res) => {
  // criar um todo
  const {task, owner, status} = req.body;
  connection.query(
    'INSERT INTO todos (task, owner, status) VALUES ($1,$2,$3)', [task, owner, status], (err, results) => {
    if (err) {
      return res.status(400).json({
        error: 'erro ao criar',
        message: 'erro',
      });
    } else {
      res.json(results.rows);
    }
  });
});


router.delete('/todos/:id', (req, res) => {
  // Apagar um todo
  const id = req.params.id;
  connection.query('DELETE FROM todos WHERE id = ?', id, (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send('todo apagado');
  });
});
// lembre-se de exportar o router

module.exports = router;