const fromEuroToDollar = valueInEuros => {
    return valueInEuros * 1.07
}

const fromDollarToYen = valueInDollars => {
    return valueInDollars / 1.07 * 156.5
}

const fromYenToPound = valueInYens =>{
    return valueInYens / 156.5 * 0.87
}

const sum = (a, b) => { return a + b }

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }