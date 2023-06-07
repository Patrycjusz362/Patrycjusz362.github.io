function Rzecz(nazwa,opis,typ,png,decx,decy,inne) {
    this.nazwa = nazwa;
    this.opis = opis;
    this.typ = typ;
    this.png = 'images/'+png+'.png';
    this.decx = decx;
    this.decy = decy;
    this.inne = inne;
}
function Obiekt(id,x,y,rzecz){
    this.id = id;
    this.x = x;
    this.y = y;
    this.rzecz = structuredClone(rzecz);
}

var rzeczy = new Array();//itemy jakie można stawiać
var obiekty = new Array(5+1);//obiekty na ziemi

function stworzRzeczyIObiekty(){
    rzeczy.push(new Rzecz("pusto","pustka, nic tu nie ma","pusto","pusty",0,0,{}));//rzeczy[0] jest zarezerwowane dla pustego pola
    
    for(var i = 1; i < obiekty.length; i++){
        obiekty[i] = new Array(obiekty.length);
        for(var j = 1; j < obiekty[i].length; j++){
            obiekty[i][j] = new Obiekt(ppmap.addObject(i, j, rzeczy[0].png, rzeczy[0].decx, rzeczy[0].decy, rzeczy[0].typ),i,j,rzeczy[0]);
        }
    }
    
    rzeczy.push(new Rzecz("Półka","Mała półka","polka","polka-1",0, -480,{}));
}


function usunObiekt(x,y){
    if (obiekty[x][y].rzecz.nazwa!="pusto"){
        ppmap.killObject(obiekty[x][y].id);
        obiekty[x][y] = new Obiekt(ppmap.addObject(x, y, rzeczy[0].png, rzeczy[0].decx, rzeczy[0].decy, rzeczy[0].typ),x,y,rzeczy[0]);
        return true;
    }
    return false;
}

function postawObiekt(x,y,id){
    x=parseInt(x);
    y=parseInt(y);
    if(obiekty[x][y].rzecz.nazwa=="pusto"){//stawia tylko jak jest pusto

        ppmap.killObject(obiekty[x][y].id);

        obiekty[x][y] = new Obiekt(ppmap.addObject(x, y, rzeczy[id].png, rzeczy[id].decx, rzeczy[id].decy, rzeczy[id].typ),x,y,rzeczy[id]);

        return obiekty[x][y];
    }else{
        return false;
    }
}

function pokazObiekt(x,y){
    if (obiekty[x][y].rzecz.nazwa!="pusto"){
        return obiekty[x][y];
    }else{
        return false;
    }
}

function usunCursor(){
    ppmap.cursor('images/cursor.png', 'images/pusty.png', 0, 0);
}
