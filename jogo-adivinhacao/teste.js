const objetivo = getRandomInt(999)

const form = document.querySelector(".game")

const input = document.querySelector(".game input")

let tentativas = 0

console.log("fora", tentativas)

form.addEventListener("submit", event => {
    event.preventDefault()

    tentativas = tentativas + 1

    const chute = input.value

    input.value = ""

    if (chute == objetivo) {
        form.style.display = "none"
        
        const resultado = document.querySelector(".result")
        const resultado_p = document.querySelector(".result p")

        resultado.style.display = "flex"
        resultado_p.innerHTML = `${objetivo}, número de tentativas ${tentativas}`
    }

        else if (chute > objetivo){
        const dica = document.querySelector(".game p")

        dica.style.opacity = 1
        dica.style.fontSize= "70px"
        dica.innerHTML = "Ooops, o número correto é menor do que esse..."
        setTimeout(() => dica.style.opacity = 0, 1000)

    } 
        else if (chute < objetivo){
        const dica = document.querySelector(".game p")

        dica.style.opacity = 1
        dica.innerHTML = "Ooops, o número correto é maior do que esse..."
        dica.style.fontSize= "70px"
        setTimeout(() => dica.style.opacity = 0, 1000)
    }
})