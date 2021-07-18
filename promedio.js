// const lista1 = [
//     100, 
//     200, 
//     300, 
//     500
// ]

// Calculando la media aritmética

function calcularMediaAritmetica(lista) { 
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];   
    // }

    // reemplazamos el ciclo for por un metodo de lista

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { 
            return valorAcumulado + nuevoElemento
         }
    );

    const promedioLista = sumaLista/lista.length
    
    return promedioLista.toFixed(2)
 }

// Calculando la mediana aritmética

function calcularMediana(lista) {
    
}