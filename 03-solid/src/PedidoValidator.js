// a classe PedidoValidator deve possuir um métododo chamado validar(pedido) que recebe um pedido verifica se o pedido.itens existe, verifica se a lista de itens não está vazia e lança um erro "pedido sem itens" caso não passe na validação. Caso o pedido seja válido, o método deve retornar true.
class PedidoValidator {
  validar(pedido) {
        if (!pedido.itens || pedido.itens.length === 0) {
            throw new Error("Pedido sem itens");
        }
        return true;
    }
}

module.exports = PedidoValidator;