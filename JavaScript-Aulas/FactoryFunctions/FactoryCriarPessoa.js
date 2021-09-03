//Através de uma função fabrica (Factory function), Criar uma pesso: 


function CriarPessoa(nome, idade, endereço) {
    return {
        nome,
        idade,
        endereço
    }
}

const Pessoa1 = CriarPessoa('Alexandre', 28, 'Av melchert 439, apto 32')

console.log(Pessoa1)
