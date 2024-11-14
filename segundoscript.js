addEventListener("DOMContentLoaded", () =>{
    var recebeCPF = localStorage.getItem("numcpf")
    document.getElementById("cpf").value = recebeCPF
    var recebertel = localStorage.getItem("numtel")
    document.getElementById("telefone").value = recebertel
    var recebernome = localStorage.getItem("nometexto")
    document.getElementById("nome").value = recebernome
    var receberemail = localStorage.getItem("emailtexto")
    document.getElementById("email").value = receberemail
    var recebersenha = localStorage.getItem("senhatexto")
    document.getElementById("senha").value = recebersenha
    document.getElementById("respostanome").innerHTML = " " + recebernome 
    document.getElementById("respostaemail").innerHTML = " " + receberemail 
    document.getElementById("respostatelefone").innerHTML = " " + recebertel
    document.getElementById("respostaCPF").innerHTML =  " " + recebeCPF 
    document.getElementById("respostasenha").innerHTML = recebersenha
    
})
function limpa(){
    document.getElementById("cpf").value = " "
    document.getElementById("telefone").value = " "
    document.getElementById("nome").value = " "
    document.getElementById("email").value = " "
    document.getElementById("senha").value = " "
    document.getElementById("respostanome").innerHTML = " "  
    document.getElementById("respostaemail").innerHTML = " " 
    document.getElementById("respostatelefone").innerHTML = " " 
    document.getElementById("respostaCPF").innerHTML =  " "  
    document.getElementById("respostasenha").innerHTML = " "
}