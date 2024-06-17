// Function Definition
function calculateBill(billAmount, taxRate) {
    console.log(billAmount, taxRate);
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount * (1 + taxRate);
    return total;
}

// Function call. or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// Function Definition
function sayHiTo(firstName) {
    return `hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);
