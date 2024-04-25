let expression = "";

function digit(value) {
    expression += value;
    document.getElementById('result').value = value;
}

function clearAll() {
    expression = ''
    document.getElementById("result").value = expression;
}

function calcular() {
    let resultado = eval(value);
    expression = resultado;

    document.getElementsByClassName("display-input").value = expression;
}
