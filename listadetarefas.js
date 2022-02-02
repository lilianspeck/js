const botao = document.querySelector("[data-form-button]")

botao.addEventListener("click", function() {
    const input = document.querySelector("[data-form-input")
    
    const valor = input.value

    alert(valor)
})
