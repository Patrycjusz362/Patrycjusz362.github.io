var wyswietl="0";
var wynik=0;
var poprzednia_liczba;
var operacja;


function przycisk(key){
	if(isNaN(key)){//nie jest cyfrą
		
		if(key=="+"){
			poprzednia_liczba = parseFloat(wyswietl);
			operacja="+";
			wyswietl="0";
		}
		else if(key=="*"){
			poprzednia_liczba = parseFloat(wyswietl);
			operacja="*";
			wyswietl="0";
		}
		else if(key=="/"){
			poprzednia_liczba = parseFloat(wyswietl);
			operacja="/";
			wyswietl="0";
		}
		else if(key=="-"){
			poprzednia_liczba = parseFloat(wyswietl);
			operacja="-";
			wyswietl="0";
		}
		else if(key=="="){
			if (operacja=="+"){wynik = poprzednia_liczba+parseFloat(wyswietl);}
			if (operacja=="-"){wynik = poprzednia_liczba-parseFloat(wyswietl);}
			if (operacja=="*"){wynik = poprzednia_liczba*parseFloat(wyswietl);}
			if (operacja=="/"){wynik = poprzednia_liczba/parseFloat(wyswietl);}
			

			wyswietl = wynik;
			document.getElementById("ekran").innerHTML = wyswietl;
			wyswietl = "0";
			poprzednia_liczba = 0;
			
		}
		else if(key=="."){
			wyswietl = wyswietl+key;
			document.getElementById("ekran").innerHTML = wyswietl;
		}
		
		
		
		
		
		
	}else{//jest cyfrą
		if(wyswietl.length<=10){
		wyswietl = String(parseFloat(wyswietl+String(key)));
		
		
		document.getElementById("ekran").innerHTML = wyswietl;
		}
	}
	
	
	
	
	
	
	
}