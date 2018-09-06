const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bogo Sort".
function bogoSort(arr) {
	let count = 0

	while(!isSorted(arr)) {
		count++
		if (count > 10000) {
			throw "Iteração demais! Antes que seu computador trave, tente novamente."
		}
		
		for (let i = 0; i < arr.length; i++) {
	        const random_index = Math.floor(Math.random() * arr.length)
	        const aux = arr[i]
	        arr[i] = arr[random_index]
	        arr[random_index] = aux
	    }
	}

	return arr
}

