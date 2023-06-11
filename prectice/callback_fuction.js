const calculate = (a, b, opration) =>{
    return opration (a,b);
}

// Method !
const addition = calculate(3,4, function(num1, num2){
    return num1 + num2;

})
console.log(addition);

// method 2

const subtraction = (a, b) => a-b;

const subresult = calculate (8,3, subtraction);

console.log(subresult);





const divide = (a, b) => a * b;

const div = calculate (8,3, divide);
// console.log(div);


const person = { name: "Lydia" };

function sayHi(age) {
	console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);


0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;