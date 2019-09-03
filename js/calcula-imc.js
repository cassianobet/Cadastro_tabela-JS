var titulo = document.querySelector(".titulo");
titulo.textContent = "Cassiano Programador";

var paciente = document.querySelectorAll(".paciente");


for(var i=0; i<paciente.length; i++){
	var pacientes = paciente[i];
	
	var tdpeso = pacientes.querySelector(".info-peso");
	var peso = tdpeso.textContent;

	var tdAltura = pacientes.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var imc = peso/(altura * altura);
	var tdImc = pacientes.querySelector(".info-imc");

	var pesoValido= validaPeso(peso);
	var alturaValida=validaAltura(altura);

	if(!pesoValido) {
	pesoValido = false;
	tdImc.textContent = "Peso Inválido!";
	pacientes.classList.add("paciente-invalido");
	}

	if(!alturaValida) {
	alturaValida = false;
	tdImc.textContent = "Altura Inválida!";
	pacientes.classList.add("paciente-invalido");
	}	
	if(pesoValido && alturaValida) {	
	tdImc.textContent = imc.toFixed(2);
	}

}
function validaPeso(peso){
	if(peso>=0 && peso<1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura<=3.00){
		return true;
	}else{
		return false;
	}
}
function calculaImc (peso,altura){
	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}