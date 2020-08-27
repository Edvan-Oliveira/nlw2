// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

function cloneField() {
    // Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // true clona também os filhos, false/nada clona só o elemento 

    // Pegar os campos. Que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo limpar
    fields.forEach(function (field) {
        // Pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer) // adicionando o nó clone dentro do #schedule-items (no final)
}
