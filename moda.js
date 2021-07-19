// Creamos una lista

lista1 = [
    1, 1, 1, 2, 3, 5, 6, 47, 4, 4, 6, 8
]

const lista1Count = {}
function orderArray(array) {
    // Como tengo array dentro de array y necesito que lo ordene según el segundo parámetro...
    const arrayOrdenado = array.sort(function (a, b) { return a[1] - b[1] })
    return arrayOrdenado
}
function calcularModa(lista) {
    lista.map(
        function (param) {
            lista1Count[param] ? lista1Count[param] += 1 : lista1Count[param] = 1
        })

    // Convertimos en un array lista1Count

    const lista1Array = orderArray(Object.entries(lista1Count))
    
    const moda = lista1Array[lista1Array.length -1]
    
    return moda
}