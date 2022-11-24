function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

for(var i = 1; i <= 10; i++) {
    for(var j = 1; j <= 10; j++) {
        mostra(i*j);
    }
}

mostra("Fim");