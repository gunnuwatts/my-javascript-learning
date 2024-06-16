// Function Definition
function calculateBill(billAmount, taxRate) {
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount * (1 + taxRate);
    return total;
}

// Function call. or **Run**
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);
