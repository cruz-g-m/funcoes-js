

function sayMyName(name){
    console.log('Your name is ' + name);
}

sayMyName('Guilherme');

/////////////////////////

function quadrado(valor){
    return valor * valor;
}

console.log(quadrado(10));

/////////////////////////

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100, 10));

////////////////////////

function main(){
    console.log('Programa principal');
}