// Function Definition
function calculateBill(billAmount, taxRate) {
    console.log(billAmount, taxRate);
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount * (1 + taxRate);
    return total;
}

// Function call. or **Run**
const myTotal = calculateBill(100, 0.13);
