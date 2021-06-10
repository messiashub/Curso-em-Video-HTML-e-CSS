
// FUNÇÃO  


/* É UM BLOCO DE COMANDOS
CARACTERÍSTISCAS:
1 - PODE OU NÃO RETORNAR UM VALOR
2 - */

/* EX DE FUNÇÕES */

function nome(){
    return 'claudinei'
};

console.log(nome());

function nome2() {
    console.log('Messias')

};
nome2(); // CHAMANDO A FUNÇÃO

// FUNÇÃO COM PARAMETROS

function nome3(nome, sobrenome){  // PARÂMETROS SÃO  VARIAVEIS INTERNAS QUE SÃO USADAS DENTRO DA  FUNÇÃO
    console.log(nome,sobrenome);
}

nome3('claudinei','messias');  // CHAMANDO A FUNÇÃO

function calculaMedia(n1,n2,n3){
    return (n1 + n2) / n3;
}

console.log(calculaMedia(5,10,3));

let pessoa = {
    nome:"claudinei",
    sobrenome:'messias',
    idade:49,
    profissao:'indefinida'
};

function novaPessoa(nome,sobrenome,idade,profissao){
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    pessoa.idade= idade;
    pessoa.profissao = profissao

};

novaPessoa('claudio','calvacante',49, 'lava-rapido');
console.log(pessoa.nome)