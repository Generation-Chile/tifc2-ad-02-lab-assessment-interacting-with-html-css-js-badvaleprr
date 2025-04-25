// Cambia el texto del primer "Hello world!" a "GodBye"
document.getElementById("red").textContent = "GodBye";

// Cambia el color de fuente de un h1 a naranja
document.getElementById("changeColor").style.color = "orange";

//Al hacer click, cambia el color a marrón
const clickableHeader = document.getElementById("clickable");
clickableHeader.addEventListener("click", function () {
    clickableHeader.style.color = "brown";
});
