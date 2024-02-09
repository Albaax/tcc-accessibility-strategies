# Estratégias para Integração de Acessibilidade em Ciclos de Desenvolvimento Rápidos para Desenvolvedores Front-end

Este repositório tem como objetivo oferecer apoio ao desenvolvimento do TCC, focando nos casos de uso abordados no trabalho. Serão apresentados passo a passo, mostrando os resultados obtidos e analisando com mais detalhes as ferramentas de apoio e como elas podem auxiliar o desenvolvedor. Além disso, será analisada a importância de cada abordagem no desenvolvimento para a inclusão da acessibilidade.

## Como executar o projeto

Tendo como pré-requisitos a instalação prévia de ferramentas como Node com npm e Git, você pode clonar o repositório como:

`git clone https://github.com/Albaax/tcc-accessibility-strategies.git`

e depois, localmente instalar as dependências com:

`npm install`

Com as dependências instaladas você pode abrir o storybook onde os casos estão separados para observação:

`npm run storybook`

Aqui, você já poderá interagir com os casos como pode-se ver na imagem abaixo:

![Interface do storybook](/src/assets/visual-storybook.png)

## Objetivo do trabalho

Segundo <a href="https://webaim.org/projects/million">Webaim</a>, cerca de 96.8% das páginas iniciais da internet apresentam algum erro de acessibilidade de acordo com as diretrizes do WCAG.

Este trabalho tem como objetivo apresentar métodos de desenvolvimento voltados para a inclusão da acessibilidade, os quais podem ser integrados de maneira mais simples ao processo de desenvolvimento para os front-ends. O foco está em eliminar os erros mais comuns de acessibilidade frequentemente encontrados em sites da web com objetivo de diminuir a estatística mencionada.

## Ferramentas de apoio à acessibilidade

As ferramentas de apoio utilizadas no projeto são:

- Axe Accessibility Linter (extensão do VSCode)
- Webhint (extensão do VSCode)
- Addon/a11y (plugin do Storybook)
- Google Lighthouse
- Leitor de tela

Obs.: A maioria das ferramentas de acessibilidade utiliza o mecanismo de teste axe em sua estrutura. <a href="https://github.com/dequelabs/axe-core">Axe</a> é uma ferramenta de teste de acessibilidade para sites e outras interfaces de usuário baseadas em HTML. Por isso, é comum que as ferramentas forneçam feedbacks semelhantes em alguns casos.

## Passo a passo do desenvolvimento

Nesta seção, será apresentado um resumo do processo de desenvolvimento dos casos de teste do trabalho.

Inicialmente, será exibida a aparência do caso após o desenvolvimento inicial, sem considerar a acessibilidade. Em seguida, será iniciada a abordagem para tornar o caso acessível, começando pela abordagem de eficiência no desenvolvimento.

### Abordagem de Eficiência

Esta abordagem destaca a utilidade das ferramentas, como extensões de IDEs e o plugin do Storybook, que oferecem suporte à acessibilidade. Elas permitem a detecção e correção de erros comuns de acessibilidade durante o desenvolvimento. Adotar essa abordagem é crucial, pois muitos erros relacionados à semântica do HTML podem ser evitados nessa etapa.

### Abordagem Quantitativa

A abordagem quantitativa busca quantificar a acessibilidade de uma tela/componente utilizando a ferramenta Google Lighthouse. Essa ferramenta avalia a conformidade com os critérios de acessibilidade baseados nas diretrizes do WCAG. Dessa forma, é possível identificar erros que não foram detectados na etapa anterior, já que a análise é feita de forma abrangente, considerando todo o HTML da página como um conjunto.

### Abordagem Subjetiva

A subjetividade surge quando as ferramentas automatizadas não conseguem identificar todos os erros de acessibilidade, que podem ser descobertos apenas por meio de uma análise mais detalhada. Nesta abordagem, utiliza-se um Leitor de Tela para obter uma melhor compreensão do conteúdo apresentado. Se o desenvolvedor identificar algum problema, ele poderá corrigi-lo com base nas diretrizes do WCAG.

## Casos abordados

Os casos abordados no desenvolvimento são:

- (1) Ausência de textos alternativos em imagens
- (2) O desenvolvimento acessível de um componente UI (Tab)
- (3) Estruturação de seções por headings ordenados corretamente
- (4) Inclusão de labels em inputs de formulários

Esses casos podem ser observados detalhadamente na pasta `src/components/<Case>`.

## Estatísticas dos casos abordados

Segundo <a href="https://webaim.org/projects/million">WebAim</a>, ao analisar as 1.000.000 páginas iniciais mais acessadas da internet, foram identificados 49.991.225 erros de acessibilidade distintos, resultando em uma média de 50,0 erros por página.

Em relação às imagens, em uma amostra de 43 milhões delas, aproximadamente 22% não possuíam texto alternativo, enquanto 10,9% continham textos alternativos questionáveis, como "imagem", "gráfico", "em branco" ou um nome de arquivo. Isso significa que cerca de um terço das imagens não ofereciam textos acessíveis aos usuários, prejudicando especialmente aqueles que dependem de leitores de tela.

Os títulos são cruciais para a navegação dos leitores de tela pelo conteúdo das páginas. Foram identificados mais de 24,7 milhões de títulos, sendo que cerca de 1.150.000 deles estavam em níveis de título ignorados, como o uso de `<h2>` para `<h4>`. Essa prática foi observada em 42,2% de todas as páginas analisadas, e aproximadamente 8% delas não continham nenhum título.

Quanto aos formulários, a quantidade de inputs continua aumentando, sendo que cerca de 36% deles não estão devidamente rotulados, seja através de `<label>`, [aria-label], [aria-labelledby] ou [title]. Embora esse número seja significativo, houve melhorias ao longo dos anos. Esse problema impacta diretamente na capacidade de usuários com deficiência de submeterem formulários de maneira eficaz.

## Resultados gerais

A tabela abaixo demonstra quais ferramentas foram úteis na inclusão da acessibilidade oferecendo um resumo sobre os casos de teste.

| Casos de teste                      | Extensões VSCode | Addon/a11y | Lighthouse | Leitor de Tela |
| ----------------------------------- | ---------------- | ---------- | ---------- | -------------- |
| Textos alternativos em imagens      | Sim              | Sim        | Sim        | Sim            |
| Componente de UI Tab                | Não              | Não        | Não        | Sim            |
| Estruturação de seções por headings | Não              | Sim        | Sim        | Não\*          |
| Rotulação de inputs em formulários  |                  |            |            |                |

\* Com ressalvas para uma análise mais detalhada, na qual o LT poderia ser útil, embora sua abordagem não seja tão simples para o desenvolvedor.

## Conclusões

## Contato

Caso deseja entrar em contato comigo:

<a href = "mailto:albertohelbig@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/alberto-helbig" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
