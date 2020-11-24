const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var clientes = document.querySelectorAll(".cliente");

    if (this.value.length > 0) {
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            const tdNome = cliente.querySelector(".info-nome");
            const nome = tdNome.textContent;
            const expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                cliente.classList.add("invisivel");
            } else {
                cliente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            cliente.classList.remove("invisivel");
        }
    }
});
