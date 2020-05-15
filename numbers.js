const peso1 = 2.0; // Declara uma variavel constante;
const peso2 = Number('10.2'); // Declara uma variavel constante;

console.log(peso1, peso2); // Imprime os valores das variáveis;7
console.log(Number.isInteger(peso1)); // Mostra se o peso1 é inteiro;
console.log(Number.isInteger(peso2)); // Mostra se o peso2 é inteiro;

const avaliacao1 = 9.871; // Nota de um aluno qualquer;
const avaliacao2 = 6.871; // Nota de outro aluno qualquer;

const total = avaliacao1 * peso1 + avaliacao2 * peso2; // O total das notas com o peso específico;
const media = total / (peso1 + peso2); // A média ponderada;

console.log(media); // Imprime a media sem limitação de casas decimais;
console.log(media.toFixed(2)); // Limitando as casas decimais;
console.log(media.toString(2)); // Mostra a versão binária da constante;
console.log(typeof media); // Mostra o tipo de dado da variável;

    // FIM da aula.