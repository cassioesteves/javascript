
var arr = [
		{tipo:1, descricao:"Pagamento do Freela", data:"2023-07-01", valor: 2500},
		{tipo:2, descricao:"Pagamento conta de Luz", data:"2023-07-01", valor: 76},
		{tipo:1, descricao:"Pagamento do Freela 2", data:"2023-07-01", valor: 4500},
		{tipo:1, descricao:"Pagamento do Freela 3", data:"2023-07-01", valor: 1500},
		{tipo:2, descricao:"Pagamento da conta de Água", data:"2023-07-01", valor: 55}
	];


/*
	formatacaoData()

	Input

		data - string - Data para formatação

	Description

		Esta função tem como objetivo receber a data no padrão americano e devolve a data na formatação brasileira

	Output
		
		data - string - Data formatada no padrão brasileiro.

*/

function formatacaoData(data){

	var data_array = data.split("-");

	data_array = data_array[2] +"/"+ data_array[1] +"/"+ data_array[0];

	return data_array;
}


function alimentaTabela(arrRecebe){

	var html = '';

	for(i = 0; i < arrRecebe.length; i++){

		html += '<tr>';

			if(arrRecebe[i].tipo == 1){

				html +='<td> <div class="alert alert-success"> Entrada </div> </td>';

			}else{

				html +='<td> <div class="alert alert-danger"> Saída </div> </td>';
			}

			
			html +='<td>'+ arrRecebe[i].descricao +'</td>';
			html +='<td>'+ formatacaoData(arrRecebe[i].data) +'</td>';
			html +='<td> R$ '+ arrRecebe[i].valor +'</td>';

		html += '</tr>';

	}

	document.getElementById("corpoTabela").innerHTML = "";
	document.getElementById("corpoTabela").innerHTML = html;

}

/*
	totalEntradasSaidas()

	Input
		- arr - Array - Array de objetos
		- tipo - Int - Tipo de registros
		- alimentaTabela - Boolean - Verifica se é para alimentar o html ou não

	Description

		Essa funçao determina qual o total de registros que você deseja, se for 1
		o valor do parametro tipo ele retornará o total das entradas

	Output

*/


function totalEntradasSaidas(arr, tipo, alimentaTabela = true){

	var total = 0;

	for(var i = 0; i < arr.length; i++){

		if(arr[i].tipo == tipo){

			total += arr[i].valor;

		}

	}

	if(alimentaTabela == true){

		var html = '';

		if(tipo == 1){

			html += '<div class="alert alert-success"> R$ ' +total+ '</div>';

			document.getElementById("totalEntradas").innerHTML = "";
			document.getElementById("totalEntradas").innerHTML = html;

		}else{

			html += '<div class="alert alert-danger"> R$ ' +total+ '</div>';

			document.getElementById("totalSaidas").innerHTML = "";
			document.getElementById("totalSaidas").innerHTML = html;

		}

	}else{

		return total;

	}

}

function totalGeral(totalEntradas, totalSaidas){

	var valorTotal = totalEntradas - totalSaidas;

	var html = '';

	if(valorTotal < 0){

		html += '<div class="alert alert-danger"> R$ ' +valorTotal+ '</div>';

	}else{

		html += '<div class="alert alert-success"> R$ ' +valorTotal+ '</div>';

	}

	document.getElementById("totalGeral").innerHTML = "";
	document.getElementById("totalGeral").innerHTML = html;

}


document.getElementById('btRegistrar').addEventListener('click', function(event){

	event.preventDefault();

	var tipo = document.getElementById('tipo').value;
	var descricao = document.getElementById('descricao').value;
	var data = document.getElementById('data').value;
	var valor = document.getElementById('valor').value;

	var obj = {tipo: parseInt(tipo), descricao:descricao, data:data, valor:parseFloat(valor)};

	arr.push(obj);

	alimentaTabela(arr);

	totalEntradasSaidas(arr, 1);
	totalEntradasSaidas(arr, 2);

	var totalEntradas = totalEntradasSaidas(arr, 1, false);
	var totalSaidas = totalEntradasSaidas(arr, 2, false);


	totalGeral(totalEntradas, totalSaidas);


	document.getElementById('tipo').value = "";
	document.getElementById('descricao').value = "";
	document.getElementById('data').value = "";
	document.getElementById('valor').value = "";


});



alimentaTabela(arr);

totalEntradasSaidas(arr, 1);
totalEntradasSaidas(arr, 2);

var totalEntradas = totalEntradasSaidas(arr, 1, false);
var totalSaidas = totalEntradasSaidas(arr, 2, false);


totalGeral(totalEntradas, totalSaidas);

