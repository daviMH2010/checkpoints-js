let contadorC = 0
let contadorG = 0
let contadorP = 0
let final =0

function aumentarC() {
    contadorC++;
    document.getElementById("contadorC").innerText = contadorC
};

function diminuirC() {
    contadorC--;
    document.getElementById("contadorC").innerText = contadorC
};

function aumentarP() {
    contadorP++;
    document.getElementById("contadorP").innerText = contadorP
};

function diminuirP() {
    contadorP--;
    document.getElementById("contadorP").innerText = contadorP
};

function aumentarG() {
    contadorG++;
    document.getElementById("contadorG").innerText = contadorG
};

function diminuirG() {
    contadorG--;
    document.getElementById("contadorG").innerText = contadorG
};

function finalF(){
    final = contadorC*20+contadorG*5+contadorP*7;
    document.getElementById("final").innerText = final
}
