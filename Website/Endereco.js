function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
};

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
};

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "Buscando";
            document.getElementById('bairro').value = "Buscando";
            document.getElementById('cidade').value = "Buscando";
            document.getElementById('uf').value = "Buscando";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var sexo = document.getElementById("sexo");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
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
    if (sexo.value == "") {
        alert("sexo não informado");
        sexo.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
    }
    if (senha.value == "") {
        alert("Senha não informada");
        senha.focus();
        return;
    }
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return;
    }
    alert("Formulário enviado!");
};

function verificar() {
    var email = document.getElementById("email_log");
    var senha = document.getElementById("senha_log");

    // verificar se o nome está vazio

    if (email.value == "") {
        alert("E-mail invalido");
        email.focus();
        return;
    }
    if (senha.value == "") {
        alert("Senha invalida");
        senha.focus();
        return;
    }

};

function showsenha() {
    var x = document.getElementById("senha");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}