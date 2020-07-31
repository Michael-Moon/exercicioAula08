var notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];
var aux = [];
function notasAltas() {
    var qnts=0;
    for (var i =0; i < notas.length; i++){
        if(notas[i] > 7){
            aux [qnts] = notas[i];
            qnts++;
        }
    }
    return aux;
}
console.log (notasAltas());