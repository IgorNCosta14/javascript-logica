var segredo = [];

var numeroSegredos = 3;

for(var i = 0; i < numeroSegredos; i++) {
    var numero = Math.round(Math.random()*10);

    if(segredo.indexOf(numero) < 0) {
        segredo.push(numero);
    } else {
        i=i-1;
    }
}

console.log(segredo)

var input = document.querySelector("input");

function verifica() {
    const procura = segredo.indexOf(parseInt(input.value));

    if (procura >= 0) {
        alert("Você ACERTOU");
    } else {
        alert("Você errou!");
    }

    input.value = "";
    input.focus();
}