/* O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem,
e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os 
elementos do array original que tiverem valores atribuídos;
os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos
não serão considerados.

A função callback é chamada com três argumentos:
o valor do elemento corrente,
o índice do elemento corrente
o array original que está sendo percorrido.
*/

const nums = [1, 2, 3, 4, 5]
const nums2 = [5, 6, 7, 8, 9]


let resultado = nums.map(function(e) {
    return e * 20
})
console.log(resultado)

     
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${e.toFixed(2).replace('.', ',')}`
 
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

resultado2 = nums2.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado2)