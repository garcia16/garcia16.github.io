var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
var jugador = 1;

var img = document.createElement('img');
       img.src = "C:\Users\Developer\Desktop\JavaScript\3 en Raya\cruz.png";

function dibujar(){
    for(i=0; i<9; i++){
        if(mapa[i] == 0) document.getElementById("c"+i).style="background-color: white";
        if(mapa[i] == 1) {
            document.getElementById("c"+i).innerHTML="<img src='cruz.png' height='100' width='100'/>";
            document.getElementById("turno").innerHTML="PLAYER 2 - 0";
            document.getElementById("turno").style='color:blue';
         }
        if(mapa[i] == 2) {
            document.getElementById("c"+i).innerHTML="<img src='circle.png' height='100' width='100'/>";
            document.getElementById("turno").innerHTML="PLAYER 1 - X";
            document.getElementById("turno").style='color:red';
        }
    }
}
function pcelda(celda){
    if (mapa[celda]==0) {
        if (jugador==1){
            mapa[celda]=1;
            jugador=2;
        } else {
            mapa[celda]=2;
            jugador=1; 
        }
    } else {
         window.alert("No puedes pulsar sobre una celda coloreada");
    }
    dibujar();
    var r = ganador();
    switch(r){
        case 0:
            break;
        case 1:
            window.alert("¡Gana el Jugador 1!");
            break;
        case 2:
            window.alert("¡Gana el Jugador 2!");
            break;
        case 3:
            window.alert("¡Empate!");
            break; 
    }
}
function ganador(){
    var numEspacios=0;
    for(i=0; i<9; i++){
        if(mapa[i] == 0) numEspacios++;
    }
    // Las líneas horizontales
    if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) return mapa[0];
    if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) return mapa[3];
    if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) return mapa[6];
    //Las líneas verticales
    if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) return mapa[0];
    if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) return mapa[1];
    if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) return mapa[2];
    //Las diagonales
    if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) return mapa[0];
    if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) return mapa[2];

    if (numEspacios > 0){
        return 0;
    } else {
        return 3;
    }
}