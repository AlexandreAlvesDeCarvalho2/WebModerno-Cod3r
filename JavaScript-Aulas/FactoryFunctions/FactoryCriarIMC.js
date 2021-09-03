//Através de Uma factory function, Criar Imc:

function criarImc (Nome, Idade, Altura, Peso){
    return {
        Nome,
        Idade,
        Altura,
        Peso,
        calculoImc() {
           return Peso / (Altura * Altura)
  
        }
    }
}

const imc1 = criarImc('Alexandre', 28 , 1.70 , 73)

console.log(imc1.Nome)
console.log(imc1.Idade)
console.log(imc1.Altura)
console.log(imc1.Peso)
console.log(imc1.calculoImc())


