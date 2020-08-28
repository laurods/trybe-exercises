let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let total = 0;
for (i=0; i < numbers.length; i++){
    total = numbers[i]+soma;
    soma = total;
    console.log("Numero: "+numbers[i])
}
console.log("Total dos numeros: "+soma)