console.log("a : ", a); // Undefined, mas ela existe; Aconteceu o hoisting;
var a = 2; 
console.log("a : ", a);

// O programa, basicamente faz isto:
// var a;
// console.log("a : ", a);
// a = 2;
// console.log("a : ", a);

// Usando let:

// console.log("b : ", b); // Dará um erro, pois hoisting só acontecerá com var;
let b = 2;
console.log("b : ", b);

// Hoisting em JS é um comportamente padrão de mover uma variável para o topo;

            // Fim da aula.