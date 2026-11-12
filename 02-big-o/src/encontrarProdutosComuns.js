function encontrarProdutosComuns(listaA, listaB) {

  const setB = new Set(listaB);
  const produtosComuns = [];

  for (const produto of listaA) {
    if (setB.has(produto)) {
      produtosComuns.push(produto);
    }
  }
  
  return produtosComuns;
}

module.exports = encontrarProdutosComuns;
