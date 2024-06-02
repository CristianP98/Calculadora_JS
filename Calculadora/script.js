const display = document.querySelector
('#display');
const buttons = document.querySelectorAll
("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if( item.id == "clear") {
            display.innerText = "";
         } 
        else if( item.id == "backspace") {
            let string = display.innerText.toString();
            // ↓↓ Esto sirve para quitar el ultimo caracter de la cadena ↓↓
            display.innerText = string.substring(0,string.length-1);
        }
        else if ( display.innerText != "" && item.id =="equal") {
            // Eval funciona como una funcion para evaluar una expresion matematica (suma, resta, multiplicacion y division y el igual)
            display.innerText = eval(display.innerText);
        } // ↓↓este else sirve para que no se pueda hacer una operacion sin un numero y salte un error y luego se borre en 2 segundos↓↓
        else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Ingrese un número";
            setTimeout(() => (display.innerText = ""), 2000);
        }
        else {
            // ↓↓ Esto sirve para agregar el valor de cada boton a la cadena de texto ↓↓
            display.innerText += item.id;
        }
    }
});