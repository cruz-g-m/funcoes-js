/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 * e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o calculo
 * adequado.
 * 
 * Código condição de pagamento:
 * - A vista debito, recebe 10% de desconto;
 * - A vista no dinheiro ou pix, recebe 15% de desconto;
 * - Em duas vezes, preço normal de etiqueta sem juros;
 * - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

function aplicarDesconto(valor, desconto){
    return valor - ((valor * desconto) / 100);
}

function aplicarJuros(valor, juros){
    return valor + ((valor * juros) / 100);
}


 let valorProduto = 100;
 const formaDePagamento = 3;
 
 (function (){
    if(formaDePagamento === 1){
     console.log(aplicarDesconto(valorProduto, 10));
 }else if(formaDePagamento === 2){
     console.log(aplicarDesconto(valorProduto, 15));
 }else if(formaDePagamento === 3){
     console.log(valorProduto);
 }else if(formaDePagamento === 4){
    console.log(aplicarJuros(valorProduto, 10));
 }
})();