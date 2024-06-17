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

const firstName = 'wes';
function sayHiTo() {
    return `hello ${firstName}`;
}

const greeting = sayHiTo();
console.log(greeting);
