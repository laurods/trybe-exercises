let salario=3000;
let inss=0;
let ir=0;
let irPagar=0;
let deducao=0;
let salarioBase=0;

/*Calculo do inss*/
if(salario<1556.94){
    inss = salario*.08;
}
else if(salario<2594.92){
    inss = salario*.09;
}
else if(salario<=5189.82){
    inss = salario*.11;
}
else if(salario>5189.82){
    inss=570.88;
}
else{
    console.log("Valor salário incorreto. Verifique");
 
}
/*Calculo salario Base*/
salarioBase=salario-inss;


/*Calculo do ir*/
if(salarioBase<1903.98){
    ir = 0.00;
}
else if(salarioBase<2826.65){
    ir = salarioBase*.075;
    deducao = 142.80;    
}
else if(salarioBase<3751.05){
    ir = salarioBase*.15;
    deducao = 354.80;
}
else if(salarioBase<4664.98){
    ir = salarioBase*.225;
    deducao = 636.13;
}
else if(salarioBase>4664.67){
    ir = salarioBase*.275;
    deducao = 869.36;
}
else{
    console.log("Valor salário incorreto. Verifique");
 
}
irPagar = ir-deducao;
salarioLiquido = salario-inss-irPagar;

console.log("Salario: "+salario);
console.log("Inss: "+inss);
console.log("Salario Base (Salario - inss): "+salarioBase);
console.log("Imposto de renda sobre o Salário Base: "+ir);
console.log("Dedução de Imposto de renda:"+deducao);
console.log("Imposto de renda A pagar: "+irPagar.toFixed(2));
console.log("Salario Liquido: "+salarioLiquido)