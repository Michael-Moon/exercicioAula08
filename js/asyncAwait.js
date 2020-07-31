function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {        
        for (var i=10; i > 0; i--){
            console.log(i);
        }
        resolve("Feliz Ano Novo!")
      }, 2000);
    });
  }

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
   
  }
  
  asyncCall();
  