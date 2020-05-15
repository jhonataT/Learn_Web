let valor; // não inicializada;
console.log(valor); // Undefined;
// console.log(valor2); //Diferente de Undefined;

valor = null; // Ausência de valor;
console.log(valor);
// console.log(valor.toString()); // O nulo não tem nenhuma referência para o toString;

const produto = {};
console.log(produto.preco); //Se oq vier antes do ponto estiver definido e o q vem depois não, dará undefined;
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evitar atribuir undefined;
console.log(produto.preco);
console.log(!!produto.preco);
console.log(produto);

produto.preco = null;
console.log(produto.preco);
console.log(!!produto.preco);
console.log(produto);
