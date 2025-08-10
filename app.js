// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.2; // Primero convertimos a euros
    let valueInYen = valueInEuro * 156.5; // Luego convertimos a yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5; // Primero convertimos a euros
    let valueInPound = valueInEuro * 0.86; // Luego convertimos a libras
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };