let h2 = document.querySelector('h2');

h2.classList.add('italic-color');

let newItem = document.createElement('li');
newItem.textContent = 'Recoger a los niños';

let list = document.querySelector('ol');
let lastItem = list.querySelector('li:last-child');

lastItem.insertAdjacentElement('afterend', newItem);

let items = list.querySelectorAll('li');

items[0].classList.add('cumplido'); // Desayunar
items[3].classList.add('cumplido'); // Preparar almuerzo
items[4].classList.add('cumplido'); // Recoger a los niños (nuevo ítem)

items[1].classList.add('fallido'); // Ir al banco
items[4].classList.add('fallido'); // Recoger a los niños (nuevo ítem)