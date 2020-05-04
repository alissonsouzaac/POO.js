class Dado{

	constructor(faces){
		this.faces = faces;
	}

	Rolar(){
		console.log("Resultado do dado:" + this.GetRandomIntInclusive(1, this.faces))
		
	}	

	GetRandomIntInclusive(min, max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Marth.floor(Math.random() * (max - min +1)) + min;
	}


}

var d6 = new dado(6);
var d8 = new dado(8);

d6.Rolar();
d8.Rolar();