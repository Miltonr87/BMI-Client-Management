var titulo = document.querySelector(".titulo");
titulo.textContent = "IMC Gerenciador de Clientes (BMI Client Management)";

var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {     // Iterando os clientes da tabela

    var cliente = clientes[i];

    var tdPeso = cliente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = cliente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = cliente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        cliente.classList.add("cliente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        cliente.classList.add("cliente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
