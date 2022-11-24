function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));
var idade = 0;

for(var i=1; i<=totalFamiliares; i++) {
    idade = idade+parseInt(prompt("Digite uma idade?"));
}

var media = (idade/totalFamiliares)

mostra("A média das idades dos familiares é " + media);
mostra("FIM")