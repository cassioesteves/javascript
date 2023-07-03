//https://www.youtube.com/watch?v=EnbNPSH_bjg&list=PLWMAkZq0y_ZP0wiEK4_JlNYrrtxgzY0Jb&index=2&pp=iAQB
//Condições e Operadores Lógicos - Aula 3 - Curso Lógica de Programação Gratuíto

var valor1 = 3;

//com negrito
document.write("O valor da variavel é <b>" + valor1 + "</b>");

document.write("<br/><br/>");

//sem negrito
//document.write("O valor da variavel é " + valor1);

document.write("<br/><br/>");

if(valor1 > 5)
{
	if(valor1 == 6)
	{
		document.write("A variavel e maior que 5 e igual a 6");
	} 

	else
	{
		document.write("A variavel e menor que 5");
	}
}

else if(valor1 == 5)
	{
	document.write("O numero " + valor1 + " é igual a 5");
	}
	else
	{
	document.write("O numero " + valor1 + " é menor que 5");
	}

document.write("<br/><br/>");

//usar === js verifica se é uma string, verifica tipo e variavel 

	//(valor1 == "3") consigedera int e string como igual
	//if(valor1 === "3") verifica tipo string
	if(valor1 === 3)
	{
		document.write("A variavel é igual a 3");
	}
	else{
		document.write("A variavel é diferente de 3");
	}


/*
if(valor1 > 5){
	document.write("O numero " + valor1 + " é maior que 5");
}
else if(valor1 == 5){
	document.write("O numero " + valor1 + " é igual a 5");
}
else{
	document.write("O numero " + valor1 + " é menor que 5");
}

/*

/*
operadores logicos

&& - e / and
|| - ou / or
/*

/*
if (valor1 >= 5) {
	document.write("O valor da variavel é igual ou superior a 5");
}

else{
	document.write("O valor da variavel é diferente de 5");
}
*/