const table = document.querySelector("table")

const size = 5

let matrix = []

for (let i = 0; i < size; i++) {
	const row = document.createElement("tr")
	console.log("linha", i)
	let cell_list = []
	for (let j = 0; j < size; j++) {
		const cell = document.createElement("td")
		row.appendChild(cell)
		cell_list.push(cell)
	}
	table.appendChild(row)
	matrix.push(cell_list)
}
console.log (matrix)


for (const row of matrix) {
	for (const cell of row) {
		cell.addEventListener("click", event => { 
			
            // for (const painted_cell of document.querySelectorAll("td.painted")) {
            //     painted_cell.classList.remove("painted")
            // } (SE QUISER LIMPAR O QUE FOI PINTADO, DESCOMENTA ESSE FOR)

			cell.classList.add("painted")
			//OU event.target.classList.add("painted")  --  OPÇÃO QUE VAI DIRETO AO QUE RECEBEU EVENTO


		})
    }
    
}