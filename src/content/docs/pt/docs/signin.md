---
title: Registrar / Entrar
prev:
  link: /pt/installation
  label: Instalação
---

O aplicativo usa um **sistema de banco de dados local** para armazenar registros de espécimes e contas de usuário. Todos os dados de login e registros capturados permanecem totalmente offline em seu computador local.

## Inicialização do Banco de Dados

Ao iniciar o aplicativo pela primeira vez, ele configura automaticamente o ambiente do banco de dados SQLite. Você verá uma tela de carregamento temporária de inicialização do banco de dados.

![Tela de Carregamento de Inicialização do Banco de Dados](/wioi-duplicate-finder-docs/loading-db.png)

Se o banco de dados for preparado com sucesso:
- Se um usuário já estava conectado no dispositivo anteriormente, o aplicativo abre automaticamente o painel.
- Se nenhum usuário estiver conectado, você será redirecionado para a tela de login da conta.

---

## Contas Locais

Como o banco de dados é armazenado inteiramente no seu computador, a criação da conta não registra você em um site remoto. Em vez disso, ela cria um perfil de usuário local dentro do seu banco de dados offline. Isso permite que vários pesquisadores que usam a mesma máquina mantenham coleções separadas.

![Formulário de Entrada e Registro](/wioi-duplicate-finder-docs/auth-screen.png)

### Criando uma Conta (Registrar-se)
1. Na tela de Entrada (Sign In), clique em **Precisa de uma conta? Registrar** na parte inferior do cartão.
2. Insira o **Nome de usuário** e a **Senha** desejados.
3. Clique em **Criar Conta**. 
4. Uma vez registrado, o sistema retorna você ao estado de Entrada para fazer o login.

### Fazendo Login (Entrar)
1. Insira seu **Nome de usuário** e **Senha** locais.
2. Clique em **Entrar**.
3. Em caso de sucesso, você estará conectado e será redirecionado para o painel principal de gerenciamento de sessões.

### Sair
Para proteger seus dados ou alternar contas de usuário:
1. Clique no botão **Sair** localizado no canto superior direito do cabeçalho.
2. Você será desconectado e retornará à tela de Entrada imediatamente.

---

## Tela de Recuperação de Banco de Dados

Em casos raros em que o banco de dados SQLite local falha ao abrir ou é corrompido (por exemplo, devido a um desligamento inesperado do computador), o aplicativo exibe uma página de **Recuperação de Banco de Dados**.

Esta interface oferece duas opções:
- **Tentar Novamente Conexão**: Tenta reinicializar e reparar a conexão do banco de dados.
- **Restaurar Backup**: Permite navegar no seu computador local e restaurar o estado do banco de dados a partir de um arquivo de backup de banco de dados exportado anteriormente (`.db`).
