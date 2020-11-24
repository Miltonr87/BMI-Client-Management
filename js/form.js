var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var cliente = obtemclienteDoFormulario(form);

    var erros = validacliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaclienteNaTabela(cliente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemclienteDoFormulario(form) {

    var cliente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return cliente;
}

function montaTr(cliente) {
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.peso, "info-peso"));
    clienteTr.appendChild(montaTd(cliente.altura, "info-altura"));
    clienteTr.appendChild(montaTd(cliente.gordura, "info-gordura"));
    clienteTr.appendChild(montaTd(cliente.imc, "info-imc"));

    return clienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validacliente(cliente) {

    var erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (cliente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (cliente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(cliente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(cliente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaclienteNaTabela(cliente) {
    var clienteTr = montaTr(cliente);
    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
}
