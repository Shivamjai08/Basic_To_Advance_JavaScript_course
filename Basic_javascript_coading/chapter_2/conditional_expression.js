// if satement is used to execute a block of code if a specified condition is true.
// if(condition){
//    // code to be executed if the condition is true } 
// let a=prompt("here Enter your age");
// a=Number.parseInt(a); // covert the string to number 
// console.log(a);
let age = 18;
;
// if(age>=18){
//     console.log("you are eligible to drive car")
// }


// IF _ELSE Statment 

// if else statment is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.
// if(age>=18){
// //    console.log("you are  eligible to drive car")
// alert("you are eligible to drive car");
//  }else{
//     console.log("you are not eligible to drive car")
//  }


//IF_ELSE_IF Statment 

if (age >= 18) {
   // alert
    console.log("you are eligible to drive car");
}

else if (age >= 32 && age < 18) {
  //alert
   console.log("you are not eligible to drive car");
}
else {
    //alert
    console.log("you are kid  ");

}
console.log("this is the end of the program ");

// SWITCH STATMENT

// switch statment is used to execute a block of code based on the value of a variable or expression. it is an alternative to using multiple if statment .
let day = 3;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console, log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}
// the switch statement evaluates the value of the day variable and executes the block of code that matches the value.

// ternary operator
// the ternary operator is a shorthand for an if-else statement. it takes three operands: a condition, a value if the condition is true and a value if the condition is false.
console.log(age >=18?"you are eligible to drive car": "you are not eligible to drive car")

