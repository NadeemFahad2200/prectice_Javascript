// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}

// calling the function
// greet();

// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);


function say(message) {
    console.log(message);
}

let result = say('Hello');
console.log('Result:', result);

function add(a, b) {
    return a + b;
}
let sum = add(10, 20);
console.log('Sum:', sum);