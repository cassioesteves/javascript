//https://www.youtube.com/watch?v=XDFw-G4qos4&list=PLWMAkZq0y_ZP0wiEK4_JlNYrrtxgzY0Jb&index=4
//array - a sutase no js arr
//array de orientado objetos, objetos sao caractristicas como, carro e vermelho 4 rodas duas portas

var arr = [
		{nome:"Fulano", idade:20, cpf:"111.222.333.44"},
		{nome:"Cicrano", idade:30, cpf:"222.222.333.44"},
		{nome:"Beltrano", idade:40, cpf:"333.222.333.44"}
	];

//utilizando o push, inclementa objetos ao array

var objeto1 = {nome:"Titano", idade:50, cpf:"444.222.333.44"};
var objeto2 = {nome:"Zetano", idade:60, cpf:"444.222.333.44"};

//push - adiciona

arr.push(objeto1, objeto2);

//pop - remove
/*
//arr.pop (definir nome)
*/

console.log(arr);

for (var i = 0; i < arr.length; i++){

	//utilizando o negrito "<b></b>"
	document.write("Nome: <b>" + arr[i].nome + " </b>- Idade: <b>" +arr[i].idade + " Anos</b> - CPF: <b>" + arr[i].cpf + "</b>" );
	document.write("<br/><br/>");
	//sem negrito
	document.write("Nome: " + arr[i].nome + " - Idade: " +arr[i].idade + " Anos - CPF: " + arr[i].cpf);
	document.write("<br/><br/>");
	
}
