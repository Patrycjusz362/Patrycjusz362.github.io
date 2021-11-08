var wymiar_x = 10;
var wymiar_y = 10;
var mapa=[];
var pozycjaGracza=38;
var pozycjaJablka;
var kierunek = "d";
var dlugosc=4;
var ustawienie_speed = 10;
var speed = ustawienie_speed;
var tryb = "pusty";



function start(){
var doUsuniecia = document.getElementsByClassName("znika");
for(let i = 0; i < doUsuniecia.length; i++) {
    doUsuniecia[i].style.display = "none";
  }


wymiar_x = parseInt(document.getElementById("x").value);
wymiar_y = parseInt(document.getElementById("y").value);
mapa=[];
pozycjaGracza=parseInt((wymiar_x/4)+((wymiar_y*wymiar_x)/2));

document.getElementById("mapa").style.width = wymiar_x*20+"px"
document.getElementById("mapa").style.height = wymiar_y*20+"px"

kierunek = "d";
dlugosc=4;
ustawienie_speed = document.getElementById("speed").value;
speed = ustawienie_speed;



tryb=document.getElementById("tryb").value;
console.log(tryb);




for (let j=0; j<wymiar_y*wymiar_x; j++){
	mapa[j]= 0;
	if (tryb=="box"&&(j<wymiar_x||j%wymiar_x==0||j%wymiar_x==wymiar_x-1||(j<wymiar_x*wymiar_y&&j>(wymiar_x*wymiar_y)-wymiar_x))){
		mapa[j]= "wall";
	}
}
	
pozycjaJablka=losuj();
	gra();
}

if (window.height>window.width){
	documen.getElementById("telefon").style
}


function gra(){
	ruch();
	rysuj();
	setTimeout(gra, 40);
}

function ruch(){
	
	if (speed==0){
		
		
		if (pozycjaGracza == 0&&kierunek=="a"){
			pozycjaGracza=wymiar_x;
		}else if ((pozycjaGracza%wymiar_x==0)&&(pozycjaGracza!=0)&&(kierunek=="a")){//lewo
			pozycjaGracza+=wymiar_x;	
		}else if ((pozycjaGracza%wymiar_x==wymiar_x-1)&&(kierunek=="d")){//prawo
			pozycjaGracza-=wymiar_x;	
		}else if ((pozycjaGracza<=wymiar_x)&&(kierunek=="w")&&pozycjaGracza!=wymiar_x){//góra
			pozycjaGracza=(wymiar_x*wymiar_y)-(wymiar_x-pozycjaGracza)+wymiar_x;	
		}else if ((pozycjaGracza>=(wymiar_y*wymiar_x)-wymiar_x)&&(kierunek=="s")){//dół
			console.log("down");
			pozycjaGracza-=(wymiar_x*wymiar_y);	
		}	
		
		
	switch(kierunek){
		case "w":
		pozycjaGracza-=wymiar_x;
			break;
		case "a":
		pozycjaGracza=pozycjaGracza-1;
			break;
		case "s":
		pozycjaGracza+=wymiar_x;
			break;
		case "d":
		pozycjaGracza=pozycjaGracza+1;
			break;
	}
	
	
	//console.log(pozycjaGracza);
	if (pozycjaGracza == pozycjaJablka){
		dlugosc++;
		mapa[pozycjaGracza]=dlugosc;
		pozycjaJablka=losuj();
	}else if (mapa[pozycjaGracza]==0){
		
		for (let i=0; i<mapa.length;i++ ){
			if (mapa[i]!=0){
			mapa[i]=mapa[i]-1;
			}
		}
		
		mapa[pozycjaGracza]=dlugosc;
		
		
		
		
	}else {
		przegrana();
	}
	speed=ustawienie_speed;
	}else{
		speed--;
	}
	
}


function rysuj(){
	let wynik="";
	for (let j=0; j<wymiar_y; j++){
		
		wynik+="<div style='clear:both;'></div>";
	for (let i=0; i<wymiar_x; i++){
		let x=i+(j*wymiar_x);
		
		if (x==pozycjaJablka){
			wynik+='<div class="jablko"></div>';
		}else if (mapa[x]==0){
			wynik+='<div class="tlo"></div>';
		}else if (!isNaN(mapa[x])){
			wynik+='<div class="waz"></div>';
		}
		else{
			wynik+='<div class="sciana"></div>';
		}
	}
	
	}
	document.getElementById("mapa").innerHTML=(wynik);
	document.getElementById("score").innerHTML="Punkty: "+ String(dlugosc-4);
}



function losuj(){
	let losowa_cyfra;
	do {
	losowa_cyfra = Math.floor(Math.random() * mapa.length)	
	}while (mapa[losowa_cyfra]!=0)
	
	return losowa_cyfra;
}




function myKeyPress(e){
  var keynum;
  if(window.event) { // IE                  
    keynum = e.keyCode;
  } else if(e.which){ // Netscape/Firefox/Opera                 
    keynum = e.which;
  }

  zmienkirunek(String.fromCharCode(keynum));


}

function przegrana(){
	console.log("Przegrana");
	confirm("Przegrałeś");
	location.reload();
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


