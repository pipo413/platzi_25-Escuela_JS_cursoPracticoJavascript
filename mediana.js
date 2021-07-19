// const lista = [10, 20, 30, 50, 88, 35, 42]


function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedio = sumaLista / lista.length
    return promedio
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else { return false }

}

function ordenarLista(lista) {
    lista.sort(function (a, b) {
        return a -b
    })
    
}

function calcularMediana(lista) {
    let mediana = NaN
    debugger
    ordenarLista(lista)
    let mitadlista = parseInt(lista.length / 2);
    
    esPar(lista.length) ?
        mediana = calcularPromedio([lista[mitadlista-1], lista[mitadlista]])
        : mediana = lista[mitadlista]

    return mediana
}