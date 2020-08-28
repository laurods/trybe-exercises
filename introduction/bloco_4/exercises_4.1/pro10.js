let nomePeca = "RAINHA";
let peca = nomePeca.toLowerCase();
let movimento ="";

switch(peca){
    case "rei":
        movimento="mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez";
    break;
    case "rainha":
        movimento="move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças";
    break;
    case "bispo":
        movimento="move-se ao longo da diagonal. Não pode pular outras peças";
    break;
    case "cavalo":
        movimento=" movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa";
    break;
    case "torre":
        movimento=" movimenta-se pela vertical ou horizontal, mas não pode pular outras peças";
    break;
    case "peão":
        movimento=" movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal";
    break;
    
    default:
        movimento="peça não faz parte do Xadrez";
}
console.log(movimento);