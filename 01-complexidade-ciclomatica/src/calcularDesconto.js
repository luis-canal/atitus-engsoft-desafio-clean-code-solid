const descontos = {
  premium: (cliente, valor) => {
    if (valor > 1000) {
      return valor * (cliente.anosCadastro > 5 ? 0.20 : 0.15);
    }

    if (valor > 500) {
      return valor * 0.10;
    }

    return valor * 0.05;
  },

  gold: (cliente, valor) => {
    if (valor > 1000) {
      return valor * 0.10;
    }

    return valor * 0.02;
  }
};

function calcularDesconto(cliente, valor) {
  const regraDesconto = descontos[cliente.tipo];

  if (!regraDesconto) {
    return 0;
  }

  return regraDesconto(cliente, valor);
}

module.exports = calcularDesconto;