let display = document.getElementById("display");

function appendfun(input) {
    display.value += input;
}

function reset() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!!";
    }
}
