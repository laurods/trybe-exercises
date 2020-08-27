let custo=15;
let venda=-10;
if(custo<=0 | venda<=0){
    console.log("Valor do custo ou da venda menor ou igual a zero. Verifique!")
}
else{
    let lucro=(venda*1000)-(custo*1000)-(custo*1000)*.20;
    console.log("Valor da venda: "+venda*1000);
    console.log("Valor do custo: "+custo*1000);
    console.log("Imposto sobre do custo 20%: "+(custo*1000)*.20);
    console.log("Lucro para venda de 1000 unidades: "+lucro);
}


