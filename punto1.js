let h1 = document.createElement('h1');

h1.textContent = 'my presentation';

let div = document.querySelector('div');

div.parentNode.insertBefore(h1, div);

let newP = document.createElement('p');

newP.textContent = 'my best friend is mickey';

var existingP = div.querySelector('p');

existingP.parentNode.insertBefore(newP, existingP.nextSibling);

h1.style.color = 'blue'; 

var allP = div.querySelectorAll('p');
var lastP = allP[allP.length - 1];
lastP.style.fontWeight = 'bold';
lastP.style.backgroundColor = 'yellow';

