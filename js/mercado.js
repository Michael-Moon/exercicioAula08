var produtos ={
    nome: ["maça","cerveja","salgadinho"],
    preco: [3,12,4]
};
function somaProdutos() {
    var somaTotal=0;
    for (var i = 0; i < produtos.preco.length; i++){        
        somaTotal += produtos.preco[i];                 
    }
    return somaTotal;       
}
console.log (somaProdutos());
