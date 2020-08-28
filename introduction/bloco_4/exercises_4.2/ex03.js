let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let total = 0;
let media = 0;
for (i=0; i < numbers.length; i++){
    total = numbers[i]+soma;
    soma = total;
    media = soma/numbers.length;
    console.log("Numero: "+numbers[i])
}
console.log("Soma dos numeros: "+soma)
console.log("Quantidade dos numeros: "+numbers.length)
console.log("Média da soma dos numeros: "+media)