---
title: Exportando Dados
description: Saiba como exportar registros capturados para CSV e mapear cabeçalhos para os formatos Darwin Core ou BRAHMS.
---

Depois de terminar a captura de registros de espécimes para uma sessão, você pode exportar seus dados para um arquivo padrão de Valores Separados por Vírgula (CSV). Este arquivo CSV é estruturado para ser importado diretamente no seu sistema principal de gerenciamento de herbário, como o BRAHMS ou Excel.

---

## Como Exportar

1. Selecione uma sessão de captura para abrir o espaço de trabalho de captura.
2. No canto superior direito, clique no botão verde **Exportar CSV**.

![Botão Exportar CSV no Espaço de Trabalho](/wioi-duplicate-finder-docs/export-button.png)

3. Uma caixa de diálogo para salvar o arquivo será aberta no seu computador.
4. Escolha o diretório onde deseja salvar o arquivo CSV.
5. Clique em **Salvar**.

### Nome de Arquivo Sugerido
O aplicativo gera automaticamente um nome padrão usando o nome da sessão ativa e um registro de data/hora local para evitar a substituição de exportações anteriores (por exemplo, `Malvaceae_Cupboard_2_20260620_160000.csv`). Altere o nome do arquivo conforme necessário.

---

## Formatos de CSV e Mapeamento de Campos

Os cabeçalhos das colunas no CSV exportado diferem dependendo do **Formato de Exportação** selecionado nas suas [Configurações do Aplicativo](settings).

### 1. Formato Darwin Core (DwC)
O formato Darwin Core mapeia os campos capturados para cabeçalhos padrão DwC. Abaixo está o guia de mapeamento:

| Cabeçalho CSV Darwin Core | Origem do Campo no Formulário | Detalhes do Mapeamento |
| :--- | :--- | :--- |
| `dwc:collectionCode` | Herbário de Origem | Preenchido previamente a partir das configurações. |
| `dwc:catalogNumber` | Código de barras | Código de barras exclusivo da folha. |
| `duplicates` | Duplicatas | Lista separada por vírgulas. |
| `dwc:recordNumber` | Número | Número textual do coletor. |
| `dwc:recordedBy` | Coletor Principal e Coletores Adicionais | Unidos por ponto e vírgula (ex. `Coletor Principal; Adicional 1; Adicional 2`). |
| `dwc:verbatimEventDate` | Data Textual | String de data bruta do rótulo. |
| `dwc:year`, `dwc:month`, `dwc:day` | Ano, Mês, Dia | Partes numéricas da data. |
| `dwc:country` | País | Nome do país padronizado. |
| `dwc:stateProvince` | Admin 2 (estado/província) | Região primária. |
| `dwc:county` | Admin 3 (condado/distrito) | Região secundária. |
| `dwc:municipality` | Admin 4 (município) | Sub-região local. |
| `dwc:locality` | Localidade | Descrição específica do local. |
| `dwc:locationRemarks` | Notas da Localidade | Notas; anexa `; cultivated` se marcado. |
| `dwc:verbatimCoordinates` | Coordenadas Textuais | String de coordenadas GPS brutas. |
| `dwc:decimalLatitude` | Latitude Decimal | Latitude decimal calculada. |
| `dwc:decimalLongitude` | Longitude Decimal | Longitude decimal calculada. |
| `dwc:verbatimElevation` | Altitude Textual | Texto de altitude bruto. |
| `minElevation`, `maxElevation` | Altitude Textual | Limites calculados extraídos da altitude. |
| `elevation` | Altitude Textual | Valor de altitude padrão em metros. |
| `elevationUncertainty`| Altitude Textual | Margem de incerteza extraída (se analisada). |
| `dwc:habitat` | Habitat | Texto sobre ecologia. |
| `dwc:occurrenceRemarks` | Observações Gerais | Observações gerais do espécime. |
| `dwc:fieldNotes` | Descrição da Planta | Descrição da planta. |
| `dwc:typeStatus` | Status do Tipo | Holótipo, isótipo, síntipo, etc. |
| `dwc:identificationQualifier` | Qualificador | Qualificador de identificação (cf., aff., nr.). |
| `dwc:family` | Família | Família taxonômica resolvida. |
| `dwc:scientificName` | Nome Científico | Nome do táxon. |
| `dwc:identifiedBy` | Det. por | Nomes dos especialistas unidos por ponto e vírgula. |
| `dwc:dateIdentified` | Det. Ano/Mês/Dia | String de data formatada (AAAA-MM-DD). |
| `dwc:identificationRemarks` | Det. Observações | Notas sobre a identificação. |
| `dwc:taxonID` | ID do Táxon | Identificador vinculado a partir do checklist WCVP. |
| `cultivated` | Cultivado | Exporta `true` ou `false`. |

---

### 2. Formato BRAHMS
O formato BRAHMS divide e mapeia os valores para caber nas tabelas padrão do BRAHMS (como RND, LATDEC, gazetteer, alt e componentes taxonômicos analisados).

| Cabeçalho CSV BRAHMS | Origem do Campo no Formulário | Detalhes do Mapeamento |
| :--- | :--- | :--- |
| `tag` | *Nenhum* | Deixado em branco. |
| `del` | *Nenhum* | Deixado em branco. |
| `barcode` | Código de barras | Código de barras exclusivo da folha. |
| `dups` | Herbário Origem e Duplicatas | Combinados (ex. `TAN, P, K`). |
| `collector` | Coletor Principal | Apenas o nome do primeiro coletor. |
| `addcol` | Coletores Adicionais | Nomes adicionais unidos por ponto e vírgula. |
| `prefix`, `number`, `suffix` | Número | Dividido do número do coletor (ex. `Raza 124a` -> prefixo `Raza`, número `124`, sufixo `a`). |
| `dd`, `mm`, `yy` | Dia, Mês, Ano | Data de coleta numérica. |
| `family` | Família | Família taxonômica resolvida. |
| `type category` | Status do Tipo | Designação do tipo. |
| `genus`, `sp1`, `author1`, `rank1`, `sp2`, `author2` | Nome Científico | Componentes analisados a partir do nome científico. |
| `detby` | Det. por | Primeiro nome em Det. por. |
| `detdd`, `detmm`, `detyy` | Det. Dia/Mês/Ano | Partes numéricas da data de identificação. |
| `detstatus` | Qualificador | Qualificador de identificação (cf., aff., nr.). |
| `country` | País | Nome do país. |
| `majorarea` | Admin 2 (estado/província) | Região primária. |
| `minorarea` | Admin 3 (condado/distrito) | Região secundária. |
| `gazetteer` | Admin 4 e Localidade | Combina município e localidade. |
| `lat`, `long` | Latitude / Longitude Decimal | Latitude e longitude numéricas absolutas. |
| `ns`, `ew` | Latitude / Longitude Decimal | Direção do indicador de sinal (`N`, `S`, `E`, `W`). |
| `llunit` | *Nenhum* | Definido como `DD` (Graus Decimais). |
| `qds` | *Calculado* | **Incluído apenas se marcado nas configurações.** Calcula o código de grade Quarter Degree Square. |
| `alt` | Altitude Textual | Valor de altitude calculado em metros. |
| `altunit` | *Nenhum* | Deixado em branco. |
| `locality notes` | Notas da Localidade & Sinalizadores | Combina notas, indicador de cultivado, coordenadas textuais e detalhes da altitude textual. |
| `habitat/site description` | Habitat | Texto sobre ecologia. |
| `plant description` | Descrição da Planta | Texto da descrição da planta. |
| `cultivated` | Cultivado | Exporta `true` ou `false`. |
| `general notes` | Observações Gerais | Combina observações gerais e observações de identificação. |

### Outros formatos

Se você deseja exportar seus dados para um formato diferente, por favor crie uma [solicitação no GitHub (issue)](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues) para nos informar e poderemos trabalhar juntos para fornecer o que você precisa. 

## Abrindo dados exportados no Excel

Se você deseja abrir um arquivo CSV exportado no Excel para visualização ou edição, você precisa passar pelo processo de importação de dados em vez de apenas clicar duas vezes no arquivo para abri-lo. Isso ocorre porque o conjunto de dados provavelmente conterá **caracteres especiais**, como símbolos de grau e letras acentuadas em nomes de coletores. Se um arquivo CSV for aberto diretamente clicando duas vezes nele, esses caracteres ficarão distorcidos porque o Excel usa um sistema de codificação de caracteres padrão diferente.

Para garantir que todos os caracteres sejam importados corretamente:

- Abra o Microsoft Excel.
- Selecione a aba Dados.
![Aba de Dados do Excel](/wioi-duplicate-finder-docs/excel-import-data-tab.png)
- Clique em De Texto/CSV.
- Navegue e selecione o arquivo CSV exportado.
- Na janela de visualização de importação, defina a Origem do Arquivo (ou Codificação) para 65001: Unicode (UTF-8) se ela já não estiver selecionada.
![Selecionar UTF8](/wioi-duplicate-finder-docs/excel-import-origin.png)
- Verifique se os caracteres especiais aparecem corretamente na visualização.
- Clique em Carregar.

Isso garante que todo o texto seja importado usando a codificação UTF-8 correta e evita a corrupção de caracteres. Seu conjunto de dados agora aparecerá no Excel, geralmente com uma formatação colorida. Você pode remover essa formatação clicando no menu suspenso Estilo de Tabela no canto superior direito e selecionando a tabela sem estilo. Também é recomendado congelar a primeira linha (os cabeçalhos dos campos) na aba Exibir enquanto trabalha com os dados, para que você sempre possa ver os cabeçalhos dos campos.

![Formatação da Tabela](/wioi-duplicate-finder-docs/excel-import-table.png)
