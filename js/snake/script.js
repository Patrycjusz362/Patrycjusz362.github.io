var wymiar_x = 10;
var wymiar_y = 10;
var mapa=[];
var pozycjaGracza=38;
var pozycjaJablka;
var kierunek = "d";
var dlugosc=4;
var ustawienie_speed = 10;
var speed = ustawienie_speed;




function start(){
document.getElementById("button").style.visibility = "hidden";
wymiar_x = 20;
wymiar_y = 20;
mapa=[];
pozycjaGracza=parseInt((wymiar_x/4)+((wymiar_y*wymiar_x)/2));

kierunek = "d";
dlugosc=4;
ustawienie_speed = 5;
speed = ustawienie_speed;

for (let j=0; j<wymiar_y*wymiar_x; j++){
	mapa[j]= 0;
}
	
pozycjaJablka=losuj();
	gra();
}



function gra(){
	ruch();
	rysuj();
	setTimeout(gra, 10);
}

function ruch(){
	
	if (speed==0){
		
	switch(kierunek){
		case "w":
		pozycjaGracza=pozycjaGracza-wymiar_x;
			break;
		case "a":
		pozycjaGracza=pozycjaGracza-1;
			break;
		case "s":
		pozycjaGracza=pozycjaGracza+wymiar_x;
			break;
		case "d":
		pozycjaGracza=pozycjaGracza+1;
			break;
	}
	
	if (pozycjaGracza == pozycjaJablka){
		dlugosc++;
		mapa[pozycjaGracza]=dlugosc;
		pozycjaJablka=losuj();
		return "jablko";
	}
	
	if (mapa[pozycjaGracza]==0){
		
		for (let i=0; i<mapa.length;i++ ){
			if (mapa[i]!=0){
			mapa[i]=mapa[i]-1;
			}
		}
		
		mapa[pozycjaGracza]=dlugosc;
		
		if ((pozycjaGracza%wymiar_x==0)&&(pozycjaGracza!=0)&&(kierunek=="d")){
		
		alert("ded");
		return "ded";		
		}else if ((pozycjaGracza%wymiar_x==wymiar_x-1)&&(kierunek=="a")){
			
				alert("ded");
		return "ded";	
				
			}
		
		
	}else {alert("ded");}
	speed=ustawienie_speed;
	}else{
		speed--;
	}
	
}


function rysuj(){
	let wynik="";
	for (let j=0; j<wymiar_y; j++){
		
		wynik+="<div style='clear:both;' ></div>";
	for (let i=0; i<wymiar_x; i++){
		let x=i+(j*wymiar_x);
		
		if (x==pozycjaJablka){
			wynik+='<div class="jablko"></div>';
		}else if (mapa[x]==0){
			wynik+='<div class="tlo"></div>';
		}else{
			wynik+='<div class="waz"></div>';
		}
	}
	
	}
	document.getElementById("mapa").innerHTML=(wynik);
	document.getElementById("score").innerHTML="Punkty: "+ String(dlugosc-4);
}



function losuj(){
	return Math.floor(Math.random() * mapa.length);
}




function myKeyPress(e){
  var keynum;
  if(window.event) { // IE                  
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera                 
    keynum = e.which;
  }

  zmienkirunek(String.fromCharCode(keynum))


}



function zmienkirunek(przycisk){
	
	
  if ((przycisk =="w")&&(kierunek!="s")){
	  kierunek =przycisk;
  }
  if ((przycisk =="a")&&(kierunek!="d")){
	  kierunek =przycisk;
  }
  if ((przycisk =="s")&&(kierunek!="w")){
	  kierunek =przycisk;
  }
  if ((przycisk =="d")&&(kierunek!="a")){
	  kierunek =przycisk;
  }
	
	
	
	
	
}

