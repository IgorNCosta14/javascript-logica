function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o número de vitória"));
alert(vitorias + 10)

var empates = parseInt(prompt("Entre com o número de empates."));

var pontos = vitorias * 3 + empates;

mostra("Os pontos do seu time é " + pontos);


