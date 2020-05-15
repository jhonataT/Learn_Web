let soma = 0;
for(let i = 0; i < 10; i++){
    soma += i;
}
// console.log("i = ", i); // i não estará disponível, pois a variavel i tem escopo de bloco;
console.log(soma);