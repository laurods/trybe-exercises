let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let total = 0;
let media = 0;
let maximo = 0;
let impares=0;
let minimo = 1000;// Numero de referencia para iniciar o for


for (i=0; i < numbers.length; i++){
    total = numbers[i]+soma;
    soma = total;
    media = soma/numbers.length;
    console.log("Numero: "+numbers[i])
    /*Verifica maior numero*/
    if(numbers[i]>maximo){
        maximo = numbers[i];
      }
     
     /*Verifica quantidade de numeros impares*/
    if(numbers[i]%2==1){
          impares++
    }

    /*Verifica se não há numeros impares*/
    if(impares<=0){
        console.log("Não há numeros impares!");
    } 
    
    /*Verifica menor numero*/
    if (numbers[i] < minimo) {
        minimo = numbers[i];
      }
   
}
console.log("Soma dos numeros: "+soma)
console.log("Quantidade dos numeros: "+numbers.length)
console.log("Média da soma dos numeros: "+media)
if(media>20){
    console.log("Valor da média é maior que 20");
}
else{
    console.log("Valor da média é menor que 20");
}
console.log("Maior numero é: "+maximo)
console.log("Menor numero é: "+minimo)
console.log("Quantidade de numeros impares é: "+impares);
