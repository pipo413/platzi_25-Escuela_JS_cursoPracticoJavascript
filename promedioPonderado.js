const lista = [
    {
    course: "educación física",
    note: 10,
    credit: 2},
    {
    course: "matemática",
    note: 7,
    credit: 1},
    {
    course: "RRII",
    note: 9,
    credit: 3},
    {
    course: "MAD",
    note: 7,
    credit: 5}

]
debugger
// Acumulando la cantidad de veces que se repite cada elemento como un objeto

// recorremos el array multiplicando nota * credito y lo devuelve como array en notaConCreditos
const notaConCreditos = lista.map(function (noteObject) {
    return noteObject.note * noteObject.credit
}) 
// sumamos todos los valores resultados de nota x credito y lo metemos en sumNotaConCreditos
const sumNotaConCreditos = notaConCreditos.reduce(
    function (sum=0,newVal) { 
        return sum + newVal
     }
)
// Sumamos todos los creditod

const creditos = lista.map(function (noteObjet) { return noteObjet.credit })

const sumOfCreditos = creditos.reduce(function (sum = 0, newVal) { return sum + newVal })

// dividimos ambas sumamos

const promedioPonderadoNotaConCreditos = sumNotaConCreditos/sumOfCreditos
console.log(promedioPonderadoNotaConCreditos);