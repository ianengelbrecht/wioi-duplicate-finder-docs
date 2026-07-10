---
title: Sessões de Captura
description: Saiba como organizar e gerenciar seus grupos de captura de espécimes.
---

Uma **Sessão de Captura** representa um lote distinto de registros de espécimes. Por exemplo, você
pode criar uma sessão para uma gaveta, armário, família taxonômica específica ou um intervalo de
datas de captura de dados (ex: _Armário Malvaceae 2_ ou _15 a 20 de Junho_).

Organizar seu trabalho em sessões torna a revisão, exportação e curadoria dos dados simples e
diretas.

Para acessar suas sessões:

1. Abra o aplicativo e entre (sign in).
2. Selecione a aba **Sessões de Captura** na navegação esquerda do painel.

![Lista de Sessões de Captura](/wioi-duplicate-finder-docs/sessions-tab.png)

---

## Gerenciando Sessões

### Criando uma Sessão de Captura

1. No campo de entrada de texto em **Sessões de Captura de Dados**, digite um nome descritivo para
   sua sessão (ex. `Armário 2 Malvaceae`).
2. Clique em **Criar Sessão** (ou pressione Enter).
3. A sessão é criada imediatamente, e o aplicativo abre o espaço de trabalho de captura em painel
   duplo correspondente.

### Alternando entre Sessões

- No painel, clique em qualquer cartão de sessão na lista de sessões.
- Isso abrirá o espaço de trabalho de captura daquela sessão, exibindo os registros capturados
  anteriormente na tabela inferior.
- Para retornar à lista de sessões, clique no botão de seta no canto superior esquerdo da tela de
  captura de dados.

### Renomeando uma Sessão

1. Passe o mouse sobre o nome de uma sessão na lista. O texto mostrará um sublinhado, indicando que
   é editável.
2. Clique no nome da sessão. Ele se transformará em um campo de entrada de texto ativo.
3. Digite o novo nome.
4. Pressione **Enter** to salvar as alterações ou **Escape** para cancelar a renomeação.

### Excluindo uma Sessão

1. Clique no botão vermelho **Excluir** ao lado da sessão na lista do painel.
2. Uma caixa de diálogo (modal) de confirmação aparecerá. Tenha certeza absoluta de que deseja
   excluir a sessão antes de prosseguir; idealmente, você só deve excluir sessões depois que os
   dados tiverem sido exportados.

![Caixa de Diálogo de Confirmação de Exclusão de Sessão](/wioi-duplicate-finder-docs/delete-session-modal.png)

> [!CAUTION] A exclusão de uma sessão exclui permanentemente todos os registros de espécimes
> capturados nela. Esta ação é irreversível. Certifique-se sempre de ter exportado seus dados antes
> de excluir uma sessão.

---

## Estatísticas e Status da Sessão

Para cada sessão na lista do painel, o aplicativo exibe metadados cruciais:

- **Contagem de Espécimes**: Um distintivo cinza mostrando o número total de registros capturados
  (ex. `24 espécimes`).
- **Último Registro**: Exibe a data e a hora do espécime salvo ou modificado mais recentemente nesta
  sessão. Se nenhum espécime tiver sido salvo, exibe `Nenhum registro capturado`.
- **Última Exportação**: Exibe a data e a hora em que a sessão foi exportada pela última vez para um
  arquivo CSV.
- **Sinalizador de Aviso de Exportação**:
  - Uma borda ou aviso laranja (`Nunca exportado` ou data destacada) será exibido se a sessão
    contiver alterações não exportadas.
  - Este aviso é exibido se a sessão nunca tiver sido exportada OU se a data do último registro for
    _mais recente_ do que a data da última exportação (ou seja, registros foram adicionados ou
    editados desde a última exportação).
  - Essas informações adicionais ajudam você a gerenciar suas sessões e garantir que nenhum dado
    seja perdido.
