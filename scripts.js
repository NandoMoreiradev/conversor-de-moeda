//Cotação de moedas do dia.
const USD = 4.87
const EUR = 5.82
const GBP = 6.82

//Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})


//Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {

        // Calcula o total
        let total = amount * price

        // Formata o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent = `${total} Reais`

        // Exibindo a cotação das moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Aplica a classe que exibe o footer como resultado
        footer.classList.add("show-result")
    } catch (error) {

        // Remove a classe do footer ocultando ele da tela.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter.")
    }
}

function formatCurrencyBRL (value) {
    // Converte para número para utilizar o toLocaleString para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}