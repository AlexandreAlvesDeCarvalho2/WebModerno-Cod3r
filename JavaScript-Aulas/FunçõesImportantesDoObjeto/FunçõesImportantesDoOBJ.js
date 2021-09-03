function CriarPessoa(nome, idade, peso){
    return {
        nome,
        idade,
        peso,
    }
}


const Pessoa1 = CriarPessoa('Rebeca', '29', 65)


console.log(Pessoa1)
console.log(Object.keys(Pessoa1)) // Object.keys irá mostrar a chave
console.log(Object.values(Pessoa1)) // Object.values irá mostrar o valor 
console.log(Object.entries(Pessoa1)) // Object.entries irá mostrar o um array com a chave e os valores 

Object.freeze // congela o objeto, não podendo ter alteração.


Object.preventExtensions // previne que o objeto não seja extendido, você pode excluir objetos.

const produto = Object.preventExtensions({
    nome: 'qlqr nome',
    preço: 1.99,
    tag: 'promoção'
})
 
console.log('Extensivel:', Object.isExtensible(produto))


Object.seal // não consegue adicionar nem excluir atributos, mas consegue alterar os atributos que já existem