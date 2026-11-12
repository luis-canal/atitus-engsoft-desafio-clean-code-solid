class EmailService {
    enviarEmail(pedido) {
        console.log(`Enviando e-mail para ${pedido.clienteEmail}...`);
    }
}

module.exports = EmailService;