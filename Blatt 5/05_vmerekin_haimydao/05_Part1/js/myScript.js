/*#########################################################
###	Script:		Funktionen zu den vier Grundrechenarten	###
###	Modul:		Grundlagen User Interface Entwicklung	###
###	Auto:		©Florian Heitmann						###
###	Erstellt:	25.08.2021								###
#########################################################*/


function getAdd() {
	var zahl1 = parseInt(document.getElementById("add1").value);
	var zahl2 = parseInt(document.getElementById("add2").value);

	var erg = zahl1 + zahl2;
	document.getElementById("ergAdd").innerHTML = erg;
}

function getSub() {
	var zahl1 = document.getElementById("sub1").value;
	var zahl2 = document.getElementById("sub2").value;
	
	var erg = zahl1 - zahl2;
	document.getElementById("ergSub").innerHTML = erg;
}