const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js")

test("Si hacemos la suma de 12 y 8 debe retornar 20 la función", () => {
    let total = sum(12, 8)
    expect(total).toBe(20)
})

test("Si le paso a la función de euro a dolar 3.5 euros, debe retornar 3.74 dolares", () => {
    let result = fromEuroToDollar(3.5)
    expect(result).toBeCloseTo(3.74, 1)
})

test("si le paso al conversor de dolares a yenes 5 dolares debe retornar 731,30 yenes", () => {
    let dollarFromYen = fromDollarToYen(5)
    expect(dollarFromYen).toBeCloseTo(731.30, 1)
})

test("si le paso al conversor de yenes a libras 800 yenes debe retornar 4.44 libras", () => {
    let yenToPounds = fromYenToPound(800)
    expect(yenToPounds).toBeCloseTo(4.44, 1)
})



