const express = require('express');
const app = express();
const PORT = 3000;

// Rota inicial (quando acessar http://localhost:3000)
app.get('/', (req, res) => {
    res.send('Minha primeira API em Node.js está online!');
});

// Inicia o servidor na porta configurada
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});