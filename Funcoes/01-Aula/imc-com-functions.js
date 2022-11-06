/*
O IMC - Indice de massa corporal é um critério da organização mundial da saude para dar uma indicação sobre
a confição de peso de uma pessoa adulta.

formula do imc:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:

-Abaixo de 18.5 - abaixo do peso;
-Entre 18.5 e 25 - peso normal;
-Entre 25 e 30 - acima do peso;
-Entre 30 e 40 - obeso;
-Acima de 40 - obesidade grave;
*/

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 &&imc <= 25) {
        return 'Peso Normal';
    } else if (imc >= 25 &&imc <= 30) {
        return 'Acima do Peso';
    } else if (imc >= 30 &&imc <= 40) {
        return 'Obeso';
    } else if (imc > 40) {
        return 'Obsidade Grave';
    }
}

(function (){
    const peso = 70;
    const altura = 1.70;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
