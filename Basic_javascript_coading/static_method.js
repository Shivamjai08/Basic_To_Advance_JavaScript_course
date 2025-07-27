//static methods in javascript
/*
class animal{
    constructor(name){
this.name=animal.capitalize(name);

    }
    walk(){
        console.log(`Animal ${this.name} is walking`)

    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);

    }
}
j=new animal("jack");
j.walk();
//static method can be called without creating an instance of the class
*/

// Getter Setter Method 
/*

class animal{
    constructor(name){
        this._name=name;

    }
    fly(){
        console.log(`I am flying `);

    }
    get name(){               // getter method
        return this._name; 
    }
    set name(newname){         // setter method
        this._name=newname;
    }
}
 let j=new animal("bruno");
j.fly();
console.log(j.name);
j.name="jack";
console.log(j.name);
// using instanceof check if an object is an instance of a class or not 
let c=65;
console.log(j instanceof animal); //true
console.log(c instanceof animal); // false 
*/

//IIFE  (Immediately Invoked Function Expression)
/*

let a =() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => { resolve(456)
            
        }, 4000);
    })
}
(
    async()=>{
        let b = await a();
        console.log(b);
        let c = await a();
        console.log(c);
        let d = await a(); 
        console.log(d);
        console.log("All promises resolved");
    }
)() // This IIFE will execute immediately and log the resolved values of the promises after 4 seconds each.

*/ 
// IIFE is a function that runs as soon as it is defined

//destructuring in javascript
/*
let arr=[3,2,1,4,5];
let [a,,b,...rest]=arr; //destructuring the array
console.log(a,b,rest); // 3 2 1 4 5
// destructuring is a way to unpack values from arrays or properties from objects into distinct variables

*/

//2nd method of destructuring in javascript
/*
let{a,b}={a:1,b:2}
console.log(a,b); // 1 2
*/

//spread operator in javascript
/*
let arr1=[1,2,3];
let obj1={...arr1}; //spread operator to copy the array into an object
console.log(obj1); // { '0': 1, '1': 2, '2': 3 }    
*/
//spread operator can also be used to merge arrays or objects
let arr1=[1,2,3];
function sum(v1 ,v2 ,v3){
    return v1 + v2 + v3;
}
console.log(sum(...arr1)); //6
let obj2={
    name:'shubham',
    company:'xyz',
address:"yzx"
}
//console.log({ ...obj2,name:"shivam",company:"abc"})
console.log({ name:"shivam",company:"abc",...obj2}) //this will print the obj2 object without changing any value 
