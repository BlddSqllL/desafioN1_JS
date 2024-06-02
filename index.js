let precio = 400000

let cantidadElemento = document.querySelector(".cantidad");
let valorTotalElemento = document.querySelector(".valor-total");

let cantidad = 0;
let valorTotal = 0;

// boton sumar
document.querySelector("#botonSumar").addEventListener("click", () => {
cantidad++;
cantidadElemento.textContent = cantidad;
valorTotal = cantidad * precio;
valorTotalElemento.textContent = valorTotal;
});

// boton restar
document.querySelector("#botonRestar").addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadElemento.textContent = cantidad;
        valorTotal = cantidad * precio;
        valorTotalElemento.textContent = valorTotal;
    }
})




