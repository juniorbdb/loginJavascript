data = {

	init: function(){
		//var btn = document.getElementById("login");
		document.addEventListener("deviceready", data.onDeviceReady, true); 
		//this.verificaUsuario();
	},

	onDeviceReady: function(){

		// var dados = {
		//     usuario: $("#login-adm").val(),
		//     pass: $("#senha_adm").val()
		//   };

		// data.verificaUsuario(dados);

		alert("teste");
		
	},

	verificaUsuario: function(dados){
		var user = dados.usuario;
		var senha = dados.pass;
		alert(user);
	}

	
};
