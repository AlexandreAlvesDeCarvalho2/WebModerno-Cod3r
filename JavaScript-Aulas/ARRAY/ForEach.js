

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


forEach executa o callback fornecido uma vez para cada elemento da ordem com um valor atribuido.
Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados
(por ex. em arrays esparsos).
callback é invocado com três argumentos:

o valor do elemento
o índice do elemento
o array que está sendo percorrido

*/


const aprovados = ['Agatha','Aldo', 'Pedro','Lucas'] //Array para exemplo

//exemplo 1, Nesse metodo o primeiro parametro é obrigatório para poder ter o indice como segundo parametro

aprovados.forEach(function(nome, indice){
   console.log( `${indice+1}) ${nome}`
    )
})

// exemplo 2, Nesse metodo foi utilizada a function arrow, e foi usado somente o primeiro parâmetro

aprovados.forEach((nome,index) => console.log(index+1, nome))


/* exemplo 3, a função Arrow foi armazenada em uma const para poder ser reutilizada,
logo em seguida no console.log foi concatenado uma string + elemento */ 

const ParaCada = (e, index) => console.log( index+1+')',e )

aprovados.forEach(ParaCada)
