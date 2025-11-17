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


const nums = ["7","8","9","4","5","6","1","2","3","0"];

nums.forEach(n => {
    const btn = document.createElement("button");
    btn.textContent = n;
    btn.style.width = "45px";
    btn.style.height = "45px";
    btn.style.margin = "3px";
    calc.appendChild(btn);
});


