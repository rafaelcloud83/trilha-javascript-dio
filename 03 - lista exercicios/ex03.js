/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
    etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo 
    adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100.00;
const formaPagamento = 1; // 1 - Débito, 2 - Dinheiro/PIX, 3 - 2x, 4 - Acima de 2x
let precoFinal;

if (formaPagamento === 1) {
    precoFinal = precoEtiqueta - (precoEtiqueta * 0.10);
} else if (formaPagamento === 2) {
    precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
} else if (formaPagamento === 3) {
    precoFinal = precoEtiqueta;
} else {
    precoFinal = precoEtiqueta + (precoEtiqueta * 0.10);
}

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);