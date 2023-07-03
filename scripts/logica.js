//https://www.youtube.com/watch?v=FbtYf_Ile5o&list=PLWMAkZq0y_ZP0wiEK4_JlNYrrtxgzY0Jb&index=1&pp=iAQB
//Criando uma função
function quebraLinha(){
	document.write("<br/><br/>");
}

function escreve(texto){
	document.write(texto);
}

document.write("Hello World!");

document.write("<br/><br/>");

console.log("Hello World 2");

//Cassio Esteves

/*Hello World!*/

//Variaveis

var valor1 = 3;
var valor2 = 4;

var calculo1 = (valor1 * valor2);

var nome = "Cássio Esteves";


document.write(valor1,valor2);

quebraLinha()

document.write(nome);

quebraLinha()

//soma das variasveis com cautenizacao
document.write("A soma das variaveis é de " + calculo1);

quebraLinha()

document.write("A soma das variaveis é de " , calculo1);

quebraLinha()
//soma das variaveis de ti´p int com string

var resultado1 = 2;
var resultado2 = "5";

var somaResultadoA = resultado1 + resultado2;

//transformar string em int utilizando a função parseInt
var somaResultadoB = resultado1 + parseInt (resultado2);


document.write("sem parseInt ", somaResultadoA);

quebraLinha()

document.write("com parseInt ", somaResultadoB);

//erro NaN =  not an number