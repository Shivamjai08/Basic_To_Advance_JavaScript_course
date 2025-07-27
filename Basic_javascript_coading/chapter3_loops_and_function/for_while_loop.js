
//1.FOR LOOP IN JAVASCRIPT

// For  loop  is used to iterate over a block of code a number of times.
//syntax of for loop 
// for(intialization; condition; increment/decrement){ code to be executed}
//Example of for loop:
/*
for(let i=0; i<=100; i++){
  //  console.log("thr value of i is:",i);
} 
// The above code will print the value of i from 0 to 100.
// program to add frist n natural numbers using for loop 
let sum=0;
let n=10; //prompt("Enter the value of n:");
n= Number.parseInt(n); // convert the string to number 
for(let i=0; i<n; i++){
    sum+=(i+1) // add the value if i+1 to the sum 
    //console.log((i+1),"is the vaue of i");
}

console.log("The sum of frist n natural number is:",sum,"and the value of n is:",n);

*/
// Types of for loop in javascript 

// 2. FOR IN LOOP IN JAVASCRIPT:
// For in loop is used to iterate over the properties oof an object or the elements in javascript .
// Syntax of for in loop 
// for (variable in object ){
//     code  to be executed}
// 

// while loop 

/*

let n=10;
n=Number.parseInt(n)
let i=0
while (i<n) {console.log(i);
    i++   
}
    */

// for making infinite loop 
// let v=10;
// n=Number.parseInt(n)
// let a=0
// while (true) {console.log(a);
      
// }


 //do while loop 
//in true condition 
/*
let n=10;
n=Number.parseInt(n)
let i=0
do {console.log(i);
    i++   
}while(i<n); 

*/
// in false condition , do while loop a loop is run one time permanently 
let n=2;
n=Number.parseInt(n)
let i=10;
do {console.log(i);
    i++   
}while(i<n); 

