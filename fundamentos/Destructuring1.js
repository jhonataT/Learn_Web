// Um operador de desestruturação ( Ele tira da estrutura(objeto) alguma coisa);
// Seria uma forma de tirar os elementos de um array, exemplo;
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 90,
    }
}
// Supondo que eu queira extrair idade ou nome de pessoa;
const { nome, idade} = pessoa; // Tire, de dentro de objeto, o atributo nome e idade;

console.log(nome, idade);

// Para extrair e atribuir à uma variável;
const { nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, bemHumorada = true} = pessoa; // Se não vier nada de pessoa (bemHumorada vai assumir um valor padrão de true);

console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep = null} } = pessoa;
console.log(logradouro, numero, cep);

