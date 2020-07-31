/*var escola ={
    nomeEs = ["Luke","Leia","Vader","Kylo","Obiwan"],
    serieEs =[8,9,8,9,8]
};*/

function alunoSerie (nome , serie) {
var alunoFisica=[];
var alunoHistoria=[];
var x=0,j=0;
    for (var i = 0; i < nome.length; i++){
        if (serie[i] == 8 ){
            alunoHistoria[j] = nome[i]; 
            j++;           
            //alunos v]ao ter historia
        }else if (serie[i] == 9) {
            alunoFisica[x] = nome[i];
            x++;           
        }
    }
    return "Alunos de Historia são: " + alunoHistoria + " Alunos de Física são: " + alunoFisica;
    
}
console.log(alunoSerie(["Luke","Leia","Vader","Kylo","Obiwan"],[8,9,8,9,8]));
