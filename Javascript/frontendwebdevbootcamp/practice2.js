//asynchronous code is simply code that does not run immediately  

//When using a regular expression, ^ symbol indicates the beginning of a string, whereas 
//a $ symbol would represent the end of a string
//example of this
const myString = 'my string';

console.log(/^m/.test(myString));
//of course it is case sensitive as well
console.log(/^M/.test(myString));
console.log(/g$/.test(myString));
console.log(/f%/.test(myString));

const myString1 = "My Dog jumped on the bed. My dog is a bad Dog";

const correctStr = myString1.replaceAll(/[Dd]{1}og/g,'cat');
console.log(correctStr);
console.log(correctStr.toUpperCase())
