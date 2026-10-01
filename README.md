# Análise de eficácia de testes com teste de mutação

Usei o projeto de operações matemáticas indicado pelo professor e comparei os testes iniciais com uma suíte mais completa.

## Resultados

| Etapa | Testes | Cobertura de linhas | Mutation Score | Mutantes |
| --- | ---: | ---: | ---: | ---: |
| Inicial | 50 | 98,64% | 73,71% | 213 |
| Apenas testes novos | 89 | 100% | 96,71% | 213 |
| Testes e simplificação de código | 89 | 100% | 99,01% | 203 |

Os testes novos verificam limites, mensagens de erro, arrays vazios, comparações iguais, números não primos, conversões fora de zero e medianas de arrays desordenados e pares.

Depois dos testes, removi duas condições redundantes: o retorno antecipado do fatorial de zero/um e o retorno do produto de um array vazio. O laço do fatorial já retorna 1 nesses casos e o reduce do produto já começa em 1. Por isso, a melhoria de 96,71% para 99,01% também envolve uma simplificação do código, e não somente novos testes. Nenhum tipo de mutação foi excluído.

Os dois sobreviventes finais são equivalentes para entradas numéricas: trocar `<` por `<=` ou `>` por `>=` em `clamp` devolve o mesmo valor quando ele é igual ao limite. Os timeouts contam como detecção no score do Stryker, mas não são asserções que falharam.

## Execução

É necessário Node.js 22 ou superior.

```bash
npm ci
npm test -- --runInBand
npm test -- --coverage --runInBand
npm run mutation
```

Para repetir a análise inicial:

```bash
npm run test:initial
npm run mutation:initial
npm run mutation:tests-only
```

A pasta `baseline` guarda o código e os testes iniciais. A suíte normal usa apenas a pasta `test`.

## Evidências

- `reports/initial/mutation.html`: relatório inicial.
- `reports/tests-only/mutation.html`: resultado dos testes novos sem simplificar o código.
- `reports/final/mutation.html`: resultado final.
- `reports/*/mutation.json`: dados completos dos mutantes.
- `relatorio/Relatorio_Teste_de_Mutacao.pdf`: relatório escrito.

Relatório de Paulo Henrique Fonseca de Assis, matrícula 829040, disciplina Teste de Software.

## Projeto base

Fonte: https://github.com/CleitonSilvaT/operacoes-mutante

Commit utilizado: `c10621a4fe20f8332e783e06cad0e1b98449aad2`.

O código original usava CommonJS com `type: module`. Ajustei o pacote para CommonJS e retirei os comentários, preservando a lógica inicial. Este repositório contém uma cópia do projeto base; não é um fork registrado pelo GitHub.
