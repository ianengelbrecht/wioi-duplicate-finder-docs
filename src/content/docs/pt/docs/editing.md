---
title: Selecionando e Editando Dados de Espécimes
description: Saiba como carregar registros, capturar novos espécimes, usar aceleradores de entrada rápida e revisar os campos do formulário.
---

O painel direito do espaço de trabalho exibe o **Formulário de Captura de Espécimes**. Este formulário permite gravar os detalhes de novos espécimes ou editar registros salvos na sessão de captura ativa.

![Painéis do Formulário de Captura Principal](/wioi-duplicate-finder-docs/capture-form.png)

---

## Fluxo de Trabalho do Formulário

### Carregando um registro de espécime existente
- **A partir de dados de referência (duplicatas)**: Selecione qualquer linha na tabela de **Resultados de Busca** à esquerda após realizar uma busca. Todos os campos geográficos, taxonômicos e de evento são copiados para o formulário de captura/edição de dados imediatamente.

### Verificação e edição
- Depois de selecionar um registro para trabalhar, revise todos os campos e compare-os com o espécime à sua frente para garantir que todos os dados estejam corretos.
- Você pode ter dados adicionais ou mais precisos no espécime à sua frente do que o que está no registro existente, portanto, certifique-se de capturar isso também.
- Consulte a Referência de Campo por Campo abaixo para obter detalhes sobre quais informações vão em cada campo.

### Salvando Registros
- Para salvar, clique em **Salvar Espécime** no final do formulário ou pressione o atalho de teclado **Ctrl+S** a qualquer momento.
- O registro é validado e salvo no banco de dados local, sendo colocado na tabela de espécimes salvos na parte inferior da tela (você precisará rolar para baixo para vê-los). O formulário é redefinido automaticamente, colocando o cursor no campo de código de barras para o próximo espécime.

### Editando registros salvos
- Clique em qualquer linha na tabela **Espécimes Capturados** na parte inferior do espaço de trabalho. Isso carrega o registro salvo de volta no formulário de captura para edição, alterando o distintivo do cabeçalho do formulário para **CAPTURA SALVA** para que você saiba que está trabalhando com um registro existente.
- De forma importante, esse recurso permite que você alterne entre um registro que capturou e outros registros duplicados dos resultados de busca para o mesmo espécime. Assim, você pode copiar/colar dados de outros espécimes para o registro capturado, usando dados de todas as duplicatas para obter o registro mais completo para o seu espécime.
- Você também pode usar o botão **Mostrar Anterior** com a mesma finalidade de alternar rapidamente entre registros.

### Redefinindo o Formulário
- Se precisar, clique em **Redefinir Formulário** no canto inferior esquerdo para limpar todos os campos e retornar o formulário ao estado de **NOVO FORMULÁRIO** (distintivo verde).

---

## Aceleradores de Entrada Rápida de Dados

O formulário é otimizado para inserção rápida de dados, reduzindo a alternância entre teclado e mouse e oferecendo auxiliares para limpar as etiquetas textuais.

### 1. Assistente de Formatação de Maiúsculas/Minúsculas (Botões Aa e Desfazer)
Muitos campos de texto e áreas de texto (como *Descrição da Planta*, *Localidade*, *Notas da Localidade*, *Habitat* e campos geográficos) possuem ferramentas de formatação em linha:
- **Formatação Correta (`Aa`)**: Clique neste ícone para converter automaticamente o texto em letras maiúsculas para o formato padrão de títulos (capitalizando nomes, substantivos principais e ajustando a capitalização de descrições botânicas padrão).
- **Desfazer Formatação**: Se a formatação se comportar de maneira inesperada, um ícone de seta Desfazer aparece no lugar do botão `Aa`. Clique nele para restaurar o texto digitado originalmente.

### 2. Copiar e Colar Campos
Os campos **Localidade** e **Notas da Localidade** contêm botões personalizados de copiar e colar:
- **Copiar**: Copia todo o conteúdo do campo (ou texto selecionado) para a área de transferência do computador.
- **Colar**: Cola o texto da área de transferência diretamente na posição atual do cursor dentro do campo, evitando que você precise selecionar todo o texto.

### 3. Analisador Automático de Data Textual
- Quando você digita ou cola uma data no campo **Data Textual** (ex. `20 mai 1984` ou `May 20, '84`), o aplicativo a analisa automaticamente e divide os valores nos campos **Ano**, **Mês** e **Dia**.
- **Alternador de Idioma**: O campo de data textual também possui um alternador de idioma que define como o valor da data é analisado (os formatos de data variam entre os idiomas). Alternar a seleção recalculará o **Ano**, **Mês** e **Dia** correspondentemente.

![Alternador de Idioma da Data Textual EN/FR](/wioi-duplicate-finder-docs/date-language-toggle.png)

### 4. Coordenadas Textuais
- É sempre uma boa prática registrar as coordenadas nos rótulos dos espécimes exatamente como estão escritas, sem convertê-las para outro formato.
- O campo **Coordenadas Textuais** permite fazer isso e analisará e converterá essas coordenadas em graus decimais para você em segundo plano.
- As coordenadas podem ser inseridas em qualquer formato, como DMS `20° 30' 15" S, 47° 25' 10" E` ou Graus Decimais `20.5042S, 47.4194E`.
- O campo possui um botão com o símbolo de grau (°) no qual você pode clicar para adicionar um símbolo de grau na posição atual do cursor no campo.
- Ao sair do campo, ele verifica o formato das coordenadas e mostra os valores de **Latitude Decimal** e **Longitude Decimal** se as coordenadas forem válidas.
- Se as coordenadas estiverem malformadas, um distintivo vermelho **(Inválido)** é exibido. Você ainda pode salvar as coordenadas como estão escritas, mas deve verificar novamente se o formato está correto.
- A regra básica para o formato de coordenadas é que a latitude e a longitude devem ter formatos correspondentes. Você não pode ter latitude decimal e longitude DMS, por exemplo. Exemplos comuns de problemas são indicadores de grau, minuto ou segundo ausentes em um ou outro valor.

---

## Preenchimentos Automáticos com Base de Referência e Valores Personalizados

Vários campos do formulário usam o banco de dados de referência local para sugerir valores durante a digitação.

### Consultas Rápidas de Nome Científico
- O campo **Nome Científico** é preenchido automaticamente usando o World Checklist of Vascular Plants da Kew (WCVP v12).
- Você pode usar a busca parcial (por exemplo, digitar `ab man` para sugerir `Abelmoschus manihot`).

### Adicionando Novos Valores em Todo o Formulário
- **Adicionando Novos Coletores (Agentes)**:
  Quando você digita o nome de um coletor principal no campo de preenchimento automático e sai dele, o aplicativo verifica o registro do banco de dados. Se o coletor não existir, uma caixa de diálogo perguntará: *"Tem certeza de que deseja salvar o novo nome?"*. Confirmar salva o nome, disponibilizando-o para futuros preenchimentos automáticos.
  
  ![Caixa de Diálogo de Confirmação de Novo Nome](/wioi-duplicate-finder-docs/new-name-prompt.png)

- **Inserindo Táxons Personalizados**:
  Se um espécime representa uma espécie não encontrada no banco de dados de referência do WCVP (como uma nova espécie, cultivar ou nome de manuscrito), você **não será bloqueado**. Você pode simplesmente digitar o novo nome e salvar o registro. Em segundo plano, o banco de dados armazena o `taxonID` do WCVP para nomes existentes (que são exportados se necessário). Novos nomes terão o campo `taxonID` em branco.

---

## Referência de Campo por Campo

Abaixo está um guia detalhado para todos os 29 campos no formulário de captura. Os nomes dos campos são os nomes internos do Darwin Core que o aplicativo usa, e provavelmente serão diferentes no formato de exportação de dados para corresponder aos nomes dos campos do seu próprio banco de dados (este é o propósito de um padrão de dados como o Darwin Core).

| Nome do Campo | Rotulado Como | Tipo | Descrição / Regras de Preenchimento Automático |
| :--- | :--- | :--- | :--- |
| **collectionCode** | Herbário de Origem | Somente leitura | Preenchido previamente a partir das [Configurações do Aplicativo](settings) ativas. Representa a instituição de origem. É unido a Duplicatas para exportações no BRAHMS7. |
| **catalogNumber** | Código de barras | Texto | Identificador de código de barras exclusivo para a folha de espécime (ex. `TAN001234`). |
| **duplicates** | Duplicatas | Preenchimento automático | Lista separada por vírgulas de herbários que possuem duplicatas (ex. `P, K, MO`). Preenche automaticamente siglas padrão. Não é um campo Darwin Core. |
| **recordedBy** | Coletor Principal | Preenchimento automático | O nome do primeiro coletor/coletor principal. Consulta o registro de agentes local; solicita salvar se for novo. |
| **additionalCollectors** | Coletores Adicionais | Seleção múltipla | Busca com preenchimento automático para membros da equipe. Pressione Enter nas sugestões para adicionar nomes como marcadores (tags). Não é um campo Darwin Core, anexado ao recordedBy no banco de dados. |
| **recordNumber** | Número | Texto | O número sequencial atribuído pelo coletor (ex. `1042`). |
| **verbatimEventDate** | Data Textual | Texto | Data conforme escrita no rótulo. Analisada automaticamente nos campos numéricos de data abaixo. Possui alternadores de idioma para suportar análise de diferentes localizações de datas. |
| **year** | Ano | Numérico | Ano de coleta. Preenchido automaticamente pelo analisador de data ou inserido manualmente. |
| **month** | Mês | Numérico | Mês de coleta (1-12). Preenchido automaticamente pelo analisador de data ou inserido manualmente. |
| **day** | Dia | Numérico | Dia de coleta (1-31). Preenchido automaticamente pelo analisador de data ou inserido manualmente. |
| **fieldNotes** | Descrição da Planta | Área de texto | Descrições morfológicas (altura, cor da flor, odor). Suporta formatação de maiúsculas/minúsculas. Este campo do Darwin Core é normalmente usado para informações de descrição da planta em espécimes de herbário. |
| **occurrenceRemarks** | Observações Gerais | Área de texto | Quaisquer outras observações sobre o espécime indicadas no rótulo. Suporta formatação de maiúsculas/minúsculas. |
| **country** | País | Preenchimento automático | Nome do país. Limpa as sub-regiões se alterado. |
| **stateProvince** | Admin 2 | Preenchimento automático | Sub-região principal do país (estado/província/região). Reutiliza valores do banco de dados e é filtrado pelo país selecionado. Suporta formatação de maiúsculas/minúsculas. |
| **county** | Admin 3 | Preenchimento automático | Sub-região secundária (condado/distrito). Filtrado por país e Admin 2. Suporta formatação de maiúsculas/minúsculas. |
| **municipality** | Admin 4 | Preenchimento automático | Terceira sub-região, filtrada por país, Admin 2 e Admin 3. Suporta formatação de maiúsculas/minúsculas. |
| **locality** | Localidade | Área de texto | Nome do local de coleta. Suporta auxiliares de copiar, colar e formatar maiúsculas/minúsculas. A busca parcial consulta valores existentes no banco de dados. |
| **cultivated** | Cultivado | Caixa de seleção | Marque se o espécime foi coletado de cultivo, como um jardim botânico. Não é um campo Darwin Core, mas é importante para espécimes de herbário. |
| **verbatimCoordinates** | Coordenadas Textuais | Texto | Coordenadas conforme escritas no rótulo. Analisadas para coordenadas decimais pelo aplicativo; exibe um distintivo de erro se forem inválidas. |
| **decimalLatitude** | Não indicado | Texto | Latitude calculada. Preenchida automaticamente pelo analisador de coordenadas a partir de verbatimCoordinates. |
| **decimalLongitude** | Não indicado | Texto | Longitude calculada. Preenchida automaticamente pelo analisador de coordenadas a partir de verbatimCoordinates. |
| **locationNotes** | Notas da Localidade | Área de texto | Observações adicionais de localização, direções. Normalmente complementa o valor da localidade. Suporta auxiliares de copiar, colar e formatar maiúsculas/minúsculas. |
| **verbatimLocality** | Localidade Textual | Área de texto | Texto somente leitura para exibir informações do banco de dados. Copie e cole nos campos de localidade relevantes acima. |
| **verbatimElevation** | Altitude Textual | Texto | Altitude conforme escrita no rótulo (ex. `1200 m` ou `approx. 4000 ft`). Convertida para metros em segundo plano. |
| **habitat** | Habitat | Área de texto | Descrição ambiental (ex. `solo arenoso, floresta perene`). Suporta formatação de maiúsculas/minúsculas. |
| **identificationQualifier** | Qualificador | Menu de seleção | Prefixo qualificador de taxonomia, ex. `cf.`, `aff.`, `nr.`. |
| **scientificName** | Nome Científico | Preenchimento automático | Nome científico identificado. Consulta a taxonomia do WCVP usando buscas parciais. Nomes personalizados são permitidos. |
| **typeStatus** | Status do Tipo | Preenchimento automático | Status de designação de tipo. Preenche automaticamente opções padrão como `holotype`, `isotype`, `syntype`. Valores personalizados podem ser adicionados. |
| **identifiedBy** | Det. por | Seleção múltipla | Nomes de especialistas que identificaram o espécime. Preenche automaticamente nomes de agentes. Vários nomes podem ser adicionados. |
| **yearIdentified** | Det. Ano | Numérico | Ano de identificação. Validado para garantir que não seja anterior ao ano de coleta. Não é um campo Darwin Core, mas é usado para compilar dwc:dateIdentified. |
| **monthIdentified** | Det. Mês | Numérico | Mês de identificação (1-12). Não é um campo Darwin Core, mas é usado para compilar dwc:dateIdentified. |
| **dayIdentified** | Det. Dia | Numérico | Dia de identificação (1-31). Não é um campo Darwin Core, mas é usado para compilar dwc:dateIdentified. |
| **identificationRemarks** | Det. Observações | Texto | Notas sobre a identificação fornecidas pelo identificador. |
