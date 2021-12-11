const express = require('express');
const app = express();
// user express.json() para receber requisições com o corpo no formato json
app.use(express.json());

// criar a variável router e importar o arquivo router.js
const router = require('./router');
// criar o rota get para a raiz da aplicação
app.get('/', (req, res) => {
    res.send('Hello World!');   
});




// lembrar de usar o router
app.use(router);    

// lembrar de exportar a variável app para ser usada no index.js
module.exports = app;
