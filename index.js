let nomeHeroi = "Rodrigo Santos";
let quantidadeDeXp = prompt(
    "Escolha uma das opções abaixo:\na) 0 a 1.000\nb) 1.001 a 2.000\nc) 2.001 a 5.000\nd) 6.001 a 7.000\ne) 7.001 a 8.000\nf) 8.001 a 9.000\ng) 9.001 a 10.000\nh) maior de 10.001"
);

switch (quantidadeDeXp) {
    case "a":
        alert("O Herói " + nomeHeroi + " está no nível Ferro");
        break;

    case "b":
        alert("O Herói " + nomeHeroi + " está no nível Bronze");
        break;

    case "c":
        alert("O Herói " + nomeHeroi + " está no nível Prata");
        break;

    case "d":
        alert("O Herói " + nomeHeroi + " está no nível Ouro");
        break;

    case "e":
        alert("O Herói " + nomeHeroi + " está no nível Platina");
        break;

    case "f":
        alert("O Herói " + nomeHeroi + " está no nível Ascendente");
        break;

    case "g":
        alert("O Herói " + nomeHeroi + " está no nível Imortal");
        break;

    case "h":
        alert("O Herói " + nomeHeroi + " está no nível Radiante");
        break;
    default:
        alert("Opção inválida! Atualize a página para recomeçar...");
}