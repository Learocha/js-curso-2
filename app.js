//app.js
// Cambiar el contenido de la etiqueta h1 con document.querySelector
document.querySelector('h1').textContent = 'Hora del Desafío';

// Funciones y eventos
function consoleFunction() {
    console.log("El botón fue clicado");
    alert("El botón fue clicado"); // Add this line to display a visual alert
}
function loveJSFunction() {
    alert("Yo amo JS");
}
function promptFunction() {
    const ciudad = prompt("Ingresa el nombre de una ciudad de Brasil:");
    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
    }
}
function sumFunction() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        const suma = num1 + num2;
        alert(`La suma es: ${suma}`);
    } else {
        alert("Ingresa números válidos.");
    }
}

// Asignar eventos a los botones
document.querySelector('.button:nth-child(1)').addEventListener('click', consoleFunction);
document.querySelector('.button:nth-child(2)').addEventListener('click', loveJSFunction);
document.querySelector('.button:nth-child(3)').addEventListener('click', promptFunction);
document.querySelector('.button:nth-child(4)').addEventListener('click', sumFunction);
