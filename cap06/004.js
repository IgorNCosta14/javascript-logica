function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = (Math.random() * 100).toFixed();

var chute = parseInt(prompt("Digite seu chute!"));

if (typeof chute !== Number) {
    if (chute === numeroPensado) {
        mostra("Você acertou o número!");
    } else {
        mostra("Você errou, o número pensado foi " + numeroPensado);
    }
} else {
    mostra("Erro, tem que ser um número!");
}