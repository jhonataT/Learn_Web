function rand( [min = 0, max = 1000] ){
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([0, 5]));
const array = [10, 50];
console.log(rand(array));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand([998, ]));