data = {

	init: function(){
		//var btn = document.getElementById("login");
		document.addEventListener("deviceready", this.valorUsuarioSenha, false);
		//this.verificaUsuario();
	},

	valorUsuarioSenha: function(){

		var dados = {
		    usuario: $("#login-adm").val(),
		    pass: $("#senha_adm").val()
		  };

		data.verificaUsuario(dados);
		
	},

	verificaUsuario: function(dados){
		var user = dados.usuario;
		var senha = dados.pass;
		alert(user);
	}

	
};
