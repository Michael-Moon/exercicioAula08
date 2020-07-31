
 var arrow = (num)=> {
    var divi=0;
     for (var i = 1; i <=num; i++ ) {
         if (num % i == 0){
             divi++;
         }
     }
     if(divi == 2){
         return  "é primo"
     }else {
         return "não é primo"
     }
 }
 console.log(arrow(97));