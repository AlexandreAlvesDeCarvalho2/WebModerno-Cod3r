/* 
filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array
com todos os valores para os quais o callback retornou o valor true ou  um valor que seja convertido para true.
O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices 
que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não
passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.
*/

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPad pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
 

 console.log(produtos.filter(function(p){
     return p.preco > 2400

 }))


 const Filtropreco = e => e.preco > 0

 console.log(produtos.filter(Filtropreco))
 

 /*Criar duas funcoes e chamar o metodo filter 2x para filtrar os elementos
  iguais ou maiores do que 15 reais e frageis*/
  
console.log(produtos.filter(function(p){
    return p.preco >= 15.00 && p.fragil == true
}))


// fazer da forma encadeada 

const MaiorIgual = e => e.preco >= 15   // 
const ProdFragil = e => e.fragil == true

const resultado = produtos.filter(MaiorIgual).filter(ProdFragil)

console.log(resultado)