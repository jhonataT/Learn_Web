// Uma função é um bloco de código nomeado para que você possa chamar esse bloco quantas vezes quiser;
// Funcao sem retorno:
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(3, 5);
imprimirSoma(10.3, 5); 


// Função com retorno:

function soma(a, b = 0){
    return a + b;
}

console.log(soma(18, 4));
console.log(soma(18)); // Já há um valor padrão para b (0);
console.log(soma()); // Não há valor inicial para a, logo o resultado será Not a Number;




