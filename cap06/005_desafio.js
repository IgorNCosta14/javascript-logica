function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function sorteia(n) {
    var max = n + 1;
    var res = Math.floor(Math.random() * max);
    return res;
}

var n = parseInt(prompt("Digite o valor maximo a ser sorteado: "));

var numeroPensado = sorteia(n);

var chute = parseInt(prompt("Digite seu chute!"));

if (chute === numeroPensado) {
    mostra("Você acertou o número!");
} else {
    if (chute < numeroPensado) {
        mostra("Você errou, o número pensado é maior que o seu chute.");
    } else {
        mostra("Você errou, o número pensado é menor que o seu chute.");
    }
}