let z = document.getElementById("Z");
let result = document.getElementById("result");
let calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
    let Xvalue = parseFloat(document.getElementById("X").value);
    let yValue = parseFloat(document.getElementById("Y").value);
    if (!isNaN(Xvalue) && !isNaN(yValue)) {
        z.value = (Xvalue * yValue / 100).toFixed(2);
        result.innerHTML = `${Xvalue}% of ${yValue} is <span>${z.value}</span>`;
    } else {
        result.innerHTML = "Input cannot be empty!";
    }
});

