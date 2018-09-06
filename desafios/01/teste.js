function shufflePerfeito (lista) {
    if (lista.length % 2 !== 0) {
        throw "A lista deve ter um número par de elementos!"
    }

    const metade = lista.length / 2
    let esquerda = lista.slice(0, metade)
    let direita = lista.slice(metade, lista.length)

    let embaralhada = []

    while (arraysAreEqual(lista, embaralhada) === false) {
        embaralhada = []

        for (let i = 0; i < metade; i++) {
            embaralhada.push(esquerda[i], direita[i])
        }

        esquerda = embaralhada.slice(0, metade)
        direita = embaralhada.slice(metade, lista.length)
    
    }
}