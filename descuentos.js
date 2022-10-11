const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    
    if (!price || !discount) {
        pResult.innerText = 'Por favor llena el formulario';
        return;
    }

    if(discount > 100) {
        pResult.innerText = 'indica un valor inferior a 100';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice; 
}