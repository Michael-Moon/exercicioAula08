let contPromise = new Promise ((happyNewYear) =>{
    var ano =10;
    for (var i = 0; i < ano; ano--){
        console.log(ano);
        
    }
    if (ano <= 0){       
        happyNewYear("Feliz Ano Novo!");
    }
       
       
})

contPromise.then((message) => {
    console.log(message);
})