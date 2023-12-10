//right side is called a javascript expression
//ternary operator --> ? use question mark

console.log('-------------- Practice 1 --------------')

//++ sign and -- will incrememtally increase/decrease the number
//if variable is re-assigned in code, it needs to have been declared using the let (or var) keyword
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable); // 3

console.log('-------------- Practice 2 --------------')

//understanding the difference between == and ===

//strict equality (===) operator checks whether if two operands are equal while considering the types of each operand
//the normal equality (==) operator will change the types of the operands to be the same (if necessary) and then proceed to compare the two operands and then return a Boolean result

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

console.log('-------------- Practice 3 --------------')

const ex1 = 100%50; //0
const ex2 = 100/50; //2
const ex3 = ex1 < ex2; // true
const ex4 = ex3 && 300+5 === 305; // true && true = true
const ex5 = !ex4; //!true = false

console.log(ex5);

//in a single line of code:
console.log(!((100%50 < 100/50) && 300+5 === 305))

console.log('-------------- Practice 4 --------------')

//what does 'result' evaluate to

const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray = [40, 50, 2];

//to access the value of an object property, we use the "dot notation"
const res = myObj.prop2 === (myArray[0]/myArray[2]);
console.log(res)

console.log('-------------- Practice 5 --------------')

const myObj1 = {
    nestedObj1:{
        price:100,
        quantity:5
    },
    nestedObj2: {
        price:150,
        quantity:2
    }
};

const myArray1 = [myObj1.nestedObj1, myObj1.nestedObj2]
const result1 = (myArray1[0].price * myArray1[0].quantity > myArray1[1].price * myArray1[1].quantity)

console.log(result1)