//Print 1 to 5
// for (let i = 1; i <= 5 ; i++) {
//     console.log("i = ", i); 
// }

// let i = 1;
// while(i<=10) {
//     console.log("Apna College");
//     i++;
// }

// let i = 1;
// do {
//     console.log("i=",i);
//     i++;  
// } while(i <= 5);

//for-of loop
let str = "Javascript";

let size = 0;
for (let val of str) { //iterator -> characters
    console.log("val=", val);
    size++;
}

console.log("string size = ", size);