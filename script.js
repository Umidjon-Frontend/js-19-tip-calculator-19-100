const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");

btn.addEventListener("click", () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    if (bill === "" || rate === "") {
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 5000);
    } else if (isNaN(bill)) {
        error.innerHTML = "Please enter a number";
        error.style.display = "block";
        setTimeout(() => {
            error.style.display = "none";
        }, 5000);
    } else {
        let tipAmount = bill * rate;
        tip.innerHTML = `Tip Amount: $${Math.ceil(tipAmount)}`;
        let totalAmount = Number(bill) + tipAmount;
        total.innerHTML = `Total Amount: $${totalAmount}`;
    }
});
