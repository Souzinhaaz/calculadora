
function insert(num) {
    
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
    return numero;
}

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function erase() {
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calculate() {
    let resultado = document.getElementById("resultado").innerHTML;
    resultado = resultado.replace("x", "*");
    resultado = resultado.replace("÷", "/");
    console.log(resultado);
    if(resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
    }
}