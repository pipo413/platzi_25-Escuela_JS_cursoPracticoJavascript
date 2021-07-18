// const PRECIO = 123
// const DESCUENTO = 15
// const precioConDescuento = parseInt((PRECIO*(100-DESCUENTO)/100).toFixed(2)) 

// console.log({
//     PRECIO,
//     DESCUENTO,
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento) {
    let porcentajePrecioConDescuento = 100 - descuento
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
    return precioConDescuento

}

function ctaPriceDiscount() {
    let inputPrice = document.getElementById("InputPrice")
    let price = inputPrice.value
    let inputDiscount = document.getElementById("InputDiscount")
    let discount = inputDiscount.value
    let priceWithDiscount = calcularPrecioConDescuento(price, discount)

    const resultP = document.getElementById("ResultP")
    resultP.innerHTML = `El precio con descuento es: $${priceWithDiscount}`
}

function ctaPriceDiscountCoupon() {
    let inputPriceCoupon = document.getElementById("InputPriceCoupon")
    let price = inputPriceCoupon.value

    let inputDiscountCoupon = document.getElementById("cuponDiscount")
    // let cupon = inputDiscountCoupon.value -> Esto me devolverá el NUMERO de la opción elegida
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

    const precioConDescuento = calcularPrecioConDescuento(price, discount)

    const resultP = document.getElementById("resultP")
    resultP.innerHTML = `El precio con descuento es: $ ${precioConDescuento}`
}

// CUPON 2
// Creamos un array



function ctaPriceDiscountCoupon2() {
    const cupones=[
        "Oferta 10%",
        "Oferta 20%",
        "Oferta 30%",
        "Oferta 40%"
    ]
    let inputPriceCoupon = document.getElementById("InputPriceCoupon2")
    let price = inputPriceCoupon.value
    let inputDiscountCoupon = document.getElementById("cuponDiscount2")
    console.log(inputDiscountCoupon);
    let cupon = inputDiscountCoupon.value  

    console.log(cupon);
    let discount;

    // switch (cupon) {
    //     case "Oferta 10%":
    //         discount = 10
    //         break;
    //     case "Oferta 20%":
    //         discount = 20
    //         break;
    //     case "Oferta 30%":
    //         discount = 30
    //         break;
    //     case "Oferta 50%":
    //         discount = 50
    //         break;

    //     default:
    //         discount = 0
    //         break;
    // }

    if(!cupones.includes(cupon)){
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