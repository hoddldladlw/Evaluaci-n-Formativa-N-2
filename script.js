const botonTema = document.getElementById("btn-tema");

botonTema.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
    
    if (document.body.classList.contains("oscuro")) {
        botonTema.textContent = "Modo claro";
    } else {
        botonTema.textContent = "Modo oscuro";
    }
});