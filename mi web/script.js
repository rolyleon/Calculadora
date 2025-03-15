function agregar(valor) {
    document.getElementById("inputOperacion").value += valor;
}

function borrar() {
    let input = document.getElementById("inputOperacion");
    input.value = input.value.slice(0, -1);
}

function calcular() {
    let operacion = document.getElementById("inputOperacion").value;
    try {
        let resultado = math.evaluate(operacion);
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    } catch (error) {
        document.getElementById("resultado").innerText = "Error en la operación";
    }
}