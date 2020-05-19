function compras(trab1, trab2){ // trab1 e trab2 são valores booleanos;
    const comprarSorvete = trab1 || trab2;
    const comprarTV50 = trab1 && trab2;
    //const comprarTV32 = !!(trab1 ^ trab2); // Operador bitwise xor
    const comprarTV32 = trab1 != trab2; // Mesmo resultado da linha anterior.
    const manterSaudavel = !comprarSorvete; // Operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel};
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));