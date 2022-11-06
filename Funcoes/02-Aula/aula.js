function escrevaMeuNome(nome){
    return nome;
}

function verificarIdade(idade){
    if (idade < 18){
        return 'Menor de Idade'
    }else {
        return 'Maior de Idade'
    }
}


(function(){
    console.log(escrevaMeuNome('Guilherme'));
    console.log(escrevaMeuNome('Gabriela'));

    console.log('===================//=================');

    console.log(verificarIdade(10));
    console.log(verificarIdade(25));

    console.log('==================//==================');

    console.log('Seu nome é ' + escrevaMeuNome('Guilherme') + ' e é ' + verificarIdade(26));
})();