let a=2;
let b=4;
let c=6;
let result = (a+b+c)%2;
if((a%2==0) & (b%2==0) & (c%3==0)){
    console.log("nenhum numero é impar");
}
else{
    console.log("Pelo menos um dos números é impar");
}
console.log(result);

