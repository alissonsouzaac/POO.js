class Filme{
	constructor(titulo, ano, genero, diretor, duracao){
		this.titulo = titulo;
		this.ano = ano;
		this.genero = genero;
		this.diretor = diretor;
		this.atores = [];
		this.duracao = duracao;
	}

	Reproduzir(){
		console.log("Reproduzindo.");
	}

	Pausar(){
		console.log("Pausado");
	}

	Avançar(){
		console.log("Avançando");
	}

	Fechar(){
		console.log("Fechar x");
	}

	Ficha(){
		console.log("Título: " + this.titulo);
		console.log("ano: " + this.ano);
		console.log("Diretor: " + this.diretor);
	}
}

var vingadores = new Filme("Vingadores", 2020,"Ação/Ficção","Eu","3h"); //Objeto da classe filme
var Hulk = new Filme(); //Objeto2 da classe filme

vingadores.Ficha();
Hulk.Ficha();

