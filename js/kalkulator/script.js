var wyswietl="0";
var wynik=0;
var pierwsza_liczba=0;
var druga_liczba=0;
var operacja="";
var koniec=false;

function przycisk(key){
	if (koniec== true&&key!="="){
			druga_liczba=0;
			operacja=""
			koniec=false;
		}
	
	if(isNaN(key)){//nie jest cyfrą
	
		
		if (operacja!=""&&key!="="){
			przycisk("=");
			
		}
		if(key=="+"){
			operacja="+";
			wyswietl="0";
		}else if(key=="*"){
			operacja="*";
			wyswietl="0";
		}else if(key=="/"){
			operacja="/";
			wyswietl="0";
		}else if(key=="-"){
			operacja="-";
			wyswietl="0";
		}else if(key=="√"){
			
			wynik=0;
			pierwsza_liczba=Math.sqrt(pierwsza_liczba);
			druga_liczba=0;
			wyswietl = pierwsza_liczba;
		}else if(key=="^"){
			operacja="^";
			wyswietl="0";
		}
		else if(key=="."){
			if(operacja==""){
			pierwsza_liczba = pierwsza_liczba+key;
			wyswietl=pierwsza_liczba;
			}else{
			druga_liczba = druga_liczba+key;
			wyswietl=druga_liczba+key;
			}
		}
		else if(key=="c"){
			wyswietl="0";
			wynik=0;
			pierwsza_liczba=0;
			druga_liczba=0;
			operacja="";
			wyswietl="0";
		}
		else if(key=="="){
			
			if (operacja=="+"){
			wynik = parseFloat(pierwsza_liczba) + parseFloat(druga_liczba);
			pierwsza_liczba = wynik;
			}else if (operacja=="-"){
			wynik = parseFloat(pierwsza_liczba) - parseFloat(druga_liczba);
			pierwsza_liczba = wynik;
			}else if (operacja=="*"){
			wynik = parseFloat(pierwsza_liczba) * parseFloat(druga_liczba);
			pierwsza_liczba = wynik;
			}else if (operacja=="/"){
			if (druga_liczba == 0){
				wyswietl="0";
				wynik=0;
				pierwsza_liczba=0;
				druga_liczba=0;
				operacja="";
				wyswietl="0";
				alert("Nie dziel przez 0!!");
			}else{
			wynik = parseFloat(pierwsza_liczba) / parseFloat(druga_liczba);
			pierwsza_liczba = wynik;
			}
			}else if (operacja=="^"){
				wynik = Math.pow(pierwsza_liczba, druga_liczba);
			}
			
			wyswietl = wynik;
			pierwsza_liczba=wynik;
			wynik=0;
			koniec=true;
			
		}
	
	}else{//jest cyfrą
		if(operacja==""){
		pierwsza_liczba = String(parseFloat(pierwsza_liczba+String(key)));
		wyswietl=pierwsza_liczba;
		}else{	
		druga_liczba = String(parseFloat(druga_liczba+String(key)));
		wyswietl=druga_liczba;	
		}
	}
	document.getElementById("ekran").innerHTML = wyswietl;
	console.log(pierwsza_liczba+" "+druga_liczba);
}