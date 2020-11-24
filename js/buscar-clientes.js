var buscarclientes = document.querySelector("#buscar-clientes");

buscarclientes.addEventListener("click", function() {
    /* console.log("Buscando clientes..."); */

    var requisição = new XMLHttpRequest();   // Objeto do JS responsável por fazer requisições HTTP

    requisição.open("GET", "https://api-clientes.herokuapp.com/clientes"); // Abrindo conexão

    requisição.addEventListener("load", function() {
        /* console.log(requisição.responseText); */
        var erroAjax = document.querySelector("#erro-ajax");

        /* Caso o status da URL seja positivo, valoração 200, mostrar abaixo: */
        if (requisição.status == 200) {
            erroAjax.classList.add("invisivel"); // adiciona o valor encontrado em SPAN
            var resposta = requisição.responseText;
            var clientes = JSON.parse(resposta);  
            //Formato de clientes compactado em JSON e convertido em objeto JS do tipo Array

            clientes.forEach(function(cliente) {
                adicionaclienteNaTabela(cliente);
            });
        } else {
            // console.log(requisição.status);
            // console.log(requisição.responseText);
            erroAjax.classList.remove("invisivel");  // remove o valor encontrado em SPAN 
        }
    });

    requisição.send();
});
