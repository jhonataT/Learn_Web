// par nome / valor:
const saudacao = "Opa"; // Contexto léxico 1: Local onde a sua váriavel foi definida físicamente no codigo;
                        // Aqui foi definido no nível do arquivo q estou trabalhando (ParNomeValor.js);

function exec(){
    const saudacao = "Falaa"; // Contexto léxico 2: Olhando para a escrita do seu código, você definiu essa constante dentro dessa função;
    return saudacao; // Repare que possui o mesmo nome da variável acima. Porém, como estão inseridas em contextos diferentes, não haverá conflitos;

}

// Objetos são grupos aninhados de pares nome/valor;
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);
console.log(cliente.endereco);
console.log(cliente.endereco.logradouro);
