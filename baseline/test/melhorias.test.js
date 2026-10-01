const op = require('../src/operacoes');

describe('Casos que faltavam nos testes iniciais', () => {
  test('confere a mensagem da divisão por zero', () => {
    expect(() => op.divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    expect(op.divisao(0, 2)).toBe(0);
  });

  test('aceita raiz de zero e rejeita números negativos', () => {
    expect(op.raizQuadrada(0)).toBe(0);
    expect(() => op.raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test.each([[0, 1], [1, 1], [2, 2], [5, 120]])('calcula o fatorial de %i', (entrada, esperado) => {
    expect(op.fatorial(entrada)).toBe(esperado);
  });

  test('rejeita fatorial negativo', () => {
    expect(() => op.fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });

  test('trata soma, média e produto de arrays vazios e unitários', () => {
    expect(op.mediaArray([])).toBe(0);
    expect(op.mediaArray([8])).toBe(8);
    expect(op.somaArray([])).toBe(0);
    expect(op.somaArray([-3, 1, 2])).toBe(0);
    expect(op.produtoArray([])).toBe(1);
    expect(op.produtoArray([7])).toBe(7);
    expect(op.produtoArray([2, 0, 4])).toBe(0);
  });

  test('rejeita arrays vazios nas operações sem resultado definido', () => {
    expect(() => op.maximoArray([])).toThrow('Array vazio не possui valor máximo.');
    expect(() => op.minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
    expect(() => op.medianaArray([])).toThrow('Array vazio не possui mediana.');
  });

  test.each([[-2, true, false], [0, true, false], [3, false, true]])('verifica a paridade de %i', (n, par, impar) => {
    expect(op.isPar(n)).toBe(par);
    expect(op.isImpar(n)).toBe(impar);
  });

  test('calcula o MDC quando não há resto e quando há várias iterações', () => {
    expect(op.mdc(12, 0)).toBe(12);
    expect(op.mdc(48, 18)).toBe(6);
    expect(op.mdc(17, 13)).toBe(1);
    expect(op.mmc(6, 8)).toBe(24);
  });

  test.each([[-1, false], [0, false], [1, false], [2, true], [4, false], [9, false], [11, true]])('verifica se %i é primo', (n, esperado) => {
    expect(op.isPrimo(n)).toBe(esperado);
  });

  test.each([[0, 0], [1, 1], [2, 1], [3, 2]])('calcula Fibonacci para %i', (n, esperado) => {
    expect(op.fibonacci(n)).toBe(esperado);
  });

  test.each([[-1, 0], [0, 0], [5, 5], [10, 10], [11, 10]])('limita o valor %i ao intervalo', (valor, esperado) => {
    expect(op.clamp(valor, 0, 10)).toBe(esperado);
  });

  test('distingue divisões exatas das que têm resto', () => {
    expect(op.isDivisivel(10, 3)).toBe(false);
    expect(op.isDivisivel(0, 3)).toBe(true);
    expect(op.isDivisivel(5, 0)).toBe(false);
  });

  test.each([[100, 212], [-40, -40], [25, 77]])('converte %i graus Celsius', (celsius, fahrenheit) => {
    expect(op.celsiusParaFahrenheit(celsius)).toBeCloseTo(fahrenheit, 10);
    expect(op.fahrenheitParaCelsius(fahrenheit)).toBeCloseTo(celsius, 10);
  });

  test('rejeita o inverso de zero', () => {
    expect(() => op.inverso(0)).toThrow('Não é possível inverter o número zero.');
    expect(op.inverso(-2)).toBe(-0.5);
  });

  test.each([[5, 5, false, false, true], [2, 5, false, true, false], [5, 2, true, false, false]])('compara %i e %i', (a, b, maior, menor, igual) => {
    expect(op.isMaiorQue(a, b)).toBe(maior);
    expect(op.isMenorQue(a, b)).toBe(menor);
    expect(op.isEqual(a, b)).toBe(igual);
  });

  test('mantém a igualdade estrita entre os valores', () => {
    expect(op.isEqual(7, '7')).toBe(false);
  });

  test('calcula a mediana de arrays desordenados, pares e unitários', () => {
    const numeros = [20, 1, 10, 2];
    expect(op.medianaArray(numeros)).toBe(6);
    expect(numeros).toEqual([20, 1, 10, 2]);
    expect(op.medianaArray([30, 2, 10])).toBe(10);
    expect(op.medianaArray([9])).toBe(9);
  });
});
