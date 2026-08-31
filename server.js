const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware global obrigatório
app.use(express.json());

// Injeção das rotas de usuários
app.use('/users', userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor da apiEP2 inicializado e operando na porta ${PORT}`);
});