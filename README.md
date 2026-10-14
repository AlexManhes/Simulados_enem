# Simulados ENEM — Na prática

Site interativo para preparação para o ENEM: escolha entre as provas oficiais de 2024 e 2025 (180 questões cada) e o simulado autoral de 2026 (20 questões).

## Recursos

- Questões de Linguagens, Ciências Humanas, Ciências da Natureza e Matemática.
- Navegação entre questões e revisão das respostas antes de finalizar.
- Progresso salvo no navegador usando localStorage.
- Resultado com acertos, erros, questões em branco e desempenho por área.
- Cadernos azuis da aplicação regular de 2024 e 2025, exibidos com um leitor de páginas e zoom.
- Escolha de inglês ou espanhol e progresso independente por ano e língua estrangeira.
- Correção oficial com questões anuladas fora da contagem.
- Correção comentada no simulado de 2026 e filtro para revisar erros.
- Layout adaptado para celular e computador.

## Como usar

Sirva os arquivos com um servidor estático, por exemplo `python -m http.server 8000`, e abra http://localhost:8000. Não há etapa de compilação. As provas oficiais precisam de conexão para acessar os cadernos do Inep e o PDF.js via CDN.

Para hospedar no GitHub Pages, configure a publicação a partir da raiz da branch `main` em Settings → Pages.

## Arquivos

- `index.html`: estrutura da página.
- `style.css`: estilos e layout responsivo.
- `questions.js`: questões, alternativas, gabarito e explicações.
- `app.js`: navegação, armazenamento e correção.
- `hub.js` e `hub.css`: seleção dos anos, folha de respostas e correção oficial.
- `official.js`: gabaritos oficiais dos cadernos azuis, com as duas línguas e as anuladas.
- `reader.html` e `reader.js`: leitor de páginas usando PDF.js 6.4.299 (Apache-2.0), carregado do jsDelivr.

## Fontes oficiais

- https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos/2024
- https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos/2025

São usados os cadernos 1 (1º dia) e 7 (2º dia), ambos azuis da aplicação regular. As anuladas são a questão 129 em 2024 e as questões 123, 132 e 174 em 2025. A redação está no caderno, mas não tem avaliação automática.

O site carrega fontes do Google Fonts, com fontes locais como alternativa. As respostas ficam apenas no navegador do participante.

Este é um simulado autoral, não a prova oficial do ENEM 2026. O resultado não corresponde à nota TRI.
