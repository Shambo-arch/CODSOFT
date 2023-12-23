const display = document.querySelector(".display");
const calculator = document.querySelectorAll("button");
const operators = ["%", "*", "/", "-", "+", "="];

let result = "";

const calculate = (buttonValue) => {
    if(buttonValue === "=" && result !== ""){
        result = eval(result.replace("%", "/100"));

    } else if(buttonValue === "AC"){
        result = "";
    } else if(buttonValue === "DL"){
        result = result.toString().slice(0, -1);
    } else{
        if(result === "" && operators.includes(buttonValue)) return;
        result += buttonValue;
}
 display.value = result;       
    }

calculator.forEach((button) => {
    button.addEventListener ("click", (e) => calculate(e.target.dataset.value));
});