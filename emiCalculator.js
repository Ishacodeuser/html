document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.length > 10) {
            input.value = input.value.slice(0, 10);
        }
    });
});

const loanAmount = document.getElementById('amount');
const loanInterest = document.getElementById('Interest');
const loanTenure = document.getElementById('loanTenure');
const calculate = document.getElementById("calculate");

calculate.addEventListener("click", (e) => {
    e.preventDefault();

    const isYear = document.getElementById('year').checked;
    const isMonth = document.getElementById('month').checked;

    if (!isYear && !isMonth) {
        alert('Please select loan tenure type (Year or Month)');
        return;
    }

    const p = parseFloat(loanAmount.value);
    const r = parseFloat(loanInterest.value) / 12 / 100;
    let n = parseInt(loanTenure.value);

    if (isYear) {
        n = n * 12;
    }

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || n <= 0) {
        alert("Please enter valid inputs");
        return;
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    document.getElementById('emi').innerHTML = '₹' + Math.round(emi);
    document.getElementById('totalInterest').innerHTML = '₹' + Math.round(totalInterest);
    document.getElementById('totalPayment').innerHTML = '₹' + Math.round(totalPayment);
});
