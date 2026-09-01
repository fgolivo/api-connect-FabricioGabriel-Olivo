# API apiEP2 - Gerenciamento de Usuários (MVP)

## Objetivo da API
A API apiEP2 é um Produto Mínimo Viável (MVP) desenvolvido para sustentar a lógica de negócios e o gerenciamento de usuários de uma startup de tecnologia. A aplicação fornece um ecossistema RESTful padronizado para as operações de criação, leitura, atualização e remoção (CRUD) de perfis. O projeto adota estritos preceitos profissionais, incluindo Separação de Responsabilidades (SoC) e respostas rigorosamente tipadas em formato JSON, concebido como parte do desenvolvimento acadêmico em Análise de Sistemas da Universidade Positivo.

## Tecnologias Utilizadas
* **Linguagem:** JavaScript
* **Ambiente de Execução:** Node.js
* **Framework:** Express
* **Ferramenta de Desenvolvimento:** Nodemon
* **Persistência de Dados:** Em memória (Array)

1. **Clone o repositório:**
   ```bash

   git clone https://github.com/fgolivo/api-connect-FabricioGabriel-Olivo.git



## Como Executar Localmente
1. Clone o repositório:
   ```bash

   git clone https://github.com/fgolivo/api-connect-FabricioGabriel-Olivo.git
2. Abra o terminal na raiz da pasta do projeto (`apiEP2`).
3. Instale as dependências necessárias executando:
   `npm install`
4. Inicie o servidor local com o comando:
   `node server.js`
5. Confirme no terminal a mensagem indicando que o servidor está operando na porta 3000.

## Exemplos de Endpoints
A API responde na URL base `http://localhost:3000`.

| Método HTTP | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/users` | Lista todos os usuários cadastrados no sistema. |
| **GET** | `/users/:id` | Retorna os detalhes de um usuário específico utilizando o ID. |
| **POST** | `/users` | Cadastra um novo usuário. Requer o envio de `name` e `email` no corpo (JSON). |
| **PUT** | `/users/:id` | Atualiza os dados de um registro existente. |
| **DELETE** | `/users/:id` | Remove permanentemente um usuário da estrutura. |

---
**Desenvolvido por:** Fabricio Gabriel Olivo