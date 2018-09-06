// let pq irá mudar - lista vazia 
function selectionSort(arr) { // 2, 6, 1, 8
	let sorted = []

    // enqto numero de elementos for maior que 0, continuaremos organizando
	while (arr.length > 0) {
        // parametro com o maior numero possivel infinito
        let lowest = Infinity
        // variavel sem valor por enqto
        let lowest_index
        // [index, item] anda elemento por elemento um apos o outro
		for (const [index, item] of arr.entries()) {
            // compara valor do item com infinito
            // 1 iteracao - 2 < infinity? true lowest = 2
            // 1 iteracao - 6 < 2 ? false
            // 1 iteracao - 1 < 2? true lowest = 1
            // 1 iteracao - 8 < 1? false
			if (item < lowest) {
                // lowest vira o valor do item
				lowest = item
				lowest_index = index
			}
        }
        // poe o lowest na array nova
        sorted.push(lowest) // sorted = [1]
        // 
		arr.splice(lowest_index, 1) // arr = [2, 6, 8]
	}

	return sorted

}