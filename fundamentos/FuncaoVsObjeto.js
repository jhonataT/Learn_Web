console.log(typeof Object); // Se trata de uma função;
console.log(typeof new Object); // Se trata de um objeto;

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} //ES 2015 (ES6);
console.log(typeof Produto);
console.log(typeof new Produto());

// A classe que foi criada em JS, internamente, é uma função.
