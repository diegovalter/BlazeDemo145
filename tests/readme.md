# ✈️ Automação de Testes - Simple Travel Agency (BlazeDemo)

Este projeto realiza a automação de testes funcionais na plataforma de reserva de voos **BlazeDemo**. O objetivo é garantir a integridade dos fluxos principais da aplicação, desde o registro de novos usuários até a confirmação de compra de passagens, utilizando o **Playwright**.

---

## 📋 Funcionalidades Automatizadas

### 👤 Gestão de Usuários (Registro e Login)

* **Cenário:** Navegação entre as páginas de Home, Login e Registro.
* **Validação:** Preenchimento de formulários de cadastro e login.
* **Observação:** Os testes validam o comportamento do sistema ao encontrar páginas expiradas ou redirecionamentos de segurança.

### 💳 Fluxo de Compra de Passagem

* **Cenário:** Seleção de origem (Boston) e destino (London), escolha de voo e preenchimento de dados de pagamento.
* **Validação:** Verifica se os valores (Airline, Total Cost) estão corretos na tela de checkout e confirma se a mensagem de sucesso "Thank you for your purchase today!" é exibida ao final.

---

## 🛠️ Tecnologias Utilizadas

* **Playwright** — Framework de automação para testes de ponta a ponta.
* **JavaScript** — Linguagem base para escrita dos scripts.
* **Playwright Test Runner** — Executor de testes e motor de asserções (`expect`).

---

## 📁 Estrutura do Projeto

```text
├── tests/
│   ├── auth.spec.js      # Testes de Registro e Login
│   └── purchase.spec.js  # Fluxo de reserva e compra de passagens
├── playwright.config.js  # Configurações globais (BaseURL, Browser, etc)
├── package.json          # Dependências e scripts de execução
└── README.md             # Documentação do projeto

```

---

## 🚀 Como Executar o Projeto

1. **Instale as dependências:**
```bash
npm install

```


2. **Execute todos os testes:**
```bash
npx playwright test

```


3. **Para visualizar o relatório de execução:**
```bash
npx playwright show-report

```



---

## 💡 Observações de Teste

* **BaseURL:** O projeto está configurado para acessar a URL raiz (`/`), facilitando a manutenção caso o ambiente de teste mude.
* **Seletores Inteligentes:** Foram utilizados seletores variados como `page.locator`, `getByRole` e `selectOption` para garantir a robustez na interação com os elementos da página.
* **Asserções:** Cada etapa do fluxo possui verificações de URL e conteúdo de texto para garantir que o usuário está exatamente onde deveria estar.
