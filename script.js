//cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.getElementById("result")

//manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//captando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//fução para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        result.textContent = `${formatCurrencyBRL(total)} reais`

        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possivel converter")
    }
}

//formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

