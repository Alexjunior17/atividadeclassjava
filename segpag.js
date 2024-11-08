addEventListener("DOMContentLoaded", ()=>{
    window.alert("dados eviados com sucesso");
    const telefone = localStorage.getItem("tellocal")
    document.getElementById("telefonenum").value = telefone
    const cep = localStorage.getItem("ceplocal")
    document.getElementById("cepnum").value = cep
    const cpf = localStorage.getItem("cpflocal")
    document.getElementById("cpfnum").value = cpf
    const cnpj = localStorage.getItem("cnpjlocal")
    document.getElementById("cnpjnum").value = cnpj
    const codigo = localStorage.getItem("codigolocal")
    document.getElementById("codigonum").value = codigo
    nome = localStorage.getItem("nomelocal")
    document.getElementById("nometxt").value = nome
    const endereco = localStorage.getItem("enderecolocal")
    document.getElementById("enderecotxt").value = endereco
})



    














