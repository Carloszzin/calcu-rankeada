function rankeada(vitoria,derrota){
    vitoria = Number(prompt("Quantas vitórias você obteve?"))
    derrota = Number(prompt("Quantas derrotas você obteve?"))
    let nivel = vitoria - derrota
    return nivel
}

let saldoRankeada = rankeada()
if(saldoRankeada <= 10){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Ferro`)
}else if(saldoRankeada > 11 && saldoRankeada <= 20){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Bronze`)
}else if(saldoRankeada > 21 && saldoRankeada <= 50){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Prata`)
}else if(saldoRankeada > 51 && saldoRankeada <= 80){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Ouro`)
}else if(saldoRankeada > 81 && saldoRankeada <= 90){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Diamante`)
}else if(saldoRankeada > 91 && saldoRankeada <= 100){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Lendário`)
}else if(saldoRankeada > 101){
   alert(`O Herói tem de saldo de ${saldoRankeada} e está no nível: Imortal`)
}else{
   alert("Deu errado..")
}

//Calculadora de Ranks