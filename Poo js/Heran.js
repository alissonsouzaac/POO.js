class Animal{
	constructor(nome, idade, preco){
		this.nome = nome;
		this.idade = idade;
		this.preco = preco;
	}

	ChecarEstoque(){
		return 10;
	}
}

class Cachorro extends Animal {
	constructor(nome, idade, preco, raca, peso){
		super(nome, idade, preco);
		this.raca = raca;
		this.peso = peso;
	}

	Latir(){
		console.log("Au Au");
	}

	ChecarEstoque(){
		console.log("Temos 3 cachorros");
	}

}

var dog = new Cachorro("Dogão",10, 150,"Vira lata", 30);

dog.peso();
dog.idade();