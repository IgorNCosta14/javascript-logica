var segredo = Math.round(Math.random()*10);

var input = document.querySelector("input");

function verifica() {
    if (input.value == segredo) {
        alert("Você ACERTOU");
    } else {
        alert("Você errou!");
    }

    input.value = "";
    input.focus();
}