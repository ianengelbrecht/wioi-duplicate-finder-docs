---
title: Preparação de dados
description: Passos para a preparação de conjuntos de dados de referência a partir de dados do GBIF
pagination: false
---

O Localizador de Duplicatas (Duplicate Finder) usa um conjunto de dados de referência de registros de espécimes de outros herbários, obtidos do GBIF. Os dados do GBIF não são perfeitos: os herbários frequentemente publicam seus dados como estão, sem limpeza (o que é normal), e às vezes não usam o padrão Darwin Core de forma consistente (por exemplo, os números de coletor podem estar armazenados em `dwc:recordedBy` em vez de `dwc:recordNumber` ou `dwc:fieldNumber`). Por esse motivo, algumas etapas de preparação de dados são necessárias antes que um novo conjunto de dados possa ser importado para o aplicativo. As etapas abaixo mostram o processo a ser seguido, e fornecemos alguns scripts e orientações para ajudá-lo ao longo do caminho.

### Download de dados do GBIF

Primeiro, você precisa extrair os dados que deseja do GBIF. Acesse o [site do GBIF](https://www.gbif.org/), clique no botão `Get data` (Obter dados) na parte superior da página e selecione `Occurrences` (Ocorrências). Na página que se abre, você pode definir filtros no conjunto de dados do GBIF para configurar o seu download. 

Primeiro, clique em `Scientific name` (Nome científico), digite 'Tracheo' e selecione a opção para `Tracheophyta` (plantas vasculares — embora você possa selecionar outro táxon se for mais apropriado para a sua coleção).

![Scientific name](/wioi-duplicate-finder-docs/gbif-scientific-name.png)

Em seguida, clique em `Country or area` (País ou área) e digite e selecione os países para os quais deseja obter registros. 

![Country](/wioi-duplicate-finder-docs/gbif-country.png)

Depois, vá em `More` (Mais), clique em `Basis of record` (Base do registro), selecione `Preserved Specimen` (Espécime preservado) e clique em `Apply` (Aplicar). Isso é necessário para filtrar outros tipos de observações, como registros de plantas vivas do iNaturalist.

![Basis of Record](/wioi-duplicate-finder-docs/gbif-basis-of-record.png)

Você terá a opção de filtrar por coleções de origem específicas. Evite usar as opções `Collection` (Coleção), `Collection code` (Código da coleção) ou `dwc:datasetName` na seção `Record` (Registro) do filtro `More` — esses não são os campos corretos para usar aqui. Em vez disso, role para baixo até a seção `Provenance` (Proveniência). Lá, você verá a opção `Dataset` (Conjunto de dados), que pode usar para escolher os conjuntos de dados relevantes publicados no GBIF, como Kew, Paris ou Missouri (Tropicos). É uma boa ideia navegar pelos conjuntos de dados disponíveis no GBIF antes de iniciar o download, para que você possa ver exatamente como eles são chamados. Recomendamos filtrar por conjunto de dados dessa forma para obter apenas registros de herbários que provavelmente tenham espécimes duplicados com a sua coleção. Se não fizer isso, obterá registros de um grande número de fontes desnecessárias (você verá os efeitos disso na etapa de códigos de instituição/coleção abaixo). Se não os conhecer, tente descobrir com quais coleções em outras partes do mundo o seu herbário tradicionalmente trocava espécimes no passado — essas são as que você desejará incluir no filtro `Dataset`. 

![Dataset](/wioi-duplicate-finder-docs/gbif-dataset.png)

Depois de selecionar os dados que deseja, clique no botão `Download` na página (registre-se ou faça login, se necessário). Na seção `Darwin Core Archive`, clique em `Configure`, depois em `Continue to Terms` (Continuar para os termos) — você não precisa alterar nenhuma das opções. Marque as caixas de `Data Use Agreement` (Acordo de uso de dados) e `Data Citation` (Citação de dados) após lê-las e clique em `Create Download` (Criar download). Se o número de registros for relativamente pequeno, você poderá esperar alguns minutos enquanto o GBIF prepara o download (um ótimo momento para tomar uma xícara de chá!). Se for um conjunto de dados maior, sinta-se à vontade para fazer outra coisa — o GBIF enviará um e-mail com o link de download quando estiver pronto.

![Dataset](/wioi-duplicate-finder-docs/gbif-configure-continue.png)

Baixe o arquivo para uma pasta no seu computador, descompacte-o e você estará pronto para iniciar as etapas de preparação de dados. 

### Scripts de preparação de dados

Algumas das etapas deste processo usam scripts em Python para limpar e atualizar os dados baixados do GBIF. Esses scripts estão localizados na pasta `data-prep` do repositório do Localizador de Duplicatas, que está [disponível no GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder). Você precisará clonar o repositório no seu computador para executá-los. Sinta-se à vontade para pedir ajuda ao seu assistente de IA favorito se precisar de ajuda para clonar um repositório do GitHub! Você também precisará do Python instalado no seu computador.

### Formatando o conjunto de dados

O arquivo Darwin Core Archive que você baixou inclui um arquivo chamado `occurrence.txt`. Este é um arquivo delimitado por tabulações contendo todos os registros de espécimes com os quais você trabalhará. Como os conjuntos de dados do GBIF são grandes e compilados a partir de muitas fontes, pequenos problemas de formatação ou erros podem ocorrer ocasionalmente. Portanto, a primeira etapa é formatar os dados para garantir que o Localizador de Duplicatas possa lê-los corretamente e filtrar quaisquer registros problemáticos. 

Na pasta `data-prep` do repositório que você clonou, há um script chamado `stream_clean.py`. Esse script processa em fluxo (stream) os registros de `occurrence.txt` para um novo arquivo chamado `occurrence_formatted.csv`. Este agora é um arquivo CSV devidamente formatado que você usará para as próximas etapas. 

Para executar o script, abra um terminal ou prompt de comando na pasta descompactada do seu Darwin Core Archive e execute:
`python "[caminho do repositório]/data-prep/stream_clean.py" .`
Certifique-se de substituir `[caminho do repositório]` pelo caminho real da pasta do repositório que você clonou (por exemplo, `C:/projects/duplicate-finder` no Windows), mantendo-o dentro das aspas.
If precisar de um lembrete rápido das opções de qualquer um desses scripts, você pode executá-los com `-h` em vez do ponto `.` no final. E se ficar travado, sinta-se à vontade para pedir ajuda ao seu assistente de IA favorito!

O script mostrará o progresso na tela enquanto é executado. Ele também cria alguns outros arquivos contendo detalhes sobre quaisquer registros problemáticos encontrados. A tela exibirá o número de registros que foram colocados em quarentena (removidos). Geralmente é um número muito pequeno e você não precisa fazer mais nada com eles. 

![Data prep formatting output](/wioi-duplicate-finder-docs/data-prep-formatting.png)

### Filtrando e corrigindo códigos de herbário

O uso de códigos de herbário padronizados e oficialmente aceitos no Localizador de Duplicatas é importante: facilita ver de onde vêm os registros e garante que o campo de duplicatas seja atualizado corretamente. Infelizmente, muitos registros do GBIF não possuem códigos de coleção limpos (alguns até incluem números de código de barras no campo do código da coleção!), então você precisará limpá-los no seu conjunto de dados. Você também pode notar alguns registros no download que não deseja manter. A limpeza e a padronização dos códigos de coleção ajudam a filtrá-los. Esse é um processo simples de três etapas: extrair as combinações exclusivas de códigos de instituição/coleção, corrigir ou remover os que você não deseja e aplicar essas alterações de volta ao conjunto de dados principal. 

#### Extraindo combinações exclusivas de códigos de instituição/coleção

Primeiro, extraia todas as combinações exclusivas de códigos de instituição/coleção para ver o que precisa ser atualizado. Fornecemos um script chamado `unique_inst_coll_codes.py` para fazer isso. Execute-o como antes:
`python "[caminho do repositório]/data-prep/unique_inst_coll_codes.py" .`
Ele mostrará o progresso e salvará os resultados em `occurrence_formatted_inst_coll_codes.csv` quando concluído. Se você vir milhares de combinações exclusivas, é provável que números de código de barras tenham sido armazenados acidentalmente no campo do código da coleção. Não se preocupe — você corrigirá isso na próxima etapa. 

#### Corrigindo códigos incorretos e desnecessários

Abra o arquivo `occurrence_formatted_inst_coll_codes.csv` recém-criado no Excel (ou em um editor de texto como o Bloco de Notas, se preferir). A lista é ordenada pelo número de espécimes de cada combinação. Você provavelmente notará imediatamente que alguns códigos de herbário estão armazenados no campo `institutionCode`, ou que alguns campos estão em branco. 

Primeiro, remova todas as linhas que você não precisará em seu conjunto de dados de referência. Você pode excluir com segurança as linhas com poucos registros ou de instituições que provavelmente não compartilharão duplicatas com o seu herbário. Leve o seu tempo trabalhando na lista. Se não reconhecer um código, você pode procurá-lo na internet ou pesquisar no [Index Herbariorum](https://sweetgum.nybg.org/science/ih/).  

Enm seguida, verifique se o código da coleção está correto. Se não estiver, especifique o correto na última coluna, `corrected`. (Certifique-se de não modificar as colunas originais de código de instituição e coleção — os scripts precisam delas exatamente como estão para mapear as alterações de volta ao conjunto de dados principal). As correções comuns incluem copiar o código da coleção para a coluna `corrected` quando ele foi colocado incorretamente na coluna da instituição. Certifique-se de usar os códigos formais de herbário em letras maiúsculas para que apareçam corretamente no Localizador de Duplicatas (por exemplo, `NHMUK` para o Natural History Museum, em Londres, deve ser corrigido para `BM`). 

Quando terminar, salve o arquivo. 

![Data prep codes](/wioi-duplicate-finder-docs/data-prep-codes.png)
<span style="font-size: 80%;">Arquivo de códigos de instituição e coleção aberto no Bloco de Notas, após a remoção de códigos indesejados e correções adicionadas.</span>

#### Atualizando códigos de coleção no conjunto de dados principal

Agora, aplique essas alterações de volta ao conjunto de dados principal usando o script `filter_collections.py`. Execute-o com:
`python "[caminho do repositório]/data-prep/filter_collections.py" .`
Se você renomeou algum arquivo, pode executar o script com `-h` em vez do ponto `.` para ver como especificar nomes de arquivos personalizados, ou pedir ajuda a um assistente de IA. Esse script gera um conjunto de dados filtrado chamado `occurrence_formatted_filtered.csv`. Em seguida, vamos padronizar os nomes dos coletores. 

### Padronizando coletores

Padronizar os nomes dos coletores é crucial, pois você geralmente pesquisará duplicatas usando o nome e o número do coletor. Os dados do GBIF frequentemente contêm variações de grafia e erros de transcrição (como erros de digitação de etiquetas de herbário manuscritas), portanto, limpar isso torna as pesquisas por duplicatas muito mais confiáveis.

É importante ressaltar que o resultado não precisa ser completamente perfeito. Foque seu tempo nos nomes que possuem um alto número de registros associados.

Aqui está um fluxo de trabalho sugerido para padronizar os nomes:
- **Extrair** uma lista de strings de coletores exclusivas (`dwc:recordedBy`) do conjunto de dados usando o script Python `generate_collectors.py`.
- **Remover** valores genéricos como `s.n.`, `collector unknown`, `anon`, `agric`, `school`, `botany`, `service`, `flora`, `forest`, `remarks`, etc.
- **Analisar** as strings de coletores restantes para extrair o coletor principal (usando o analisador do Bionomia.net descrito abaixo).
- **Converter** caracteres especiais para caracteres normais (por exemplo, usando `normalize()` no OpenRefine v3.10+).
- **Aparar** (trim) iniciais dos nomes (por exemplo, usando expressões do OpenRefine como `value.replace(/[A-Z\.]+\s/,'').trim()` e `value.replace(/[A-Z\.\s]+$/,'').trim()`).
- **Filtrar** partículas de nomes (por exemplo, *le*, *la*, *de*, *der*, *van*) e converter para maiúsculas ao corrigi-las.
- **Limitar** suas verificações aos nomes não verificados (se estiver no OpenRefine, você pode usar um filtro de faceta em maiúsculas como `value == value.toUppercase()`).
- **Dividir** (split) nos espaços para extrair o sobrenome (nota: isso pode remover sobrenomes compostos sem hífen, os quais você poderá corrigir mais tarde).
- **Verificar** manualmente pela primeira letra, priorizando nomes com alta contagem de registros (mantendo o filtro de maiúsculas ativado).
- **Buscar** manualmente por coletores com sobrenomes compostos e corrigi-los onde for necessário.
- **Filtrar** por nomes que consistem apenas em iniciais e atualizá-los para nomes completos.
- **Converter** para maiúsculas e remover a pontuação e os espaços.
- **Exportar** o resultado final limpo para a próxima etapa.

Várias dessas etapas são muito mais fáceis de realizar usando uma ferramenta como o [OpenRefine](https://openrefine.org/).

#### Usando o Analisador de Nomes do Bionomia

Analisar nomes a partir de strings de texto livre é difícil porque não há um formato padrão para a captura de nomes em diferentes herbários. For exemplo, o nome de um coletor pode ser registrado como `IB Pole-Evans`, `I.B. Pole Evans`, `Pole-Evans, I.B.` ou simplesmente `Pole Evans`. As strings de nomes de coletores também podem conter separadores inconsistentes.

Para facilitar isso, podemos usar o mesmo sistema que o [Bionomia.net](https://bionomia.net/) usa para analisar nomes do GBIF. Ele utiliza o `namae`, que é atualmente um dos melhores analisadores de nomes disponíveis (sem equivalentes comparáveis escritos em Python). Por ser escrito em Ruby, requer uma configuração adicional, mas fornecemos [outro repositório com um wrapper de API simples](https://github.com/ianengelbrecht/ruby-name-parser-api) que você pode executar localmente em seu ambiente de limpeza de dados. Chame essa API com a string do nome bruto para receber uma versão analisada mais limpa (que você pode refinar ainda mais).

### Atualizando o conjunto de dados principal

Com a sua lista de coletores limpa pronta, agora você pode gerar o arquivo final para importação. Fornecemos o `stream_finalize.py` para isso, que executa várias operações:

- Mapeia seus nomes de coletores padronizados de volta aos registros para criar um campo de pesquisa confiável.
- Padroniza os números de coletor, removendo textos extras para que você possa pesquisar números exatos (como `1234` ou `2025/1234`). 
- Traduz códigos de países de duas letras para nomes completos de países usando o arquivo `countryCodes.csv` do repositório. Você pode personalizar os nomes dos países nesse arquivo, se desejar, mas deixe os próprios códigos inalterados.
- Limpa as datas de coleta e identificação (por exemplo, convertendo datas parciais/incorretas como '1 de janeiro' de volta apenas para o ano).
- Realiza outras pequenas correções de formatação do banco de dados.

Execute o script com:
`python "[caminho do repositório]/data-prep/stream_finalize.py" .`
Isso cria `occurrence_final.csv`. Esse é o arquivo que você importará para o aplicativo, mas antes, vamos fazer uma verificação rápida de validação.

### Validação

Antes de importar o arquivo, execute o script `validate.py` para verificar se há campos ausentes ou problemas de formatação:
`python "[caminho do repositório]/data-prep/validate.py" .`
O script imprimirá um relatório na tela. Se você seguiu todas as etapas acima, tudo deve estar correto! Se você modificou algum arquivo manualmente, usou uma ferramenta externa (como o OpenRefine) ou esqueceu de uma etapa, este validador indicará o que precisa ser corrigido antes da importação. 

### Importação de dados

Depois de validado, vá para a [página de configurações](./docs/settings#duplicate-records) e siga as instruções de importação. Você pode optar por anexar esses novos registros ao seu banco de dados existente ou substituí-los inteiramente. Fique tranquilo, isso nunca afetará os registros de espécimes que você registrou no aplicativo.

Boa sorte e boas buscas por duplicatas!
