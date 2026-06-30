---
title: Sobre o Localizador de Duplicatas
---

O **Localizador de Duplicatas de Espécimes de Herbário e Ferramenta de Captura** é um aplicativo de desktop multiplataforma projetado para simplificar a digitalização de espécimes e a captura de dados botânicos. Curadores e pesquisadores botânicos podem usá-lo para inserir registros de herbário de forma eficiente, padronizar dados taxonômicos e identificar automaticamente duplicatas.

![Captura de tela do espaço de trabalho principal do Localizador de Duplicatas](/wioi-duplicate-finder-docs/screenshot.png)
O espaço de trabalho principal de captura de dados do Localizador de Duplicatas

## Principais Recursos

- **Identificação de Duplicatas**: Busca automaticamente em um conjunto de dados local de espécimes de referência (por exemplo, outros dados de coleção baixados do GBIF) para encontrar duplicatas. Isso permite que os usuários reutilizem rapidamente dados já digitalizados em vez de digitar os registros do zero.
- **Padronização Taxonômica**: Integra-se com uma cópia local do banco de dados de referência **World Checklist of Vascular Plants (WCVP)** da Kew. Isso fornece sugestões de preenchimento automático para nomes científicos, evitando erros de ortografia e vinculando automaticamente os espécimes a identificadores de táxons oficiais.
- **Primeiro Offline (Offline First)**: Construído para funcionar completamente offline, armazenando a autenticação do usuário, configurações, sessões de captura e registros de espécimes em um banco de dados SQLite local seguro. Não há necessidade de internet após o download inicial. 

## Informações sobre Financiadores

Esta ferramenta foi desenvolvida para o Réseau d'herbiers de l'océan Indien occidental (RHOIO, Rede de Herbários do Oceano Índico Ocidental) no âmbito do programa de biodiversidade [**VARUNA**](https://varuna-biodiversite.org/):
- **Financiado por**: Agência Francesa de Desenvolvimento (AFD - Agence Française de Développement).
- **Implementado por**: Expertise France.
- **Objetivo**: O VARUNA visa preservar a rica e única biodiversidade das ilhas do Oceano Índico Ocidental por meio do fortalecimento de capacidades, compartilhamento de dados e modernização de coleções de herbários.

![Logotipo do Financiador VARUNA](/wioi-duplicate-finder-docs/funders.png)

## Relatando Bugs e Feedback

O aplicativo é de código aberto e mantido ativamente. 
- Se você encontrar bugs, tiver solicitações de recursos ou quiser enviar correções de tradução, registre um problema em nosso [repositório GitHub](https://github.com/ianengelbrecht/wioi-duplicate-finder/issues).
