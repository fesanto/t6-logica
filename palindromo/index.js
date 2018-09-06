// **Exercício Palíndromo**
// Descrever os passos necessários para explicar ao computador como identificar um palíndromo:
// 1. Identifique quantas letras tem a palavra dada
// 2. Identifique quais as letras compõem a palavra dada
// 3. Verifique se a 1ª letra é igual a última letra da palavra dada
// 4. Se a palavra dada tiver mais de 3 letras, verifique se a 2ª letra é igual a penúltima letra da palavra dada
// 5. Leia a palavra da esquerda para a direita
// 6. Releia a palavra, mas da direita para a esquerda
// 7. Informe se a leitura da palavra dada, nos dois sentidos, resulta na mesma palavra


// Esta funcao vai checar se um
// argumento é palindromo ou nao.
function isPalindrome(str) {
	// A primeira coisa que vou fazer é
	// pegar a string que foi passada como
	// argumento e criar uma copia dela ao
	// contrario.
	const reverse = str.split("").reverse().join("")

	// Depois vou checar se a copia e igual
	// ao argumento que foi passado.
	if (reverse == str) {
		// Se for igual, a funcao retorna positivo.
		return true
	}

	// Se nao for igual, a funcao retorna negativo.
	return false
}

module.exports = exports = isPalindrome