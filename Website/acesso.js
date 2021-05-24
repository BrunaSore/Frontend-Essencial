function acesso() {

    /*Checa nome se senha - caso digite com letras maiúsculas, 
    será convertido para letras minuúsculas*/

    var nome = document.getElementById("nome").value.toLowerCase()
    var senha = document.getElementById("senha").value.toLowerCase()

    if (nome == "roni" && senha == "123" ||
        nome == "pablo" && senha == "456" ||
        nome == "bruna" && senha == "789" ||
        nome == "alexandre" && senha == "101112") {

        window.location.href = "acessoLogin.html";

    } else {

        alert("Acesso negado, verifique se foi realizado cadastro");
        return false;
    }
}