let nomeDoHeroi = "kratos"
let vitoria = 200
let derrota = 10

let saldoDeRankeadas = calculoDeRankeadas(vitoria, derrota)

function calculoDeRankeadas(vitoria, derrota){
    return vitoria - derrota;
}



if (saldoDeRankeadas < 10){
    let nivel1 = "Ferro";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel1}`);
} else if (saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20){
    let nivel2 = "Bronze";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel2}`);
} else if (saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50){
    let nivel3 = "Prata";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel3}`);
} else if (saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80){
    let nivel4 = "Ouro";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel4}`);
} else if (saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90){
    let nivel5 = "Diamante";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel5}`);
} else if (saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100){
    let nivel6 = "Lendário";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel6}`);
} else if (saldoDeRankeadas >= 101){
    let nivel7 = "Imortal";
    console.log(`O Herói tem de saldo ${saldoDeRankeadas} vitórias e está no nível de ${nivel7}`);
}