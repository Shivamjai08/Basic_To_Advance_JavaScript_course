//problem 1
let a = "shivam "
let b = "jaiswal"
let c=45;
//console.log(a+b+c); //it will give shivam jaiswal45. 

 // problem 2
//  find the type of data type of the following variables and print them in the console 
let type="shivam"
//console.log(typeof type); // it will give string

// problem 3 
const a1={
    name:"shivam ",
ismarried:false,
age:24
}
//a1 is reference of this object store in const 
a1.name=" shubham";
//a1={} //this will throw an error because we cannot reassign a const varianle 
//a1=34; // this will also throw an error because we cannot reassign a const variable    
a1.ismarried=true;
//console.log(a1); // it will give { name: ' shubham', ismarried: true, age: 24 } 
// here we can see that we can change the value  of the object but we cannot reassign the object to a new value because it is a const value .
 

// problem 4 
 // Create a Dictonary of 5 words with their meanings and print them in the console 
 const dictionary={
Serenity:"The state of being calm, peaceful, and untroubled.",
Ephemeral :" Lasting for a very short time.",
Meticulous:" Showing great attention to detail; very careful and precise.",
Resilient :"Able to recover quickly from difficulties",
Illuminate :" To light up or make something clear.",
 }
 console.log(dictionary.Illuminate); // it will give to light up or make something clear. 