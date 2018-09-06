// **Exercício Pangrama**
// Descrever os passos necessários para explicar ao computador como identificar um pangrama:
// 1. Identifique as letras que compõem a frase dada
// 2. Verifique as letras que compõem o alfabeto pt-br - A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
// 3. Procure, ao longo da frase, por todas as 26 letras do alfabeto pt-br 
// 4. Informe se a frase possui, ou não, todas as letras do alfabeto pt-br




// Variavel global com todas as letras do alfabeto.
ALPHABET = 'abcdefghijlmnopqrstuvxz'

// Esta funcao vai checar se um
// argumento é um pangrama ou nao.
function isPangram(str) {
	// Transforma a frase passada em letras minusculas.
	// O computador diferencia entre maiuscula e
	// minuscula, mas essa funcao nao deveria.
	str = str.toLowerCase()

	// A primeira coisa que vou fazer é iterar
	// por todas as letras do alfabeto.
	for (const letter of ALPHABET) {
		// Para cada letra, checa se tem pelo
		// menos uma ocorrencia na frase passada.
		if (str.indexOf(letter) < 0)  {
			// Se tiver pelo menos uma letra
			// faltando, retorna negativo
			return false
		}
	}

	// Se nenhuma letra ficou faltando,
	// retorna positivo.
	return true
}

module.exports = exports = isPangram