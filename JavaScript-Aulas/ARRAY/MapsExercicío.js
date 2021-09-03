const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um Array apenas com os precos
const apenasPrecos = carrinho.map(function(e){            // aqui eu transformei o texto em String
    return JSON.parse(e).preco
})
// testando se aprendi \/ 
const apenasPrecos2 = apenasPrecos.map(function(e){
    return 'R$' + e.toFixed(2).replace('.',',')
})
// consegui mudar para dinheiro e fixar 2 casas decimais..W
console.log(apenasPrecos)
console.log(apenasPrecos2)