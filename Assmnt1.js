/* Write code to display from 1 to 100 but just even numbers.

Write a function calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. 
You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary. If 1000000 >= salary > 500000 then 10% tax on the entire salary. 
If 1500000 >= salary > 1000000 then 20% tax on the entire salary. If the salary > 1500000 then 30% tax on the entire salary.

Write a function to perform this. You are given two numbers n1 and n2. 
You need to find the sum of the products of their corresponding digits. 
So, for a number n1= 6 and n2 = 34, you'll do (64)+(03) = 24.

Note - You can do it on VSCode/JSFiddle or any online tool.
*/
/* Even number display */

/*console.log("Even numbers are:")
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
    }


// function calculate(operator, num1, num2) {
//     let result;

//     switch (operator) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//         case 'multiply':
//             result = num1 * num2;
//             break;
//         case 'divide':
//             result = num1 / num2;
//             break;
//         default:
//             console.log('Invalid operator');
//             return;
//     }

//     return result;
// }
// console.log(calculate('add', 5, 3)); // Output: 8
// console.log(calculate('subtract', 7, 2)); // Output: 5
// console.log(calculate('multiply', 4, 6)); // Output: 24
// console.log(calculate('divide', 10, 2)); // Output: 5

/*function findTax(salary) {
    let taxRate;
    let taxAmount;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            console.log('Invalid salary');
            return;
    }

    taxAmount = salary * taxRate;
    return taxAmount;
}

console.log(findTax(400000)); // Output: 0 (0% tax)
console.log(findTax(800000)); // Output: 80000 (10% tax)
console.log(findTax(1200000)); // Output: 240000 (20% tax)
console.log(findTax(1600000)); // Output: 480000 (30% tax) */

/*function sumOfProducts(n1, n2) {
    const strN1 = n1.toString();
    const strN2 = n2.toString();

    let sum = 0;
    for (let i = 0; i < Math.max(strN1.length, strN2.length); i++) {
        const digitN1 = parseInt(strN1[i]) || 0; // If undefined, consider it as 0
        const digitN2 = parseInt(strN2[i]) || 0;
        sum += digitN1 * digitN2;
    }
    return sum;
}
console.log(sumOfProducts(64, 3)); */
