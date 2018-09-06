// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Selection Sort".
function selectionSort(arr) {
	let sorted = []

	while (arr.length > 0) {
		let lowest = Infinity
		let lowest_index
		for (const [index, item] of arr.entries()) {
			if (item < lowest) {
				lowest = item
				lowest_index = index
			}
		}
		sorted.push(lowest)
		arr.splice(lowest_index, 1)
	}

	return sorted

}

exports = module.exports = selectionSort