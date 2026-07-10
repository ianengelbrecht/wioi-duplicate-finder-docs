---
title: Buscando Registros de Referência
description:
  Encontre espécimes duplicados e referências taxonômicas para acelerar a entrada de dados.
---

O painel esquerdo do espaço de trabalho de captura de dados é dedicado a buscar registros de
espécimes duplicados. Ao pesquisar por espécimes existentes de outros herbários publicados no GBIF,
você pode reutilizar esses detalhes instantaneamente em vez de digitar todos esses dados novamente
de forma manual.

O cabeçalho do painel de busca exibe os números dos registros do banco de dados local:

- **Dados de Referência**: Total de registros de referência duplicados carregados do GBIF para a sua
  área de interesse.
- **WCVP**: Total de nomes taxonômicos carregados do World Checklist of Vascular Plants da Kew, bem
  como a versão atual do checklist.

![Interface do Painel de Busca com Filtros Válidos](/wioi-duplicate-finder-docs/search-pane.png)

---

## Filtros de Busca

Você pode filtrar espécimes de referência usando os seguintes campos:

- **Coletor**: O nome do coletor principal (busca parcial, por exemplo, digitar `Raza` corresponde a
  `Razafindratsita`). Digite os nomes sem iniciais.
- **Número**: O número sequencial do coletor (por exemplo, `1042`). Digite apenas números, excluindo
  quaisquer prefixos. A busca corresponde a esses números exatamente, ao contrário de outros campos
  do formulário (caso contrário, a busca pelo número 123 retornaria 1234, etc.).
- **Data (Ano, Mês, Dia)**: Campos numéricos separados para a data de coleta.
- **Família**: A família botânica (busca parcial, por exemplo, `mal` corresponde a `Malvaceae`).
- **Nome Científico**: O nome do táxon (busca parcial, por exemplo, `ab man` corresponde a
  `Abelmoschus manihot`).
- **País**: Menu suspenso de preenchimento automático para nomes de países.
- **Admin 2 (estado/prov/etc)**: Menu suspenso de preenchimento automático para estado, província ou
  região. Este campo é filtrado automaticamente pelo **País** selecionado (alterar o País redefine
  este campo).
- **Localidade**: Também é uma busca parcial, por exemplo, `Anta ré` corresponde a
  `Antanambao-Manampotsy, Réserve de...`.

Normalmente você usará o nome e número do coletor para encontrar registros duplicados, mas se não
existirem duplicatas para o espécime que você está capturando, você pode querer buscar outros
espécimes coletados na mesma época e reutilizar esses registros com as edições necessárias, razão
pela qual temos as opções de busca adicionais disponíveis.

---

## Regras de Validação de Busca

Para evitar consultas de banco de dados muito lentas em termos amplos e garantir que as buscas
tragam potenciais duplicatas de alta qualidade, o aplicativo impõe as seguintes restrições:

1. **Restrição do Nome do Coletor**:
   - Se você preencher o campo **Coletor**, deverá _também_ fornecer um **Número do Coletor** OU, se
     estiver buscando com uma **Data** (Ano/Mês/Dia), deverá fornecer pelo menos um filtro adicional
     (Família, Nome Científico, País, Admin 2 ou Localidade).
2. **Restrição do Número do Coletor**:
   - Você não pode buscar apenas por um **Número**. Um nome de **Coletor** deve sempre ser fornecido
     junto com o número.
3. **Restrição de Campos de Data**:
   - Se qualquer campo de **Data** (Ano, Mês ou Dia) for preenchido, você também deve preencher pelo
     menos **dois** outros campos que não sejam de data.
4. **Restrição de Filtros Gerais**:
   - A busca por Família, Nome Científico, País, Admin 2 ou Localidade exige o preenchimento de pelo
     menos **três campos no total** (por exemplo, Nome Científico + País + Admin 2).

> [!TIP] O botão **Buscar no Banco de Dados** permanecerá desativado, e avisos visuais (banners
> âmbar) explicarão qual combinação é necessária até que seus critérios de busca sejam válidos.

---

## Executando e Limpando Buscas

- **Enviar**: Clique em **Buscar no Banco de Dados** ou use o atalho de teclado **Ctrl+Enter**
  quando o cursor estiver dentro dos filtros de busca.
- **Limpar**: Clique em **Limpar** para limpar todos os filtros de busca, limpar os resultados e
  redefinir os avisos.

---

## Revisando Resultados de Busca

Os registros correspondentes são exibidos na tabela de resultados abaixo dos filtros.

![Lista da Tabela de Resultados de Busca](/wioi-duplicate-finder-docs/search-results.png)

### Colunas da Tabela de Resultados:

1. **HERB**: A sigla do código de coleção do herbário onde o espécime de referência está armazenado.
2. **Coletor**: O nome do coletor principal, número do coletor (ex. `#1042`) e número de campo entre
   parênteses (às vezes, o número do coletor é armazenado no número de campo em conjuntos de dados
   GBIF).
3. **Nome do Táxon**: O nome científico (em itálico), família taxonômica (em fonte pequena e
   maiúscula) e qualificador de identificação (ex. `cf.`), se registrado.
4. **Localidade**: A descrição em texto da localidade e observações de localização opcionais.
5. **Geo**: País e sub-região do estado/província.
6. **Data**: A data formatada em ISO-8601.
7. **Coords**: Coordenadas textuais ou latitude e longitude decimais.

### Limite de Desempenho:

- Se uma busca for muito ampla, os resultados são automaticamente limitados a **250
  correspondências** para manter o desempenho. Um banner de notificação informará se os resultados
  foram limitados. Normalmente, no entanto, você deseja garantir que seus critérios de busca
  retornem apenas alguns registros.
- Clicar em uma linha de resultado carrega instantaneamente todos os seus campos de dados no
  **Formulário de Captura de Espécimes** à direita.
