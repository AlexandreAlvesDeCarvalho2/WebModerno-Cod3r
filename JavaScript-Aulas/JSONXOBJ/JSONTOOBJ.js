

//Json é um formato de texto 

//transformar JSON em OBJ

const obj = {
    a: 1, b: 2, c: 3, soma() {
        return a + b + c
    }
} 

// json não lê as funções, pois é só para textos


// para transformar um OBJ em formato JSON => JSON.stringify(obj)


console.log(JSON.stringify(obj)) // exemplo

// o formato JSON só é permitido com aspas duplas.. 

// para transformar um text em obj => JSON.parse(obj)


console.log(JSON.parse('{"a": 1, "b": 2, "c" : 3}'))    // exemplo


