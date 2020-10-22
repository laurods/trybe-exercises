
const promise = new Promise((resolve, reject) => {
//você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada.
  const numbers = [1,5,10,15,20,25,30,35,40,50];
  const othersNumbers = [2, 3, 5, 10]; 
    const numberSquared = numbers
    .map(number => number*number)
    .reduce((acumulador, numero) => {
        return acumulador + numero;
        }, 0);  
  
    if (numberSquared > 8000) {
      return reject(numberSquared);
    }
    resolve(numberSquared);
  })
  //Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array
  .then((numberSquared)=> {
      newNumbers = [2, 3, 5, 10];
      resultArray = newNumbers.map((number) => numberSquared/number)
      return resultArray;
  })
  //Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array
  .then(resultArray => resultArray.reduce((acumulador, numero) => {
    return acumulador + numero;
    }, 0)) 
  .then(msg => console.log(msg))
  .catch(numberSquared => console.log(`${numberSquared} - É mais de oito mil! Essa promise deve estar quebrada!`));

  
   
    
    /*
    https://medium.com/@raullesteves/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
    */
    