//Q1.
// //let age = prompt("Enter your age:");
// //age=Number.parseInt(age);
// if (age>10&& age<=20){
//     console.log("your age lies between 10 and 20");}
//     else {
//         console.log ("your age does not lies between 10 and 20")
//     }
 //solution 2: 
//  let age1=15;
//  console.log(age1>10&&age1<=20?"your age lies between 10 and 20":"your age does not lies between 10 and 20"); 

 //solution 3:
//  let age =10; 
//  if (age>10&&age<=20){
//     alert("you are lies between 10 and 20 ");

//  }
// else{
//     alert("you are not lies between 10 and 20 ");
// }

// Q2. 
//write a program to check whether a number is divisible by 2 and 3 or not?

// solution 1:
// let num =16;
// num=Number.parseInt(num);
// if (num%2==0&&num%3==0) {
//     console.log("the number is  divisible by 2 and 3");

    
// }
// else{
//     console.log("the number is  not divisible by 2 and 3");
// }

// solution 2:
/*let num =prompt("enter a number ");
num=Number.parseInt(num);
if (num%2==0,num%3==0) {
    console.log("the number is  divisible by 2 and 3");

    
}
else{
    console.log("the number is  not divisible by 2 and 3");
}*/

//Q3.
// write a program to check whether a person is eligible to drive a car or not based on their age?
//let age= prompt("enter your age");
let age=18;
age=Number.parseInt(age);
//here we are checking whether the age is greater than or equal to 18 or not.
// using ternary operator to check the condition and print the result.
console.log (age>=18?"you can drive":"you can not drive ");