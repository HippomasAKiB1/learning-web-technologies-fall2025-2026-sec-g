const app = document.getElementById("app");


const calc = document.createElement("div");
calc.style.width = "200px";
calc.style.padding = "10px";
calc.style.border = "1px solid #000";
app.appendChild(calc);


const display = document.createElement("input");
display.disabled = true;
display.style.width = "100%";
display.style.height = "40px";
display.style.fontSize = "20px";
display.style.textAlign = "right";
calc.appendChild(display);


let powerOn = false;

const powerBtn = document.createElement("button");
powerBtn.textContent = "OFF";
powerBtn.style.width = "100%";
powerBtn.style.height = "40px";
powerBtn.style.margin = "5px 0";
calc.appendChild(powerBtn);


const nums = ["7","8","9","4","5","6","1","2","3","0"];
const numButtons = [];

nums.forEach(n => {
    const btn = document.createElement("button");
    btn.textContent = n;
    btn.style.width = "45px";
    btn.style.height = "45px";
    btn.style.margin = "3px";

    btn.disabled = true;

    btn.addEventListener("click", () => {
        if (powerOn) display.value += n;
    });

    numButtons.push(btn);
    calc.appendChild(btn);
});


let firstNumber = null;
let operator = null;


const plusBtn = document.createElement("button");
plusBtn.textContent = "+";
plusBtn.style.width = "45px";
plusBtn.style.height = "45px";
plusBtn.style.margin = "3px";
plusBtn.disabled = true;
calc.appendChild(plusBtn);


const minusBtn = document.createElement("button");
minusBtn.textContent = "-";
minusBtn.style.width = "45px";
minusBtn.style.height = "45px";
minusBtn.style.margin = "3px";
minusBtn.disabled = true;
calc.appendChild(minusBtn);


const divideBtn = document.createElement("button");
divideBtn.textContent = "/";
divideBtn.style.width = "45px";
divideBtn.style.height = "45px";
divideBtn.style.margin = "3px";
divideBtn.disabled = true;
calc.appendChild(divideBtn);


const equalBtn = document.createElement("button");
equalBtn.textContent = "=";
equalBtn.style.width = "100%";
equalBtn.style.height = "45px";
equalBtn.style.margin = "5px 0";
equalBtn.disabled = true;
calc.appendChild(equalBtn);


powerBtn.addEventListener("click", () => {
    powerOn = !powerOn;

    if (powerOn) {
        powerBtn.textContent = "ON";
        display.disabled = false;

        numButtons.forEach(b => b.disabled = false);
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        divideBtn.disabled = false;
        equalBtn.disabled = false;

    } else {
        powerBtn.textContent = "OFF";
        display.disabled = true;
        display.value = "";

        numButtons.forEach(b => b.disabled = true);
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        divideBtn.disabled = true;
        equalBtn.disabled = true;

        firstNumber = null;
        operator = null;
    }
});


plusBtn.addEventListener("click", () => {
    if (!powerOn || display.value === "") return;
    firstNumber = Number(display.value);
    operator = "+";
    display.value = "";
});


minusBtn.addEventListener("click", () => {
    if (!powerOn || display.value === "") return;
    firstNumber = Number(display.value);
    operator = "-";
    display.value = "";
});


divideBtn.addEventListener("click", () => {
    if (!powerOn || display.value === "") return;
    firstNumber = Number(display.value);
    operator = "/";
    display.value = "";
});


equalBtn.addEventListener("click", () => {
    if (!powerOn || display.value === "") return;

    const secondNumber = Number(display.value);

    if (operator === "+") {
        display.value = firstNumber + secondNumber;
    }
    else if (operator === "-") {
        display.value = firstNumber - secondNumber;
    }
    else if (operator === "/") {
        if (secondNumber === 0) {
            display.value = "Err";
        } else {
            display.value = firstNumber / secondNumber;
        }
    }

    operator = null;
});
