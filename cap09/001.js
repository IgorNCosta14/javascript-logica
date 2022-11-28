// var segredo1 = Math.round(Math.random()*10);

var segredo = [1,9,3,7]

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