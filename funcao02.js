const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variavel;

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));


// retorno implicito: (arrow function)
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const print2 = a => console.log(a);
print2('TESTE!!');
