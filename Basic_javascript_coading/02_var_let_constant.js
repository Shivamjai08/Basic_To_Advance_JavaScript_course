//var is a global variable in javascript
// var a=3;here we can see that var is a global variable so we can use it anywhere in the code and also redeclared a var 

var a = "hello world ";
console.log(a);

{
    var a = 'this'
    console.log(a);

}
console.log(a);
//let variable  in javascript
//this is a block scope variable
//let variable cannot be redeclared in the same scope  
let b = 34;
console.log(b);
{
    let b = 54;
    console.log(b);
}

//const 
//const is a block scope variable and it cannot be redeclared.
const c=45;
console.log(c);
// {cosnt c=56;
//     console.log(c); //  it throw Error: identifier 'c'has already been declared.
//     //const c=56;  //this will throw an error because const cannot be redeclared in the same scope 
// }






