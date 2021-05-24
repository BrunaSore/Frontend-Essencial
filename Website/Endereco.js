function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var usuario = document.getElementById("usuario");
    var senhacad = document.getElementById("senha_cad");
    var cep = document.getElementById("cep");

    // verificar se o nome está vazio
    if (nome.value == "") {
        alert("Nome não informado");

        // Deixa o input com o focus
        nome.focus();
        // retorna a função e não olha as outras linhas
        return;
    }
    if (sobrenome.value == "") {
        alert("Sobrenome não informado");
        sobrenome.focus();
        return;
    }
    if (usuario.value == "") {
        alert("usuario não informado");
        usuario.focus();
        return;
    }
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return;
    }
    alert("Formulário enviado!");
};


function showsenhacad() {
    var x = document.getElementById("senha_cad");

    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}

function showsenhalog() {
    var y = document.getElementById("senha_log");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

function acesso() {

    /*Checa nome se senha - caso digite com letras maiúsculas, 
    será convertido para letras minuúsculas*/

    var nome = document.getElementById("nome_log").value.toLowerCase()
    var senha = document.getElementById("senha_log").value.toLowerCase()

    if (nome == "roni" && senha == "123" ||
        nome == "pablo" && senha == "456" ||
        nome == "bruna" && senha == "789" ||
        nome == "alexandre" && senha == "101112" ||
        nome == "lucas" && senha == "2002") {

        window.location.href = "acessoLogin.html";

    } else {

        alert("Acesso negado, verifique se foi realizado cadastro");
        return false;
    }
}