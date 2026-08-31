const users = require('../data/usersData');

module.exports = {
    // READ ALL: Listar todos os usuários (GET)
    getAllUsers(req, res) {
        return res.status(200).json(users);
    },

    // READ ONE: Buscar usuário específico por ID (GET)
    getUserById(req, res) {
        const id = parseInt(req.params.id);
        const user = users.find(u => u.id === id);
        
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        return res.status(200).json(user);
    },

    // Criação de um novo registro com validação defensiva (POST)
    createUser(req, res) {
        const { name, email } = req.body;
        
        // Validação estrita: intercepta a requisição caso campos vitais estejam ausentes
        if (!name || !email) {
            // Interrompe o fluxo e retorna status 400 (Bad Request) com o envelope 'error'
            return res.status(400).json({ 
                error: "Validação falhou. Os campos 'name' e 'email' são obrigatórios." 
            });
        }

        // Geração de ID sequencial para o novo registro
        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        const newUser = { id: newId, name, email };
        
        // Persistência do dado no array em memória
        users.push(newUser);
        
        // Retorno de sucesso com status 201 (Created) e envelope padronizado 'data'
        return res.status(201).json({ 
            data: newUser 
        });
    },

// Atualização de um registro existente (PUT)
    updateUser(req, res) {
        const requestedId = parseInt(req.params.id);
        const { name, email } = req.body;
        
        // Localiza o índice numérico do usuário no array
        const userIndex = users.findIndex(u => u.id === requestedId);
        
        // Se o findIndex retornar -1, o ID não existe
        if (userIndex === -1) {
            return res.status(404).json({ error: "Usuário não encontrado para atualização." });
        }

        // Atualiza os dados na posição exata do array mantendo o ID original
        users[userIndex] = { id: requestedId, name, email };
        
        // Retorna o objeto atualizado com status 200 OK
        return res.status(200).json(users[userIndex]);
    },

    // Remoção de um registro (DELETE)
    deleteUser(req, res) {
        const requestedId = parseInt(req.params.id);
        
        // Localiza o índice numérico do usuário
        const userIndex = users.findIndex(u => u.id === requestedId);
        
        // Tratamento de resiliência caso o ID não seja encontrado
        if (userIndex === -1) {
            return res.status(404).json({ error: "Usuário não encontrado para exclusão." });
        }

        // Remove 1 elemento do array a partir do índice localizado
        users.splice(userIndex, 1);
        
        // Retorna status 204 (No Content), indicando sucesso sem necessidade de devolver dados
        return res.status(204).send();
    }
};