// Esta funcao checa se um array esta ordenado ou nao.
function isSorted(arr) {
	// var = 1 indica que comecaremos pelo valor no index 1; 
	// i < arr.length indica que o index utilizado deve ser menor que o numero de elementos na array;
	// i++ indica i + 1, sempre sera acrescentado 1.
	// a variavel i vale o index 1, deve ser menor que o numero de elementos da array e depois adiciona mais um.
    for (var i = 1; i < arr.length; i++) {
		// arr[i - 1] eh o elemento anterior ao elemento index analisado;
		// arr[i] eh o elemento index analisado.
		// se o elemento anterior ao analisado for maior que o elemento analisado, retona falso porque a lista nao esta ordenada.
        if (arr[i - 1] > arr[i]) return false
    }

    return true
}

// Esta funcao recebe uma lista e organiza essa lista usando o "Bubble Sort".
function bubbleSort(arr) {
	// a ! inverte falso e verdadeiro pq o while precisa que a funcao retorne verdadeiro.
	while(!isSorted(arr)) {
		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				const aux = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = aux
			}
	    }
	}

	return arr
}
