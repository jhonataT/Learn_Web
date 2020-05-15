// Tipos booleanos em JS;
let isAtivo = false; // Em JS, podemos usar o false ou true;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Além de true e false, em JS, podemos usar 0 e 1;
isAtivo = 0;
console.log(isAtivo); // Irá imprimir apenas o number
console.log(!isAtivo); // Usando ! umas vez, significa uma negação (o negativo de 0 é true). E, se usarmos !! será uma negação 2x;
console.log(!!isAtivo); // Negação 2x (imprime o msm valor(0 = false));
isAtivo = 1;
console.log(isAtivo); // Irá imprimir apenas o number;
console.log(!isAtivo); // Usando ! umas vez, significa uma negação (o negativo de 0 é true). E, se usarmos !! será uma negação 2x;
console.log(!!isAtivo); // Negação 2x (imprime o msm valor(0 = false));

console.log("Os verdadeiros: ");
console.log(!!3);
console.log(!!-9);
//TODOS OS NÚMEROS INTEIROS, FORA O 0, SÃO VERDADEIROS;
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!'teste');
console.log(!!(isAtivo = true) + " caso 1"); //Atribuição;
console.log(!!(isAtivo = Infinity) + " caso 2"); //Atribuição;
console.log(!!(isAtivo = 5) + " caso 3"); //Atribuição;

console.log("\nOs falsos: ");
console.log(!!0 + " Caso 1");
console.log(!!'' + " Caso 2");
console.log(!!null + " Caso 3");
console.log(!!NaN + " Caso 4");
console.log(!!(isAtivo = false) + " Caso 5");
console.log(!!('' || null || 0 || ' ')); // Retorna true, pois possui um valor verdadeiro;
console.log(('' || null || 0 || 'RETORNO')); // Sem usar os '!!', irá retornar o único valor true;

//Exemplo:
//Caso 1:
let nome =  '';
console.log(nome || "\nDesconhecido");

//Caso 2:
nome = '\nJhonata';
console.log(nome || "\nDesconhecido");

        // FIM da aula.