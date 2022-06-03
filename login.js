function validar(){
	var email=document.getElementById("email");
	var senha=document.getElementById("senha");

	if (email.value==""){
		alert("E-mail não informado");
		email.focus();
		return;
	}

	if (senha.value==""){
		alert("Senha não informada");
		senha.focus();
		return;
	}

	alert("SEJA BEM VINDO NOVAMENTE!!!");
}