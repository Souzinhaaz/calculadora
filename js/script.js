function insert(num) {
    let numero = document.getElementById("update").innerHTML;

    if (numero == 0) {
        numero.innerHTML = num;
    }
    
    document.getElementById("update").innerHTML += num;
    
};

function operar(operacao) {
    let valor = Number(document.getElementById("update").innerText);
    console.log(valor);
    document.getElementById("update").innerHTML += operacao;
}

function zerar() {
    document.getElementById("update").innerHTML = 0;
};