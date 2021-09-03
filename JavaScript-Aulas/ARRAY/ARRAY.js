//Formas de criar um Array e modificalo. 

aprovados = ['Bia', 'Carlos', 'Ana']

console.log(aprovados)

// metodo push, mais usado 
aprovados.push('Pedrinho')

// segundo metodo, mais usado para substituir o index desejado

aprovados[4]= 'Priscila'


console.log(aprovados)

// reordenar array

aprovados.sort()
console.log(aprovados)



/* Metodo Splice, consegue incluir um item de um determinado indice,
consegue excluir item de um determinado, pode também incluir e excluir
itens de um determinado indice */


aprovados.splice(3,0, 'juquinha', 'Robinho') 
 /* o primeiro parametro é indice,
o segundo é para excluir e terceiro serve para adicionar elementros*/

console.log(aprovados)
