//Através de uma factory function, criar carros:

function criarCarros (Modelo, Marca,Cor, Ano, Quilometragem, Preço){
    return{
        Modelo,
        Marca,
        Cor,
        Ano,
        Quilometragem,
        Preço,
        TrocarCarro(){
            return 2021 - 8
        }
    }
}

const carro1 = criarCarros('Onix','Chevrolet','Prata', 2013, 102.000, 30.000)
const carro2 = criarCarros('Corsa Hatch','Chevrolet','Cinza', 2010, 120.000, 20.000)


console.log(carro1)
console.log(carro2)
console.log(carro2.TrocarCarro())