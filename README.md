# platzi_cursoPracticoJavascript

...

## Taller # 1 : Figuras geométricas:

- Primer paso: definir las formas
- Segundo paso: implementar la fórmula en JS
  - Utilidades: 
    ~~~JS
    //Con esto agrupamos los mensajes de consola
    console.group("...") 
    // -> aca van a ir todos los console.log() dentro del codigo 
    console.groupEnd()

    Math.round(#) //Realizamos redondeo
    Math.sqrt(#) //Realizamos calculo raíz cuadrada
    Math.pow(#, k)//Potencia de un un número a la k;
    (#).toFixed(k); //Realizamos redondeo a k decimales
    Math.PI; //valor de pi
    ~~~
- Tercer paso: Crear funciones.
- Cuarto paso: Integrar JS a HTML.

## Taller # 2 : Precios y descuentos:

- Primer paso: definir las fórmulas 
  - (fórmula de descuento -> precioConDescuento = precio*(100-descuentoEnPorcentaje)/100)
- Segundo paso: implementar la fórmula en JS
- Tercer paso: Crear funciones.
- Cuarto paso: Integrar JS a HTML.
- Colocando opciones con cupones:
Primero generamos el HTML con los descuentos:
~~~HTML
    <section>

        <h1>CUPONES</h1>
        <label for="InputPriceCoupon">Escribe el precio del producto</label>
        <input type="number" name="" id="InputPriceCoupon">
        
        <select name="CUPONES" id="cuponDiscount">
            <option value="1">Oferta 10%</option>
            <option value="2">Oferta 20%</option>
            <option value="3">Oferta 30%</option>
            <option value="4">Oferta 50%</option>
        </select>
        <button type="button" onclick="ctaPriceDiscountCoupon()">Calcular precio con descuento</button>
        <script src="./decuentos.js"></script>
        <p id="resultP"></p>
    </section>
~~~
Como tenemos selección en dropList, podemos 
a: Seleccionar la opción con el valor 1,2,3,4 que le asignamos:
JS
~~~JS
function ctaPriceDiscountCoupon() {
    let inputPriceCoupon = document.getElementById("InputPriceCoupon")
    let price = inputPriceCoupon.value
    let inputDiscountCoupon = document.getElementById("cuponDiscount") 
    let cupon = inputDiscountCoupon.value //-> Esto me devolverá el NUMERO de la opción elegida
    console.log(cupon);
    let discount;

    switch (cupon) {
        case "1":
            discount = 10
            break;
        case "2":
            discount = 20
            break;
        case "3":
            discount = 30
            break;
        case "4":
            discount = 50
            break;
    
        default:
            discount = 0
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(price,discount)

    const resultP = document.getElementById("resultP")
    resultP.innerHTML= `El precio con descuento es: $ ${precioConDescuento}`
}
~~~
b: Seleccionar la opción con TEXTO que le asigno el usuario:
JS
~~~JS
function ctaPriceDiscountCoupon() {
    let inputPriceCoupon = document.getElementById("InputPriceCoupon")
    let price = inputPriceCoupon.value

    let inputDiscountCoupon = document.getElementById("cuponDiscount") 
    let cupon = inputDiscountCoupon.options[inputDiscountCoupon.selectedIndex].text

    console.log(cupon);
    let discount;

    switch (cupon) {
        case "Oferta 10%":
            discount = 10
            break;
        case "Oferta 20%":
            discount = 20
            break;
        case "Oferta 30%":
            discount = 30
            break;
        case "Oferta 50%":
            discount = 50
            break;
    
        default:
            discount = 0
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(price,discount)

    const resultP = document.getElementById("resultP")
    resultP.innerHTML= `El precio con descuento es: $ ${precioConDescuento}`
}

~~~
En Ambos casos lo tratamos con el `switch case`

### Utilizando array y error first.

Si declaramos un switch con un arran en JS (en vez de la lista desplegable)
HTML
~~~HTML
    <section>

        <h1>CUPONES2</h1>
        <label for="InputPriceCoupon2">Escribe el precio del producto</label>
        <input type="number" name="" id="InputPriceCoupon2">
        <label for="InputCoupon"><br> Ingrese el nombre del cupon</label>
        <input type="text" name="" id="cuponDiscount2">
        <button type="button" onclick="ctaPriceDiscountCoupon2()">Calcular precio con descuento</button>
        
        <script src="./decuentos.js"></script>
        <p id="resultP2"></p>
    </section>
~~~
En este caso el usuario ingresará el nombre del cupon como texto
JS
~~~js
function ctaPriceDiscountCoupon2() {
    let inputPriceCoupon = document.getElementById("InputPriceCoupon2")
    let price = inputPriceCoupon.value
    let inputDiscountCoupon = document.getElementById("cuponDiscount2")
    console.log(inputDiscountCoupon);
    let cupon = inputDiscountCoupon.value  

    console.log(cupon);
    let discount;

    switch (cupon) {
        case "Oferta 10%":
            discount = 10
            break;
        case "Oferta 20%":
            discount = 20
            break;
        case "Oferta 30%":
            discount = 30
            break;
        case "Oferta 50%":
            discount = 50
            break;

        default:
            discount = 0
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(price, discount)

    const resultP = document.getElementById("resultP2")
    resultP.innerHTML = `El precio con descuento es: $ ${precioConDescuento}`
~~~

PERO!!!!!!!!! podemos utilizar el array.includes() dentro de un condicional, para evitar que el usuario coloque un valor que no está incluido en nuestro array.
DE ESTA MANERA REEMPLAZAMOS EL USO DEL SWITCH
~~~js
const cupones=[
    "Oferta 10%",
    "Oferta 20%",
    "Oferta 30%",
    "Oferta 40%"
]


function ctaPriceDiscountCoupon2() {
    let inputPriceCoupon = document.getElementById("InputPriceCoupon2")
    let price = inputPriceCoupon.value
    let inputDiscountCoupon = document.getElementById("cuponDiscount2")
    let cupon = inputDiscountCoupon.value  
    let discount;
    if(cupones.includes(cupon)){
        alert(`El cupon ${cupon} no es válido`)
    }else if (cupon == "Oferta 10%"){
        discount = 10
    }else if (cupon == "Oferta 20%"){
        discount = 20
    }else if (cupon == "Oferta 30%"){
        discount = 30
    }else if (cupon == "Oferta 50%"){
        discount = 50
    }


    const precioConDescuento = calcularPrecioConDescuento(price, discount)

    const resultP = document.getElementById("resultP2")
    resultP.innerHTML = `El precio con descuento es: $ ${precioConDescuento}`
}
~~~


## Taller # 3 : promedio mediana y moda:

- Primer paso: definir las fórmulas 
  - 
- Segundo paso: implementar la fórmula en JS
- Tercer paso: Crear funciones.
  
### Promedio
  * ciclo for
  * reduce(): esto nos permite a reemplazar el ciclo for para sumar elementos de la lista

~~~javascript
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { 
            return valorAcumulado + nuevoElemento
         }
    );
~~~

### Mediana
Para calcular la mediana primero debemos acomodar la lista, es decir seleccionar el valor en el medio de la lista, si es impar y si es par el promedio entre estas dos, para ello utilizamos el métrodo `sort`
#### sort
El método sort ordena valores según el Unicode 
~~~javascript
const miArreglo = ['C', 'BC', 'AB'];

miArreglo.sort(); // [AB, BC, C]

// Para orden descendente:
equipos.reverse();

// ['Real Madrid', 'Manchester Utd', 'Juventus', 'Bayern Munich']
~~~
Para números utilizamos la función de comparación, donde el método `sort` va a ordenar los valores negativos cero y positivos en el orden correcto
~~~javascript
function(a, b) {return a - b}
~~~
Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.

Todo lo que necesitamos es usar la función de comparación dentro del método sort():
~~~javascript
const numeros = [3, 23, 12];

numeros.sort(function(a, b){return a - b}); // --> 3, 12, 23

// Orden descendente -> invertimos el orden del secundo parámetro
const numeros = [3, 23, 12];

numeros.sort(function(a, b){return b - a}); // --> 23, 12, 3
~~~