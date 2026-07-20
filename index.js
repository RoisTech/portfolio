const express = require('express');
const app = express();
const PORT = 3000;

// Permite que o Express entenda requisições com corpo JSON
app.use(express.json());

// Dados simulados em memória
let projetos = [
    { id: 1, nome: "Meu Portfólio", tecnologia: "Node.js" },
    { id: 2, nome: "Automação", tecnologia: "Python" }
];

// Rota principal
app.get('/', (req, res) => {
    res.send('API de Projetos Ativa!');
});

// Rota GET para listar todos os projetos
app.get('/api/projetos', (req, res) => {
    res.json(projetos);
});

// Rota POST para adicionar um novo projeto
app.post('/api/projetos', (req, res) => {
    const novoProjeto = {
        id: projetos.length + 1,
        nome: req.body.nome,
        tecnologia: req.body.tecnologia
    };
    
    projetos.push(novoProjeto);
    res.status(201).json(novoProjeto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});