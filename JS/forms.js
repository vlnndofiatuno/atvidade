
function enviarForm() {

    let nome = document.getElementById('nome').value;
    

    let email = document.getElementById('email').value;
    

    let senha = document.getElementById('senha').value;
    

    let confirmaSenha = document.getElementById('confirmaSenha').value;


    let telefone = document.getElementById('telefone').value;
    

    let nascimento = document.getElementById('nascimento').value;

    console.log(nome,email,senha,confirmaSenha, telefone, nascimento);

    if (senha.length === 0 || confirmaSenha.length === 0) {
        document.getElementById('senha').classList.add('borda-erro');
        
    }  else{
         if (senha === confirmaSenha) {
    }   else{
        alert('Senhas incorretas')
    }
    }
}
