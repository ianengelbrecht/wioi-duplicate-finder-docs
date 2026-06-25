---
title: Configurações do Aplicativo
description: Configure o código da coleção, formatos de exportação e locais de backup do banco de dados.
---

A aba de configurações permite que você configure seus padrões de trabalho locais, formatos de exportação e preferências de backup do banco de dados. Essas configurações são salvas localmente.

Para acessar as configurações:
1. Faça login no aplicativo.
2. No painel, clique no botão **Configurações do Aplicativo** no painel de navegação esquerdo.

![Painel de Configurações do Aplicativo](/wioi-duplicate-finder-docs/settings-tab.png)

---

## Configurações

### Código de Coleção de Trabalho
- **O que é**: A sigla padrão internacionalmente reconhecida para o seu herbário de origem (ou seja, o herbário no qual você está capturando registros, por exemplo, `TAN` para o Herbário de Tsimbazaza, `NU` para o Herbário da Universidade de KwaZulu-Natal, `PRE` para o Herbário Nacional em Pretória).
- **Como funciona**: Inserir um código aqui o salva como o código de coleção padrão. Sempre que você capturar ou selecionar um espécime, este valor é registrado para a instituição de origem do espécime.
- Você só precisa capturar este valor uma vez, ao começar a usar o aplicativo.

### Formato de Exportação
- **O que é**: O formato do arquivo de valores separados por vírgula (CSV) gerado ao exportar suas sessões.
- **Opções**:
  - **Darwin Core (DwC)**: Mapeia os dados para cabeçalhos padrão DwC como `catalogNumber`, `recordedBy`, `decimalLatitude`, etc.
  - **BRAHMS**: Mapeia os dados para cabeçalhos padrão BRAHMS7 como `BARCODE`, `COLLECTOR`, `DAY`, `MONTH`, `YEAR`, etc. (ideal para importação direta em um banco de dados BRAHMS7).
- Se você tiver outro formato de dados para o qual deseja exportar, como o Microsoft Excel, visite a [página do GitHub]() do projeto e crie uma nova solicitação lá.

### Incluir Referência de Grade (QDS)
- **O que é**: Uma opção de caixa de seleção para calcular o código Quarter Degree Square (QDS).
- **Como funciona**: Se marcado, ao exportar seus registros capturados, o sistema calcula o código QDS (Célula de Grade de Quarto de Grau) a partir das coordenadas GPS (`decimalLatitude` e `decimalLongitude`) e o inclui no conjunto de dados exportado. Os QDSs são usados principalmente em herbários da África Austral e Oriental, mas se você tiver outro sistema de referência de grade que gostaria de usar, por favor crie também uma solicitação no GitHub.

---

## Backups do Banco de Dados

Como todos os espécimes e sessões capturados são armazenados em um arquivo SQLite offline no disco rígido local, backups regulares são essenciais para proteger seu trabalho contra perda de dados ou falha no disco rígido. Os backups são criados automaticamente toda vez que você fecha o aplicativo e são salvos para o dia atual, um por dia para a última semana, um por semana para o último mês e um por mês para os últimos seis meses. Backups desnecessários são removidos automaticamente pelo aplicativo.

![Backups do Banco de Dados](/wioi-duplicate-finder-docs/backups.png)

### Local de Backup do Banco de Dados
- **Campo**: Mostra o caminho da pasta onde os backups são salvos.
- **Escolher pasta**: Abre uma janela do gerenciador de arquivos para você selecionar um diretório no seu computador (ou uma unidade externa/pasta de nuvem).

### Backups Manuais
- **Fazer Backup Agora**: Clique neste botão para fazer um backup instantâneo do seu banco de dados. Um arquivo `.db` com carimbo de data/hora contendo todos os usuários, sessões e registros capturados será criado em sua pasta de backup. Uma notificação de sucesso exibirá o caminho do backup salvo. Os backups manuais não são removidos do histórico de backups como os automáticos.

### Restaurando um Backup
- **Restaurar Backup**: Clique neste botão se precisar restaurar o aplicativo para um estado anterior.
- Você será solicitado a selecionar um arquivo de backup `.db`.
- **AVISO**: A restauração de um backup substituirá o banco de dados local atual. Certifique-se de fazer backup de todos os novos dados antes de prosseguir.
- Uma caixa de diálogo de confirmação aparecerá para evitar substituições acidentais.

### Gerenciando seus backups
É uma boa ideia fazer cópias dos seus arquivos de backup e mantê-las em um disco rígido separado ou copiá-las para outro computador, caso o computador atual quebre, seja roubado ou sofra qualquer tipo de desastre. Também é uma boa prática manter uma segunda cópia dos seus backups fora do local de trabalho. Os backups do banco de dados são apenas uma cópia do arquivo do banco de dados, então fazer essas cópias é fácil.
