    const alunos = [
            { nome: "Maria", nota: 7.3, bolsista: true },
            { nome: "Joao", nota: 9.2, bolsista: false },
            { nome: "Bernadeu", nota: 9.8, bolsista: false },
            { nome: "Ana", nota: 8.7, bolsista: true },
        ]
    
        // todos os alunos são bolsistas ? 
    
    
        const alunos2= e => e.bolsista 
        const TodosSãoBolsistas = (e,e2) => e && e2
        const AlgunsSãoBOlsistas = (e,e2) => e || e2 
    
        console.log( alunos.map(alunos2).reduce(TodosSãoBolsistas)) // acertei caraio KKK 
    
        // Algum aluno é bolsista ? 
        
        console.log( alunos.map(alunos2).reduce(AlgunsSãoBOlsistas)) 
    
    
    