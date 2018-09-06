function bubbleSort(arr) { 
    let isSorted = false

	// a ! inverte falso e verdadeiro pq o while precisa que a funcao retorne verdadeiro.
	while(!isSorted(arr)) {
        isSorted = true

		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {

                isSorted = false
				const aux = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = aux
			}
	    }
	}

	return arr
}

//[6, 2, 9, 1]

// **1 iteração do while**

// index1 = 2 (i1 < 4 elementos)
// 6 > 2 TRUE entao vamos ordenar
// aux = 2
// arr[1] = 6 //[6, 6, 9, 1]
// arr[0] = 2 //[2, 6, 9, 1]

//[2, 6, 9, 1]

// index2 = 9 (i2 < 4 elementos)
// 6 > 9 FALSE entao esta ordenado

//[2, 6, 9, 1]

// index3 = 1 (i3 < 4 elementos)
// 9 > 1 TRUE entao vamos ordenar
// aux = 1
// arr[3] = 9 //[2, 6, 9, 9]
// arr[2] = 1 //[2, 6, 1, 9]


// **2 iteração do while**

//[2, 6, 1, 9]

// index1 = 6 (i1 < 4 elementos)
// 2 > 6 FALSE entao esta ordenado

//[2, 6, 1, 9]

// index2 = 1 (i2 < 4 elementos)
// 6 > 1 TRUE entao vamos ordenar
// aux = 1
// arr[2] = 6 //[2, 6, 6, 9]
// arr[1] = 1 //[2, 1, 6, 9]

//[2, 1, 6, 9]

// index3 = 9 (i3 < 4 elementos)
// 6 > 9 FALSE entao esta ordenado


// **3 iteração do while**

//[2, 1, 6, 9]

// index1 = 1 (i1 < 4 elementos)
// 2 > 1 TRUE entao vamos ordenar
// aux = 1
// arr[1] = 2 //[2, 2, 6, 9]
// arr[0] = 1 //[1, 2, 6, 9]

//[1, 2, 6, 9]

// index2 = 6 (i2 < 4 elementos)
// 2 > 6 FALSE entao esta ordenado

//[1, 2, 6, 9]

// index3 = 9 (i3 < 4 elementos)
// 6 > 9 FALSE entao esta ordenado


// **4 iteração do while**

//[1, 2, 6, 9]

// index1 = 2 (i1 < 4 elementos)
// 1 > 2 FALSE entao esta ordenado

//[1, 2, 6, 9]

// index2 = 6 (i2 < 4 elementos)
// 2 > 6 FALSE entao esta ordenado

//[1, 2, 6, 9]

// index3 = 9 (i3 < 4 elementos)
// 6 > 9 FALSE entao esta ordenado

//[1, 2, 6, 9]