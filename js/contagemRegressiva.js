function contagemRegressiva (callback) {
    setTimeout (function(){
         for (var i = 10; i >= 0; i--) {        
             console.log(i);        
         }         
        callback();
    },3000);  
}
function happpyNewYear(){
    console.log("Feliz Ano Novo!");
 }
contagemRegressiva(happpyNewYear);
