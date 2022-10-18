const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const couponObj = {
//     '30descuento': 30,
//     '25descuento': 25,
// };

const couponsList = [];
couponsList.push({
    name: '30descuento',
    discount: 30,
});
couponsList.push({
    name: '25descuento',
    discount: 25,
});
couponsList.push({
    name: '15descuento',
    discount: 15,
});

function calcularPrecioConDescuento() {
    
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    
    if (!price || !coupon) {
        pResult.innerText = 'Por favor llena el formulario';
        return;
    }

    let discount;

    function isCouponInArray(couponElement) {
        return couponElement.name == coupon;
    } 

    const couponInArray = couponsList.find(isCouponInArray);

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = 'el cupón no es válido';
        return;
    }

    // if (couponObj[coupon] ) {
    //     discount = couponObj [coupon];
    // } else {
    //     pResult.innerText = 'el cupón no es válido';
    //     return;
    // }

    // switch (coupon) {
    //     case '30descuento':
    //         discount = 30;
    //         break;
    //     case '25descuento':
    //         discount = 25;
    //         break;
    //     default:
    //         pResult.innerText = 'el cupón no es válido';
    //     return;
    // }
    
    // if(coupon == '30descuento') {
    //     discount = 30;
    // }   else if (coupon == '25descuento') {
    //     discount = 25;
    // }   else {
    //     pResult.innerText = 'el cupón no es válido';
    //     return;
    // }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice; 
}