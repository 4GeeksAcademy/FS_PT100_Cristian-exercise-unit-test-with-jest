const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"]; // Convertir dólares a euros
    let yen = euros * oneEuroIs["JPY"]; // Convertir euros a yenes
    return yen; // Retornar el monto en yenes
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"]; // Convertir yenes a euros
    let pounds = euros * oneEuroIs["GBP"]; // Convertir euros a libras
    return pounds; // Retornar el monto en libras
}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};