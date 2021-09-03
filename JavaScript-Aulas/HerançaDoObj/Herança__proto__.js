// um objeto em js tem uma referencia para seu prototipo, essa é a forma que js definem herança. 


function Carros(modelo, velMax){
    return {
        modelo,
        velMax
    }
}

const ferrari = Carros('f40', 324)
const volvo = Carros('v40', 200)



console.log(ferrari.__proto__)  

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null) 


