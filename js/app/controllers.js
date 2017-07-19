angular.module("meuModulo")
.controller("indexController", function($scope){
	
	// variaveis de dados inseridos manualmente para tabela
	$scope.titulo = "Home";
	$scope.alunos = [
		{nome: "Thandy", email:"comandante@mail.com",nota1:65,nota2:80,nota3:55},
		{nome: "Latifa", email:"latifa@mail.com",nota1:75,nota2:80,nota3:55},
		{nome: "Gerson", email:"gerson@mail.com",nota1:65,nota2:80,nota3:55},
		{nome: "Aldo", email:"ester@mail.com",nota1:55,nota2:50,nota3:59},
		{nome: "Julia", email:"julia@mail.com",nota1:95,nota2:80,nota3:35},
		{nome: "Sairyna", email:"sairyna@mail.com",nota1:66,nota2:20,nota3:55},
	];

	//variavel para chamar a funcao aluno e calcular a media
	var init = function(){
		$scope.alunos.forEach(function(aluno){
			aluno.media = media(aluno);
		});
		limpaForm();
	};

	// funcao para calcular a nota dos alunos adicao e divisao
	var contar2 = 0;
	var media = function(Aluno){
		console.log(contar2++);
		var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3))/3;
		return media.toFixed(2);
	};

	
	// funcao para abrir aluno 
	$scope.abreAddAluno = function(){
		$scope.editando = false;
		limpaForm();
		$('#modal1').modal('open');

	};


	// funcao para adicionar alunos e limpar os campos
	$scope.addAluno = function(Aluno){
		Aluno.media = media(Aluno);
		$scope.alunos.push(Aluno);
		 $('#modal1').modal('close');
		 limpaForm();
	};


	$scope.editando = false;
	var alunoEditar;

	// funcao para editar alunos 
	$scope.editarAluno = function(Aluno){
		$scope.editando = true;
		angular.copy(Aluno,$scope.Aluno);
		$('#modal1').modal('open');
		alunoEditar = Aluno;
	};



	// funcao para guardar aluno
	$scope.guardarAluno = function(Aluno){
		alunoEditar.nome = Aluno.nome;
		alunoEditar.email = Aluno.email;
		alunoEditar.nota1 = Aluno.nota1;
		alunoEditar.nota2 = Aluno.nota2;
		alunoEditar.nota3 = Aluno.nota3;
		alunoEditar.media = media(Aluno);
		$('#modal1').modal('close');
	};


	// funcao para apagar aluno
	$scope.apagarAluno = function(Aluno){
		for (var index in $scope.alunos) {
			 var aux = $scope.alunos[index];
			 if (Aluno === aux) {
			 		$scope.alunos.splice(index,1)
			 } else {}
		}
	};

	var limpaForm = function(){
		$scope.Aluno = {nome: "", email:"",nota1:'',nota2:'',nota3:'',media:''};
	};

	init();
})

.controller("contatoController", function($scope){
	$scope.titulo = "Contato";
})
