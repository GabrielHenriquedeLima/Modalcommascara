function cpfMask(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
    return cpf;
}

function CpfValidate() {
    const cpfInput = document.getElementById('CPF');
    cpfInput.value = cpfMask(cpfInput.value);
    localStorage.setItem("numcpf", cpfInput.value)
}
function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    console.log(tel)
    tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
    var telefone = document.getElementById("telefone").value
 localStorage.setItem("numtel",telefone)
}
function janela() {
    alert("Cadastro feito");
}
const modal = document.querySelector("#modal")
function abrir(){
    modal.showModal();
}
function fechar() {
    modal.close();
}

function passarnome() {
    var nome = document.getElementById('nome').value
    return nome;
}
function passaremail() {
    var email = document.getElementById('email').value
    return email;
}
function passarsenha() {
    var senha = document.getElementById('senha').value
    return senha
}
function salvar() {
    localStorage.setItem("senhatexto",passarsenha())
    localStorage.setItem("nometexto", passarnome())
    localStorage.setItem("emailtexto", passaremail())
}