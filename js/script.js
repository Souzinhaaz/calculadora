function insert(num) {
    let tela = document.getElementById("update").innerHTML;
    
    if (tela == 0) {
        document.getElementById("update").innerHTML = num;
    } else {
        document.getElementById("update").innerHTML += num;
    }
    
};

function operar(operacao) {
    let tela = Number(document.getElementById("update").innerText);

    if (tela == 0) {
        document.getElementById("update").innerHTML = 0;
    } else {
        document.getElementById("update").innerHTML += String(operacao);
    }
}

function zerar() {
    document.getElementById("update").innerHTML = 0;
};