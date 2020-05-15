//Tipo array / vetor;
//Array, em JS, é muito flexível:
const valores = [1, 2, 3, 4];
console.log(valores[3], valores[0]); // WOW
// console.log(valores[32]);
console.log(valores[4]);
valores[4] = 0;
console.log(valores[4]);

// valores[32] = "TEST";
// console.log(valores[32]);

console.log(valores);
console.log(valores.lenght);

valores.push({id: 3}, false, null, "teste"); // Você pode misturar coisas dentro de um array, mas não é uma boa prática;
console.log(valores);

console.log(valores.pop()); // Retira o ultimo valor do array;
console.log(valores);

// Além do pop, outra maneira de excluir os valores de um array:
delete valores[0];
console.log(valores);
console.log(typeof valores); // Em JS, o array é de tipo object;

//Fim da aula