// Creando el array con los salarios

// Helpers 

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary
    }
);

// ordenando la lista en nu nuevo array

const salariosColSorted = salariosCol.sort(
    function (a, b) { return a - b }
)



function esPar(numero) { return numero % 2 === 0 }

function calcularPromedio(a, b) {
    const promedio = (a + b) / (2)
    return promedio
}

// mediana general

function medianaSalarios(listaOrdenada) {
    const mitad = parseInt(listaOrdenada.length / 2);

    if (esPar(listaOrdenada.length)) {
        const personaMitad1 = listaOrdenada[mitad - 1];
        const personaMitad2 = listaOrdenada[mitad];
        const promedio = calcularPromedio(personaMitad1, personaMitad2)
        // calculando el promedio entre las personas:
        return promedio

    } else {
        const personaMitad = listaOrdenada[mitad]
        return personaMitad

    }

}
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana top 10%

const spliceStart = (salariosColSorted.length * (100 - 10) / 100)
const spliceCount = (salariosColSorted.length - spliceStart)

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount)

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col,

});
