let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let total = 0;
let media = 0;
let maximo = 0;

for (i=0; i < numbers.length; i++){
    total = numbers[i]+soma;
    soma = total;
    media = soma/numbers.length;
    console.log("Numero: "+numbers[i])
      if(numbers[i]>maximo){
          maximo = numbers[i];
        }
        
   
}
console.log("Soma dos numeros: "+soma)
console.log("Quantidade dos numeros: "+numbers.length)
console.log("Média da soma dos numeros: "+media)
console.log("Maior numero é: "+maximo)
if(media>20){
    console.log("Valor da média é maior que 20");
}
else{
    console.log("Valor da média é menor que 20");
}