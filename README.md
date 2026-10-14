# Simulados ENEM — Na prática

Site para responder às provas oficiais de 2024 e 2025 (180 questões cada) e ao simulado autoral de 2026 (20 questões).

## Estrutura

```text
index.html                  Página inicial
assets/
  css/
    main.css                Estilos gerais e simulado autoral
    hub.css                 Seleção dos anos e provas oficiais
    reader.css              Estilos do leitor de PDF
  js/
    app.js                  Simulado autoral e armazenamento
    hub.js                  Seleção, provas oficiais e resultados
    reader.js               Leitura dos cadernos, páginas e zoom
  data/
    questions.js            Questões e explicações do simulado de 2026
    official.js             Gabaritos oficiais de 2024 e 2025
pages/
  reader.html               Página do leitor de cadernos
tests/
  simulados.cjs             Correção, idiomas, anuladas e progresso
  paths.cjs                 Verificação dos caminhos dos arquivos
```

## Executar

No repositório GitHub, execute `python -m http.server 8000` na raiz e acesse http://localhost:8000. No checkout do Sites, os arquivos públicos ficam em `dist/`: execute `python -m http.server 8000 --directory dist`.

Não há compilação nem instalação de pacotes. O leitor carrega PDF.js 6.4.299 (Apache-2.0) pelo jsDelivr e os cadernos do portal do Inep; essas funções precisam de conexão. As fontes vêm do Google Fonts, com alternativas locais.

## Verificar

```sh
node tests/simulados.cjs
node tests/paths.cjs
```

## Funcionalidades

- Escolha do ano e da língua estrangeira (inglês ou espanhol).
- Respostas salvas no navegador, separadas por ano e idioma.
- Navegação, limpeza e revisão das respostas antes da finalização.
- Acertos, erros, questões em branco e resultado por área.
- Anuladas fora da contagem e filtro para revisar os erros.
- Explicações no simulado autoral de 2026.

O resultado não é uma estimativa da nota TRI. A redação está no caderno oficial e não recebe correção automática.

## Fontes

- [Provas e gabaritos de 2024 — Inep](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos/2024)
- [Provas e gabaritos de 2025 — Inep](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos/2025)

São usados os cadernos azuis 1 (1º dia) e 7 (2º dia) da aplicação regular. Anuladas: questão 129 em 2024; questões 123, 132 e 174 em 2025. O material de 2026 é autoral.

Para hospedar no GitHub Pages, use a raiz da branch `main` em Settings → Pages.
