// Function Definition
const bill = 100;
const taxRate = 0.13;

function calculateBill() {
    // this is the function body
    console.log('Running Calculate Bill!!');

    const total = bill * 1 + taxRate;
    return total;
}

// Function call. or **Run**
const myTotal = calculateBill();
// console.log(`Your Total is $${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
