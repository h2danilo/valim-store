// "export const format = " => abaixo destruturou a funcao format e renomeou a funcao para "formatPrice"
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
