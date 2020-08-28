let nota=100;
let conceito="";

if(nota>=90){
    conceito="A";
}else if(nota>=80){
    conceito="B";
}
else if(nota>=70){
    conceito="C";
}
else if(nota>=60){
    conceito="D";
}
else if(nota>=50){
    conceito="E";
}
else if(nota<50){
    conceito="F";
}
else{
    conceito="Valor incorreto. Verifique";
}
console.log(conceito);