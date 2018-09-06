// Primeiro pegue o elemento <table> que ja esta la no HTML.
const table = document.querySelector("table")

// Depois defina um tamanho para a nossa tabela. Tamanho significa
// numero de celulas e colunas.
const size = 5
// Inicie uma lista que ira conter todos os <td>s da pagina organizados
// como eles estao organizados na pagina. **HTML**
let matrix = []
// Entao crie um loop que vai rodar por todas as celulas da tabela. Ele 
// tera um loop dentro do outro, o loop externo sera pelas linhas
// e o interno pelas celulas de cada linha.
for (let i = 0; i < size; i++) {
	// Crie um novo elemento <tr> que ira receber todos os <td>
	const row = document.createElement("tr")
	console.log("linha", i)
	// Crie uma nova lista para colocar na nova 'matrix'. **JS**
	let cell_list = []
	for (let j = 0; j < size; j++) {
		// Crie um novo elemento <td>.
		const cell = document.createElement("td")
		// Coloque esse elemento dentro da <tr> que criamos no loop externo.
		row.appendChild(cell)
		// Coloque o novo <td> criado dentro da nossa 'matrix'.
		cell_list.push(cell)
	}
	// Coloque o <tr> recem populado, dentro da nossa <table>.
	table.appendChild(row)
	// Coloca a nova linha dentro da nossa 'matrix'.
	matrix.push(cell_list)
}
console.log (matrix)

for (const [row_index, row] of matrix.entries()) {
	for (const [cell_index, cell] of row.entries()) {
		// Para cada celula na tabela, escute pelo evento de clique.
		cell.addEventListener("click", event => {
			
			setTimeout(() => {
			// Primeiro tire a pintura de todos os elementos pintados.
			for (const painted_cell of document.querySelectorAll("td.painted")) {
				painted_cell.classList.remove("painted")
				//painted_cell.classList.add("painted")  -- se vc quiser que mantenha a pintura e nao remova
			}
			}, 500)
			

			setTimeout(() => {
			// Agora pinte todos os elementos da mesma linha do elemento atual.
			for (const cell_to_paint of matrix[row_index]) {
				cell_to_paint.classList.add("painted")
			}
			}, 1000)
			
			
			setTimeout(() => {
			// Agora pinte todos os elementos da mesma coluna do elemento atual.
			for (const row_to_paint of matrix) {
				row_to_paint[cell_index].classList.add("painted")
			}
			}, 1500)

		})
	}
}