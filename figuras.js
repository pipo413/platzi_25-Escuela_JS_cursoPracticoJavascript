
// Código del cuadrado

// const ladoCuadrado = 5;
// console.log("los lados del cuadrado mide: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado

// console.log("El area del cuadrado es: " + areaCuadrado + "cm²");

// function calcPerimetroCuadrado(lado) {
//     let perimetroCuadrado = lado * 4;
//     let areaCuadrado = Math.pow(lado, 2);
//     debugger
//     return perimetroCuadrado,areaCuadrado
// }
// calcPerimetroCuadrado(ladoCuadrado)


function perimetroCuadrado(lado) {
    return lado * 4
}
function areaCuadrado(lado) {
    return Math.pow(lado, 2)
}






// Código del triángulo
// console.group("Triangulo")
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 7;
// const ladoTriangulo3 = 9;

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3
// const semiPerimetro = 0.5 * perimetroTriangulo
// const areaTriangulo = (Math.sqrt(semiPerimetro * (semiPerimetro - ladoTriangulo1) * (semiPerimetro - ladoTriangulo2) * (semiPerimetro - ladoTriangulo3))).toFixed(2);
// const alturaTriangulo = (2 * areaTriangulo / ladoTriangulo3).toFixed(2)

// console.log(`los lados del trángulo son: ${ladoTriangulo1} cm,${ladoTriangulo2}cm, siendo la base: ${ladoTriangulo3}cm. Dando por resultado un  perítmetro de: ${perimetroTriangulo} cm con una altura de: ${alturaTriangulo}cm y un área de ${areaTriangulo} cm²`);

// console.groupEnd()

// function triangulo() {
    //     let lado1 = parseFloat(prompt("Ingrese el lado 1 del Triangulo"))
    //     let lado2 = parseFloat(prompt("Ingrese el lado 2 del Triangulo"))
    //     let lado3 = parseFloat(prompt("Ingrese el lado base del Triangulo"))
    
    //     debugger
    
    //     function perimetroTriangulo(lado1, lado2, lado3) {
        //         return lado1 + lado2 + lado3
        //     }
        //     function areaTriangulo(lado1, lado2, lado3) {
            //         let semiPerimetro = 0.5 * perimetroTriangulo(lado1, lado2, lado3)
            //         const areaTriangulo = (Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))).toFixed(2);
            //         return areaTriangulo, alturaTriangulo(lado3, areaTriangulo)
            //     }
            //     function alturaTriangulo(lado3) {
                //         const altura = (2 * this.areaTriangulo(lado1, lado2, lado3) / lado3).toFixed(2)
                //         return altura
                //     }
                //     console.log(`Lado1: ${lado1}cm`);
                //     console.log(`Lado2: ${lado2}cm`);
                //     console.log(`Lado3: ${lado3}cm`);
                
                //     console.log(`Area: ${areaTriangulo(lado1, lado2, lado3)}cm²`);
                //     console.log(`altura : ${alturaTriangulo()}cm`);
                
                
                // }
                // console.group("Triangulo")
                // triangulo()
                
                
                // console.groupEnd()
                
                
function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}

function areaTriangulo(lado1, lado2, lado3) {
    let semiPerimetro = 0.5 * perimetroTriangulo(lado1, lado2, lado3)
    return (Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))).toFixed(2);
}
                
// // Código del circulo
// console.group("Circulo");
// const diametroCirculo = 5;
// const radioCirculo = (diametroCirculo / 2).toFixed(2);

// const perimetroCirculo = (Math.PI * diametroCirculo).toFixed(2);
// const areaCirculo = (radioCirculo * radioCirculo * Math.PI).toFixed(2);

// console.log(`Diámetro: ${diametroCirculo}cm`);
// console.log(`Perímetro: ${perimetroCirculo}cm`);
// console.log(`Area: ${areaCirculo}cm²`);

// console.groupEnd()

function perimetroCirculo(radio) {
    return (Math.PI * 2 * radio).toFixed(2)
}
function areaCirculo(radio) {
    return (Math.PI * Math.pow(radio,2)).toFixed(2)
}

// Aqui interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value)
    alert(perimetro)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value)
    alert(`El perímtro del círculo es: ${value}`)
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const area =  areaCirculo(value)
    alert(area)
}

function calcularPerimetroTriangulo() {
    const inputL1 = document.getElementById("InputTrianguloL1")
    const valueL1 = parseFloat(inputL1.value)
    const inputL2 = document.getElementById("InputTrianguloL2")
    const valueL2 = parseFloat(inputL2.value)
    const inputL3 = document.getElementById("InputTrianguloL3")
    const valueL3 = parseFloat(inputL3.value)

    const perimetro = perimetroTriangulo(valueL1,valueL2,valueL3)
    alert(`El perímtro del triángulo es: ${perimetro}`)
}

function calcularAreaTriangulo() {
    const inputL1 = document.getElementById("InputTrianguloL1")
    const valueL1 = parseFloat(inputL1.value)
    const inputL2 = document.getElementById("InputTrianguloL2")
    const valueL2 = parseFloat(inputL2.value)
    const inputL3 = document.getElementById("InputTrianguloL3")
    const valueL3 = parseFloat(inputL3.value)


    const area =  areaTriangulo(valueL1,valueL2,valueL3)
    alert(`El area del triángulo es: ${area}`)
}