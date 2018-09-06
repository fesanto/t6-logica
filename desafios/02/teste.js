function criarNovaLinha(linha) {
    let prox_linha = [1]
    console.log("linha", linha)
    
    for (let i = 1; i < linha.length; i++){
        prox_linha.push(linha[i] + linha[i - 1])
    }

    prox_linha.push(1)
    console.log("prox_linha", prox_linha)
    
    return prox_linha
}

function trianguloDePascal(numero_linhas) {
    console.log("numero_linhas", numero_linhas)
    if (numero_linhas < 1) {
        throw "O triângulo deve ter pelo menos uma linha!"
    }

    let triangulo = [[1]]

    for (let i = 1; i < numero_linhas; i++) {
        triangulo.push(criarNovaLinha(triangulo[triangulo.length - 1]))
        console.log("triangulo", triangulo)
    }

    console.log(triangulo)
}