Guia de Drinks 🍸
Este é o Projeto 1 da disciplina de Programação Web Fullstack (ES47B-ES71) da Universidade Tecnológica Federal do Paraná (UTFPR), Campus Cornélio Procópio, ministrada pelo Prof. Willian Massami Watanabe.

O objetivo do projeto é desenvolver uma aplicação web no estilo SPA (Single Page Application) utilizando React.js para consumir uma API JSON pública. A aplicação permite que o usuário busque drinks por nome ou descubra um drink aleatório.

✨ Funcionalidades
Busca por Nome: Permite ao usuário buscar um drink específico.

Drink Aleatório: Apresenta um drink aleatório ao clicar em um botão.

Validação de Formulário: O campo de busca é obrigatório.

Feedback Visual: Exibe mensagens de carregamento, erro ou sucesso.

🚀 Tecnologias e Ferramentas Utilizadas
Este projeto foi construído com um conjunto de tecnologias modernas para o desenvolvimento frontend:

Linguagens e Base
HTML5

CSS3

JavaScript (ES6+)

Estrutura e Bibliotecas
React.js: Biblioteca principal para a construção da interface de usuário.

Vite: Ferramenta de build moderna e rápida para o ambiente de desenvolvimento.

Gerenciamento de Estado
React Context API: Utilizada para compartilhar o estado globalmente entre os componentes.

Hook useReducer: Escolhido para gerenciar a lógica de estado complexa da busca de drinks (loading, success, error).

Bibliotecas Externas
Material-UI (MUI): Biblioteca de componentes React para um design visualmente agradável e consistente.

React Hook Form: Gerenciamento de formulários de forma performática e eficiente.

Yup: Utilizado em conjunto com o React Hook Form para a validação de esquemas (schemas) do formulário.

Axios: Cliente HTTP para realizar as requisições (AJAX) para a API TheCocktailDB.

API
TheCocktailDB API: API pública utilizada para obter os dados e imagens dos drinks.

📁 Estrutura do Projeto
O projeto segue a estrutura de pastas exigida pela disciplina:

/
├── public/
└── src/
    ├── components/   # Componentes React (JSX)
    ├── contexts/     # Contextos para gerenciamento de estado
    ├── App.jsx       # Componente principal
    └── main.jsx      # Ponto de entrada da aplicação

⚙️ Como Executar o Projeto Localmente
Clone o repositório:

git clone <url-do-seu-repositorio>

Navegue até a pasta do projeto:

cd projeto-drinks

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

A aplicação estará disponível em http://localhost:5173