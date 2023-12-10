//SOLUTIONS ARE BELOW
//https://github.com/zachgoll/fullstack-roadmap-series/tree/main/code-challenges/lesson-3

console.log('-------------- Practice 1 --------------')
const myBoolean = true;
let myString = 'hello world';
var firstNumber = 20;
var secondNumber = 40;
//can use let here as well. var is not preferred because it can be redeclared,
//whereas a let variable can only be reassigned and not redeclared
//in addition, variables declared by let are only avaiablae inside the block where they're defined,
//whereas variables declared by var are available throughout the whole funciton in which they are declared (all descendent parts of where the variable is declared)

secondNumber = 80; //reassigning value to a variable (in this case a numebr)
var myArray = [myBoolean, myString]
var myObject = {firstProperty:myArray, sumProperty:firstNumber+secondNumber};
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);

//always remember to save the file before trying to run it in vscode

console.log('-------------- Practice 2 --------------')

// const some Number = 20;
// someNumber = 50
console.log('Three things wrong with the commented code')
//the variable must be assigned as one entity (cannot be spaces)
//attempting to reassign value to const variable
//no semicolon after the last line
//not calling the same variable


console.log('-------------- Practice 3 --------------')

const variable1 = 20;
const variable2 = '40';

const res = variable1 + variable2;
console.log(res)

//fixing this result
const variable11 = 20;
const variable21 = '40';

//JavaScript's built-in Number() function converts a string into a number
const resultVariable = variable11 + Number(variable21);

console.log(resultVariable); // Prints 60, and is a number
//Something that x make sense

const stringVariable = 'some value here';
const numberVariable = 20;

console.log(stringVariable + numberVariable);

console.log('-------------- Practice 4 --------------')

//editing the code until it is valid
//when creating objects, you need to place a comma after each object, NOT a semi colon

const objectVariable = {
    property1: 'prop1',
    property2: 'prop2',
    prop3: [20,30,40],
}

console.log(objectVariable.prop3[2])

console.log('-------------- Practice 5 --------------')

const myArray = [20, 30, 40];

//Arrays start their indexing at 0, therefore there is no value corresponding to index 3 of this array with only 3 elements
//last index is 2
console.log(myArray[2]);
