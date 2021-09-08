const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

var czyRysowac = false;
var rozmiar = 50;
var rozmiarRamion = 0.5;
var ramiona = 5;
var obrot = 0.2;
var ustawienie=0;
var tecza = true;
//ctx.fillStyle="blue"; //wypełnienie
ctx.lineWidth = 5;   //grubość linii
//ctx.strokeStyle = "green"; // kolor linii
//ctx.shadowOffsetX = 10; 	//ułożenie cienia
//ctx.shadowOffsety = 10; 
//ctx.shadowBlur= 10; //rozmycie cienia
//ctx.shadowColor = 'red'; //kolor cienia
//ctx.globalCompositeOperation = "destination-over"; //rysowanie "do tyłu"
//ctx.globalCompositeOperation = "hue"; //rysowanie "do tyłu" z pół prezroczystym tłem
//ctx.globalCompositeOperation = "lighter"; //mieszanie kolorów





var sliderPromien = document.getElementById("Promien");
var output = document.getElementById("promienWartosc");
rozmiar = sliderPromien.value;
output.innerHTML = sliderPromien.value;

sliderPromien.oninput = function() {
  rozmiar = sliderPromien.value;
  output.innerHTML = sliderPromien.value;
  rysuj(100,100,rozmiar, rozmiarRamion, ramiona);
} 


var sliderRamionka = document.getElementById("Ramionka");
var output1 = document.getElementById("RamionkaWartosc");
rozmiarRamion = sliderRamionka.value;
output1.innerHTML = sliderPromien.value;

sliderRamionka.oninput = function() {
  rozmiarRamion = sliderRamionka.value;
  output1.innerHTML = sliderRamionka.value;
  rysuj(100,100,rozmiar, rozmiarRamion, ramiona);
} 



var sliderObrot = document.getElementById("Obrot");
var output3 = document.getElementById("ObrotWartosc");
obrot = sliderObrot.value;
output3.innerHTML = sliderObrot.value;

sliderObrot.oninput = function() {
  obrot = sliderObrot.value;
  output3.innerHTML = sliderObrot.value;
} 



var sliderIloscRamion = document.getElementById("Ilosc");
var output2 = document.getElementById("IloscWartosc");
ramiona = sliderIloscRamion.value;
output2.innerHTML = sliderIloscRamion.value;

sliderIloscRamion.oninput = function() {
  ramiona = sliderIloscRamion.value;
  output2.innerHTML = sliderIloscRamion.value;
  rysuj(100,100,rozmiar, rozmiarRamion, ramiona);
} 

const kolorTla = document.getElementById('kolortla');
ctx.fillStyle=kolorTla.value;

kolorTla.oninput = function() {
	ctx.fillStyle=kolorTla.value;
}


const kolorRamki = document.getElementById('kolorramki');
ctx.strokeStyle =kolorRamki.value;

kolorRamki.oninput = function() {
	ctx.strokeStyle = kolorRamki.value;
}

function TeczaOn(){
	if (tecza){
		tecza= false;
		ctx.strokeStyle = kolorRamki.value;
		ctx.fillStyle=kolorTla.value;
	}else{
		tecza= true;
	}
}




var hue = 0;


function rysuj(x, y, promien, ramiona, n) {


if (tecza){
ctx.fillStyle = 'hsl('+hue+',100%,50%)';
}

ctx.beginPath();
ctx.save();

ctx.translate(x,y);	// ustwawia punkt 0,0 na x,y 
ctx.moveTo(0, 0-promien);				//prznosi punkt startowy
//.lineTo(0, 0-promien);		// rysuje linię do 0 , 0-promien

for(let i= 0; i<n; i++){

ctx.rotate(Math.PI/n);          //obraca o podany radian PI = 180stopni
ctx.lineTo(0, 0-(promien*ramiona));
ctx.rotate(Math.PI/n);         
ctx.lineTo(0, 0-promien);
}

ctx.restore();
ctx.closePath(); // dokańcza linię aby stworzyć figurę
ctx.stroke();
ctx.fill();
}


window.addEventListener('mousemove', function(event){
	if (czyRysowac){
		
		hue++;
		
		ctx.save();
		ctx.translate(event.x,event.y);
		ctx.rotate(ustawienie);
		ustawienie=ustawienie + parseFloat(obrot);
		
		
	rysuj(0,0,rozmiar, rozmiarRamion, ramiona);
	ctx.restore();
	}
});
window.addEventListener('mousedown', function(event){
	czyRysowac = true;
	rysuj(event.x,event.y,rozmiar, rozmiarRamion, ramiona);
});
window.addEventListener('mouseup', function(event){
	czyRysowac = false;
});






