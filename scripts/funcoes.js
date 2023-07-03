//https://www.youtube.com/watch?v=fQi_J3zzOzA&list=PLWMAkZq0y_ZP0wiEK4_JlNYrrtxgzY0Jb&index=3&pp=iAQB
//Array e Laços de Repetição - Aula 4 - Curso Lógica de Programação

function quebraLinha(){
	document.write("<br/><br/>")
}


var arrNomes =["Cassio","Fulano","Cicrano","Beltrano","Titano"];

//console.log(arrNomes)
//document.write(arrNomes

/*
document.write(arrNomes[0]);
	quebraLinha()
document.write(arrNomes[1]);
	quebraLinha()
document.write(arrNomes[2]);
*/

//while - enquanto

/*//contagem de array manual
// var i pode ser qlq no caso i de indice
var i = 0;

while(i <= 4){

	document.write(arrNomes[i]);
	quebraLinha();

	i = i + 1;

}
*/
//contagem de array aut
/*var i = 0;

while(i < arrNomes.length){

	document.write(arrNomes[i]);
	quebraLinha();

	i = i + 1;

}
*/
//mostra o indice no site

/*var i = 0;

while(i < arrNomes.length){

	document.write([i] + " - " + arrNomes[i]);
	quebraLinha();

	i = i + 1;
}
*/

var i = 0;

while(i < arrNomes.length){

	document.write([i] + " - " + arrNomes[i]);
	quebraLinha();

	//i = i + 1; melhorando o repetidor 
	i++
}
	quebraLinha();

//for - para
//Things - coisa

for (var i2 = 0; i2 < arrNomes.length; i2++)
{
	document.write([i2] + " - " + arrNomes[i2]);
	quebraLinha();
}
