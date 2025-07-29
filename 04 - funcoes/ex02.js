function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const precoEtiqueta = 100.00;
const formaPagamento = 1; // 1 - Débito, 2 - Dinheiro/PIX, 3 - 2x, 4 - Acima de 2x
let precoFinal;

if (formaPagamento === 1) {
    precoFinal = aplicarDesconto(precoEtiqueta, 10);
} else if (formaPagamento === 2) {
    precoFinal = aplicarDesconto(precoEtiqueta, 15);
} else if (formaPagamento === 3) {
    precoFinal = precoEtiqueta;
} else {
    precoFinal = aplicarJuros(precoEtiqueta, 10);
}

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);