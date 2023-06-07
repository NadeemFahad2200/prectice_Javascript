// function in javascript
// function sum(a,b){
//     const sum = a+b;
//     console.log('The result is', sum);
//     return sum;

// }
// const a = 10;
// const b = 20;
// sum(a,b);

// function expression
const square = function (num) {
    return num*num;
    
}
console.log(square);
// console.log(square(3));


// Nested Function 
function addsquare(a,b) {
    const sa = square(a);
    const sb = square(b);

    function square(num) {
        return num*num;
        
    }
    return sa + sb;
    
}
console.log(addsquare(3, 4));
