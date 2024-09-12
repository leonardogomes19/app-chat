# Meu Chat App

Um aplicativo de chat em tempo real desenvolvido com Next.js, TypeScript, e Tailwind CSS.

## Configuração

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) ou [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/meu-chat-app.git

2. Navegue até o diretório do projeto:

   cd meu-chat-app

3. Instale as dependências:

   yarn install
   # ou
   npm install

4. Configure as variáveis de ambiente

   Crie um arquivo .env.local na raiz do projeto e adicione a sua chave da API OpenAI:

   OPENAI_API_KEY=your_openai_api_key

5. Execute o servidor de desenvolvimento:

   yarn dev
   # ou
   npm run dev

### Testes
   
   Para executar os testes unitários e end-to-end:

   yarn test
   # ou
   npm run test

   yarn cypress open
   # ou
   npm run cypress open