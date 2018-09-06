// essa funcao verifica se a lista esta ordenada ou nao
function isSorted(arr) {
    // var i = 1 indica o index onde iniciaremos;
    // i < arr.length indica que o index eh menor que o numero total de elementos da array;
    // i++ indica que havera soma de 1 elemento apos a analise de cada index.
    for (var i = 1; i < arr.length; i++) {
        // se o valor constante da index anterior for maior que a index analisada, retorna FALSO e precisa ordenar.
        if (arr[i - 1] > arr[i]) return false
    }

    return true
}
    
function bogoSort(arr) {
    // inicia o contador em 0
	let count = 0

    //checa se a lista esta ordenada
	while(!isSorted(arr)) {
		count++
		if (count > 10000) {
			throw "Iteração demais! Antes que seu computador trave, tente novamente."
		}
        // let i = 0 inicia index 0;
        // i < arr.length indica que o index eh menor que o numero total de elementos da array;
        // i++ indica que havera soma de 1 elemento apos a analise de cada index.
		for (let i = 0; i < arr.length; i++) {
            // const random_index eh numero randomico de index para analisar;
            // Math.floor - arredonda para baixo; Math.random - gera numero aleatorio de 0 a 1 que será multiplicado pelo numero de elementos da array;
            const random_index = Math.floor(Math.random() * arr.length)
            // aux = arr[index que esta sendo analisado]
            const aux = arr[i]
            //arr[index que esta sendo analisado] = arr[index randomico]
	        arr[i] = arr[random_index]
	        arr[random_index] = aux
        }
        
        console.log("tentativa", count)
        console.log(arr)
	}

	return arr
}

    