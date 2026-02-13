# 💰 Personal Finance App

Aplicação web para **controle financeiro pessoal**, desenvolvida com foco em **organização de despesas**, **regras de negócio no front-end** e **boas práticas de arquitetura em React**.

O projeto simula um cenário real de uso, priorizando **clareza de dados**, **manutenibilidade do código** e **estrutura escalável**.

---

## 🔗 Demonstração

- 🌐 Aplicação online: *(adicione o link quando fizer deploy)*
- 📦 Repositório: https://github.com/FerVini/personal-finance-app

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de:
- Consolidar conhecimentos em **React** e **JavaScript moderno**
- Praticar **modelagem de estado** e **regras de negócio no front-end**
- Aplicar **boas práticas de componentização e organização de código**
- Simular uma aplicação utilizada por usuários finais

---

## 💡 Problema que o projeto resolve

Muitas pessoas têm dificuldade em acompanhar seus gastos e entender sua situação financeira mensal.

O **Personal Finance App** centraliza receitas e despesas, permitindo:
- Visualizar o saldo atual
- Entender para onde o dinheiro está indo
- Organizar informações financeiras de forma simples e acessível

---

## ⚙️ Funcionalidades

- Cadastro de receitas e despesas
- Classificação por categorias
- Cálculo automático de saldo
- Filtros por período
- Persistência de dados no navegador
- Interface responsiva

---

## 🧠 Decisões Técnicas

- **Componentização** para reutilização e consistência visual
- **Separação clara de responsabilidades** entre UI, lógica e regras de negócio
- **Modelagem explícita de dados financeiros**, facilitando manutenção
- Estrutura preparada para **evolução futura** do projeto
- Estilos isolados para evitar conflitos e melhorar legibilidade

---

## 🏗️ Arquitetura do Projeto

A estrutura do projeto foi pensada para facilitar manutenção, leitura e escalabilidade:

```txt
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas da aplicação
├── hooks/             # Hooks customizados
├── services/          # Lógica de acesso a dados
├── styles/            # Estilos globais e temas
├── utils/             # Funções utilitárias
└── App.jsx            # Composição principal
```

## 🛠️ Tecnologias Utilizadas

- *React* — construção de interfaces e componentização
- *JavaScript(ES6+)* — lógica de negócio e manipulação de dados
- *Vite* — ambiente de desenvolvimento rápido e moderno
- *CSS Module / CSS* — estilização isolada e organizada
- *LocalStorage* — persistência de dados no navegador

## 🚀 Como executar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/FerVini/personal-finance-app

# Acesse a pasta do projeto
cd personal-finance-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
A aplicação estará disponivel em `http://localhost:5173`.

---

## 📈 Possíveis evoluções

- Autenticação de usuários
- Exportação de relatórios
- Integração com API backend
- Testes automatizados

---

## 👤 Autor
**Fernando Vinicius** - Desenvolvedor Front-End
- Github: http://github.com/FerVini
- Linkedin: https://www.linkedin.com/in/fervini/

---

⭐ Projeto desenvolvido com foco em aprendizado contínuo e boas práticas de front-end.
