class Leitor{

	Ler(caminho){
		return "Conteúdo do arquivo";
	}

}

class Escritor{
	Escrever(arquivo, conteudo){
		console.log("Arquivo Escrito");
	}
}

class Criador{
	Criar(nome){
		console.log("Arquivo criado");
	}
}

class Destruidor{
	Deletar(nome){
		console.log("Deletando arquivo");
	}
}

class ManipuladorDeArquivo{
	constructor(nome){
		this.arquivo =  nome;
		this.leitor = new Leitor();
		this.escritor = new Escritor();
		this.Destruidor = new Destruidor();
	}
}

var manipulador = new ManipuladorDeArquivo("meuarquvio.txt");

manipulador.Leitor.Ler();
manipulador.Escritor.Escrever();