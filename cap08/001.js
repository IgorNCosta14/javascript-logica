var segredo = 5;

var input = document.querySelector("input");

function verifica() {
    if (input.value == segredo) {
        alert("Você ACERTOU");
    } else {
        alert("Você errou!");
    }
}