var x = 8;
var y = 8;
var ilosc_bomb = 10;
var plansza = [];
var odkryte = []; //0=zakryte, 1 = odkryte, 2=flaga

var przegrana = false;

var pierwsze_klikniecie = true;

document.addEventListener('contextmenu', event => event.preventDefault()); //wyłącza okienko przy lewym przycisku

function start() {
    przegrana = false;
    pierwsze_klikniecie = true;
    //bierze dane z srtony
    document.getElementById("ukryj").hidden = true;
    document.getElementById("komunikat").hidden = true;
    var tryb = document.getElementsByName('lvl'); //1=easy, 2= normal, 3=hard, 4=custom

    for (i = 0; i < tryb.length; i++) {
        if (tryb[i].checked)
            tryb = tryb[i].value;
    }
            
    switch (tryb) {
        case '1':
            x = 9;
            y = 9;
            ilosc_bomb = 10;
            break;
        case '2':
            x = 16;
            y = 16;
            ilosc_bomb = 40;
            break;
        case '3':
            x = 30;
            y = 16;
            ilosc_bomb = 99;
            break;
        case '4':
            x = parseInt(document.getElementById("x").value);
            y = parseInt(document.getElementById("y").value);
            ilosc_bomb = parseInt(document.getElementById("bomby").value);
            break;

    }

    document.getElementById("ekran").style.width = (x * 25) + "px";




    //tworzy plansze wypełnioną zerami
    let dlugosc_x = "";
    for (let i = 0; i < x; i++) {
        dlugosc_x += "0"
    }
    for (let i = 0; i < y; i++) {
        plansza[i] = dlugosc_x;
        odkryte[i] = dlugosc_x;
    }

    //kładzie bomby
    for (let i = 0; i < ilosc_bomb; i++) {
        bomby();
    }

    //ustawia cyfry wokół bomb
    for (let j = 0; j < y; j++) {
        for (let i = 0; i < x; i++) {
            let liczenie = 0;
            if (plansza[j][i] == "B") {
                continue;
            }

            if (typeof plansza[j - 1] !== 'undefined') {

                if (plansza[j - 1][i + 1] == "B") {
                liczenie++;
                }

                if (plansza[j - 1][i] == "B") {
                    liczenie++;
                }

                if (plansza[j - 1][i - 1] == "B") {
                    liczenie++;
                }
            }

            if (typeof plansza[j + 1] !== 'undefined') {
                if (plansza[j+1][i+1] == "B") {
                    liczenie++;
                }

                if (plansza[j+1][i] == "B") {
                    liczenie++;
                }

                if (plansza[j + 1][i - 1] == "B") {
                    liczenie++;
                }
            }
            if (plansza[j][i + 1] == "B") {
                liczenie++;
            }
            if (plansza[j][i - 1] == "B") {
                liczenie++;
            }
            plansza[j] = plansza[j].replaceAt(i, String(liczenie));
            liczenie=0;
        }
    }

    //wyświetla na ekranie planszę
    wyswietl();
}


function bomby() {
    let rand_X = Math.floor(Math.random() * x);
    let rand_Y = Math.floor(Math.random() * y);
    if (plansza[rand_Y][rand_X] != "B") {
        plansza[rand_Y] = plansza[rand_Y].replaceAt(rand_X, "B");
    } else {
        bomby();
    }
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function wyswietl() {
    let ekran = ""

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            if (odkryte[i][j] == "1") {
                if (plansza[i][j] == '0') {
                    ekran += "<div class='odkryte pole'></div>"
                } else if (plansza[i][j] == '1'){
                    ekran += "<div class='odkryte pole' style='color: blue;'>" + 1 + "</div>"
                } else if (plansza[i][j] == '2') {
                    ekran += "<div class='odkryte pole' style='color: green;'>" + 2 + "</div>"
                } else if (plansza[i][j] == '3') {
                    ekran += "<div class='odkryte pole' style='color: red;'>" + 3 + "</div>"
                } else if (plansza[i][j] == '4') {
                    ekran += "<div class='odkryte pole' style='color: darkblue;'>" + 4 + "</div>"
                } else if (plansza[i][j] == '5') {
                    ekran += "<div class='odkryte pole' style='color: brown;'>" + 5 + "</div>"
                } else if (plansza[i][j] == '6') {
                    ekran += "<div class='odkryte pole' style='color: lihgtblue;'>" + 6 + "</div>"
                } else if (plansza[i][j] == '7') {
                    ekran += "<div class='odkryte pole' style='color: black;'>" + 7 + "</div>"
                } else if (plansza[i][j] == '8') {
                    ekran += "<div class='odkryte pole' style='color: black;'>" + 8 + "</div>"
                }
            } else if (odkryte[i][j] == "2"){
                ekran += "<div class='flaga pole' oncontextmenu='lewy(" + i + "," + j + ")'></div>";
            }else {
                ekran += "<div class='zakryte pole' onclick='kliknij(" + i + "," + j + ")' oncontextmenu='lewy(" + i + "," + j + ")'></div>";
            }

        }
        ekran += "<div class='nowalinia'></div>"
    }
    document.getElementById("ekran").innerHTML = ekran;
    
}

function kliknij(Y, X) {
    if (plansza[Y][X] != 'B' && !przegrana) {
        if (plansza[Y][X] == 0) {

            odkryte[Y] = odkryte[Y].replaceAt(X, "1");


            if (typeof plansza[Y + 1] !== 'undefined') {
                if (odkryte[Y + 1][X + 1] == "0") {
                    kliknij(Y + 1, X + 1);
                }
                if (odkryte[Y + 1][X] == "0") { //x
                    kliknij(Y + 1, X);
                }
                if (odkryte[Y + 1][X - 1] == "0") { //x-1
                    kliknij(Y + 1, X - 1);
                }
            }

            if (typeof plansza[Y - 1] !== 'undefined') {
                if (odkryte[Y - 1][X + 1] == "0") {
                    kliknij(Y - 1, X + 1);
                }
                if (odkryte[Y - 1][X] == "0") {
                    kliknij(Y - 1, X);
                }
                if (odkryte[Y - 1][X - 1] == "0") {
                    kliknij(Y - 1, X - 1);
                }
            }

            if (odkryte[Y][X + 1] == "0") {
                kliknij(Y, X + 1);
            }

            if (odkryte[Y][X - 1] == "0") {
                kliknij(Y, X - 1);
            }

        } else {
            odkryte[Y] = odkryte[Y].replaceAt(X, "1");
        }
        pierwsze_klikniecie = false;
        wyswietl();
    } else {
        if (pierwsze_klikniecie) {
            start();
            kliknij(Y, X);
            pierwsze_klikniecie = false;
        } else {
            document.getElementById("komunikat").hidden = false;//przegrana
            przegrana = true;
            return 0;
        }
    }
    wygrana();
    
}

function lewy(Y, X) {
    if (odkryte[Y][X] == "2") {
        odkryte[Y] = odkryte[Y].replaceAt(X, "0");
    } else {
        odkryte[Y] = odkryte[Y].replaceAt(X, "2");    
    }
    wyswietl();
}

function wygrana() { //sprawdza czy gra została ukończona
    let zakryte_pola = 0;
    for (let j = 0; j < y; j++) {
        for (let i = 0; i < x; i++) {
            if (odkryte[j][i] == "0" && plansza[j][i] != "B") {
                zakryte_pola++;
            }
            if (odkryte[j][i] == "2" && plansza[j][i] != "B") {
                zakryte_pola++;
            }

        }
    }
    if (zakryte_pola == 0) {
        alert("BRAWO");
    }
}




function showaj(howaj) {
    document.getElementById("custom").disa = howaj;
}