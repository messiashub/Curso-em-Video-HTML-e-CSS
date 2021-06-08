
// DIFERENÇA ENTRE FOREACH E MAP

const numeros = [1,2,3,6,8,9];

// foreach() => Chama uma função para cada elemento em um array
//              Não se pode amarzenar em uma váriavel
console.log('foreach')
const num = numeros.forEach((n)=>{ 
    n * 2;
});
    console.log(num);
////////////////////////////////

// map()  => Chama um função para cada elemento do array e devolve um novo array
//          Pode-se amarzenar em uma variavel que vai retornar um novo array
//          Não altera o array original
console.log('Map')
const num2 = numeros.map(x =>
    x * 2
)
 console.log(num2);
