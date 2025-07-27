//Airthmetic operators are used to perform matmatical operations on numbers.

// +operator is used to add two values.
// *operator is used to multiply two values.
// -operator is used to subtract two values.
// /operator is used to divide two values.
// % operator is used to get the remainder of a division operation
//++ oprator is used to increment a value by 1. 
// -- opeator is used to decrement a value by 1.
// ** operator is used to raise a value to the power of another value.
// Example:

// let a = 10;
// let b = 5;
// let c = a + b; // adddition 
// //console.log(c); // it will give 15
// let d = a - b; // subtraction 
// console.log(d); // it will give 5
// let e = a * b; // multiplication 
// console.log(e); // it will give 50
// let f = a / b; // division 
// console.log(f);// it will give 2
// let g = a % b; // modulus // remainder  
// console.log(g); // it will give 0
// let h=++a; // increment
// console.log(h); // it will give 11
// let i=--b; // decrement 
// console.log(i); // it will give 4
// let j=a**b; // exponentiation 
// console.log(j); // it will give 10000 (11raised to the power of 4)

// assignment operators
//assignment operators are used to assign a value  to a variable 

// 1. = is the asssignment operator. it assigns the value of the right operand to the left operand.
let x = 10;
let z = x; // here we are assignig the value of x to z
console.log(z); // it will give 10.

//2. += is the additional assignment operator. it adds the value of the right operand to the left operand and assigns the result to the left operation.
let y = 5;
y += 2; // here we are adding 2 to the value of y and assigning the result to y.
console.log(y); // it will give 7. 

// 3. -= is the subtraction assignment operator. it subtracts the value of the right operand from the left operand and assigns the result to the left operation.
let a = 20;
a -= 5; // here we are subtracting 5 from the value of a and assigns the result to a.
console.log(a);// it will give 15.

//4. *=i is the multiplication  assignment operator. it multiplies the value of the right operand from the left operand and assigns the result to the left operation.
let b = 10;
b *= 2; // here we are multiplying the value of b by 2 and asssigns the result to b.
console.log(b); // it will give 20.

// 5. /= Divisions assignment operator. it divides the value of the right operand from the left operand and assigns the result to the left operation.
let c = 30;
c /= 3; // here we are dividing the value of c by 3 and assigns the result to c.
console.log(c); // it will give 10.

//6. %= is the modulus assignment operator. it calculates the reaminder of the division of the left operand by the right operand and assigns the reaminder to the left operands. 
let d = 25;
d %= 4; // here we are caculating the remainder of the division of d by 4 and assigns the result to d. \
console.log(d); // it will give 1.

// 7. **= is the exponentiation assignment operator. it raises the value of the left operand to the power of the right operand and assigns to the left operand.
let e = 2;
e **= 3; // here we are raising the value of e to the power of 3 and assigns the results to e.
console.log(e); // it will give 8. 

// logical operators 
/*
Logical operator are used to combine two or more conditions and return a boolean value (true or false )
&& is the logical AND operator. it returns true if both conditions are true, otherwise it returns false 
||is the logical OR operator. it returns true if at least one condition is true, otherwise it returns false.
! is the logical NOT operator. it negates the value of a condition. if the condition is true, it returns false, and if the condition is false it returns true.
*/
let cond1 = 34;
let cond2=30;
console.log(cond1>cond2 && cond1<50, "cond1>cond2 && cond1<50");  // it will give true because both conditions are true. 
console.log(cond1>cond2 || cond1==50, "cond1>cond2 || cond1<50"); // it will give true because at least one condition is true.
console.log(!(cond1.cond2),"!(cond1.cond2)"); // it will give false because the condition is true, and the NOT operator negates it. 


//conditional/comparison  operators 
/*
conditional operators are used to compare two values and return a boolean value (true or false).
== is the equality operator. it chceks if two values are equal, ignoring their data types.
=== is the strict equality operator, it checks if two values are equal and of the same data type. 
!= is the inequality operator. it cchecks if two values are not equal, ignoring their data types.
!== is the strict inequality operator. it checks if two values are not equal and of different data types. 
>is the greater than operator. it checks if the left value is greater than the right value.
< is the less than operator. it checks if the left value is less than the right value.
>=is the greater than or equal to opeartor. it checks if the left value is greater than or equal to the right value.
<= is the less than or equal to operator. it checks if the left value is less than or equal to the right value.
? is the ternary operator. it is a shorthand for an if-else statement. it takes three operands: a condition, a value if the condition is true, and a value if the condition is false. 
*/
//example:

let comp1 = 45
let comp2 = "45"
console.log(comp1 == comp2, "comp1==comp2"); // it will give false because 45 is not equal to 30;
console.log(comp1 === comp2, "comp1===comp2"); // it will give false because 45 is not equal to "45"(string);
console.log(comp1 != comp2, "comp1!=comp2");  // it will give true because 45 is not equal to 30;
console.log(comp1 !== comp2, "comp1!==comp2"); // it will give true because 45 is not equal to "45"(string)
console.log(comp1 > comp2, "comp1>comp2"); // it will give false because 45 is not freater than "45"
console.log(comp1 < comp2, "comp1<comp2");// it will give false because 45 is not less than "45"
console.log(comp1 >= comp2, "comp1>=comp2"); // it will give true because 45 is greater than or equal to "45"
console.log(comp1 <= comp2, "comp1<=comp2"); // it will give true because 45 is less than or equal to "45"

