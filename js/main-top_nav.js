//Kod za responsivna navigacija
//Navigacija za mobilni telefoni ili mali rezolucii

function resFunction() {
  var x = document.getElementById("resTopNav");
  if (x.className === "topNav") {
	x.className += " responsive";
  } else {
	x.className = "topNav";
  }
}

/*
	Na pocetok kreirame funkcija bez barametri,
	potoa vnatre vo funkcijata definirame i inicijalizirama varijabla x
	koja vsusnost kje podelime DOM vrednost.
	So pomos na if proveruvame dali varijablata so ime na klasa e ednakva
	top navigacija, ako e dodeluvame responsive clasa od css fajl.
	ako ne si ostanuva ne promeneta.
*/
