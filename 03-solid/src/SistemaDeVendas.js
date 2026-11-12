const CalculadoraVenda = require('./CalculadoraVenda');
const EmailService = require('./EmailService');
const PedidoRepository = require('./PedidoRepository');
const PedidoValidator = require('./PedidoValidator');

class SistemaDeVendas {
  constructor() {
    this.pedidoValidator = new PedidoValidator();
    this.calculadoraVenda = new CalculadoraVenda();
    this.emailService = new EmailService();
    this.pedidoRepository = new PedidoRepository();
  }

  async processarVenda(pedido) {
    this.pedidoValidator.validar(pedido);

    const total = this.calculadoraVenda.calcularVenda(pedido);

    const pedidoProcessado = {
      ...pedido,
      total,
      status: "pago"
    };

    this.pedidoRepository.salvarPedido(pedidoProcessado);
    this.emailService.enviarEmail(pedidoProcessado);

    return pedidoProcessado;
  }
}

module.exports = SistemaDeVendas;