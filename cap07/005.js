function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

for(var i = 1; i <= 3; i++) {
    for(var j = 1; j<= 10; j++) {
        document.write("*");
    }
    document.write("<br>");
}

mostra("FIM");