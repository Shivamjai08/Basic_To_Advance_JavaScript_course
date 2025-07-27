//abstraction : abstracting the complex logic and showing only the necessary details to the user
// encapsulation : hiding the internal details and showing only the necessary details to the user
// inheritance : inheriting the properties and methods from the parent class to the child class
// polymorphism : the ability to take many forms, method overloading and method overriding

//rpototype : prototype is a blueprint of the object, it is used to create the object
// prototype chaining : prototype chaining is the process of accessing the properties and methods of the parent class   
/*
let a ={
    name2: "John",
    age: 30, 
    language: "JavaScript",   
}
let p={
    run :()=>{
        alert("running")
    }
}
a.__proto__ = p; // setting the prototype of a to p
//console.log(a.run()); // accessing the run method of p through a
 p.__proto__={
    name: "Doe", // adding a new property to the prototype of p
 }
 a.__proto__=p; // setting the prototype of a to p again
 a.run() 
 console.log(a. name)
 */

 //classes and objects in javascript
/*
 class railwaysforms{
    submitform(){
        alert( this .name+ ":form submitted" +this.trainno)
    }
    cancelleedform(){
        alert( this.name+ ":form canceled" +this.trainno)
    }
    fill(givenname , trainno){
       
        this.name=givenname; // using this to refer to the current object
        this.trainno=trainno; // using this to refer to the current object
    }
 }
 let harry=new railwaysforms(); // creating an object of the railwaysforms class
 harry.fill("Harry" ,23456); // filling the name property of the harry object
 let rohan=new railwaysforms(); // creating another object of the railwaysforms class
    rohan.fill("Rohan",123452); // filling the name property of the rohan object


 harry.submitform(); // calling the submitform method of the harry object
 rohan.submitform(); // calling the submitform method of the rohan object
 harry.cancelleedform(); // calling the cancelleedform method of the harry object

 */

 //contructors in javascript
 /*
 class railwaysforms{
    constructor(givenname,trainno){
    console.log("constructor called..."+givenname+""+trainno); 
    this.name=givenname; // using this to refer to the current object
   this.trainno=trainno; // using this to refer to the current object
    }
    submitform(){
        alert( this .name+ ":form submitted" +this.trainno)
    }
    cancelleedform(){
        alert( this.name+ ":form canceled" +this.trainno)
    }
    // fill(givenname , trainno){
       
    //     this.name=givenname; // using this to refer to the current object
    //     this.trainno=trainno; // using this to refer to the current object
    // }
 }
 let harry=new railwaysforms("Harry" ,23456); // creating an object of the railwaysforms class
 //harry.fill(); // filling the name property of the harry object
 let rohan=new railwaysforms("Rohan",123452); // creating another object of the railwaysforms class
 //rohan.fill(); // filling the name property of the rohan object


 harry.submitform(); // calling the submitform method of the harry object
 rohan.submitform(); // calling the submitform method of the rohan object
 harry.cancelleedform(); // calling the cancelleedform method of the harry object
 */

 //advance cocept of oops i javascript
 /*
 class railwaysforms{
    constructor(givenname,trainno,adrs){
    console.log("constructor called..."+givenname+" "+trainno +" "+adrs); 
    this.name=givenname; // using this to refer to the current object
   this.trainno=trainno; // using this to refer to the current object
   this. adress=adrs

}
   preview (){
        alert( "name of the passanger:"+this .name+ "train no :" +this.trainno +"and your adress is " + this.adress)
    }
submitform(){
        alert( this .name+ ":form submitted" +this.trainno)
    }
    cancelleedform(){
        alert( this.name+ ":form canceled" +this.trainno)
   this.trainno=0; // resetting the trainno to 0
    }
}
let harry=new railwaysforms("harry",23456,"Delhi");
harry.preview(); // calling the preview method of the harry object
harry.submitform(); // calling the submitform method of the harry object
harry.cancelleedform(); // calling the cancelleedform method of the harry object
harry.preview();
*/

//extended keyword in javascript
//inheritance in javascript
//inheritance is the process of inheriting the properties and methods from the parent class to the child class
//it is used to create a new class that is based on an existing class
//the new class is called the child class and the existing class is called the parent class
//the child class inherits the properties and methods of the parent class   
//the child class can also have its own properties and methods
//the child class can also override the methods of the parent class
/*
//syntax of inheritance in javascript
class animal{
    constructor(name,color){
        this. name =name;
        this.color=color;
    
    }
    run(){
        console.log(this.name+ " "+"is running");

    }
    //shout(){
   //     console.log(this.name+"is barking");
  //  }

}
class monkey extends animal{ // extending the animal class to monkey class using inheritance 
    // constructor(name,color){
    //     this. name =name;
    //     this.color=color;
        
    
   // run(){
       // console.log(this.name+"is running");

   // }
    // shout(){
    //     console.log(this.name+"is shouting");
    // }
    eatbanana(){
        console.log( this. name+" "+ " is eating banana ");
    }

}

class dog extends animal {
   
    
    // run(){
    //     console.log(this.name+ " "+"is running");

    // }
    shout(){
        console.log(this.name +" " +"is barking");
    }
}
let animal1=new animal("dog","brown")
let monkey1=new monkey("monkey","orange ")
let dog1=new dog("puppy","white")
animal1.run();// calling the run method of the animal1 object
monkey1.eatbanana(); // calling the eatbanana method of the monkey1 object
dog1.shout(); // calling the shout method of the dog1 object
*/
// hide method of the monkey1 object

//method overriding in javascript
//method overriding is the process of overriding the methods of the parent class in the child class
//it is used to change the behavior of the parent class methods in the child class
//the child class can have its own implementation of the parent class methods
//the child class can also call the parent class methods using the super keyword
//syntax of method overriding in javascript
//method overriding is done by defining a method with the same name as the parent class method in
//the child class
//the child class method will override the parent class method
//the child class method can also call the parent class method using the super keyword
//example of method overriding in javascript
//syntax of method overriding in javascript
//method overriding is done by defining a method with the same name as the parent class method in
//the child class
 /*
class animal{
    constructor(name,color){
        this. name =name;
        this.color=color;
    
    }
    run(){
        console.log(this.name+ " "+"is running");

    }
    shout(){
        console.log(this.name+"is barking");
    }

}
class monkey extends animal{
    eatbanana(){
        console.log(this.name+" "+"is eating banana ");
    }
    hide(){
        console.log(`${this.name}is hiding`)
    }
}
let animal1=new animal("dog","brown")
let monkey1=new monkey("monkey","orange ")

animal1.run();// calling the run method of the animal1 object
monkey1.eatbanana(); // calling the eatbanana method of the monkey1 object
monkey1.hide(); // calling the hide method of the monkey1 object.
*/
//method overloading in javascript
//method overloading is the process of defining multiple methods with the same name but different parameters
//it is used to create multiple methods with the same name but different parameters
//javascript does not support method overloading directly
//but we can achieve method overloading by using default parameters or rest parameters
//syntax of method overloading in javascript
//method overloading is done by defining multiple methods with the same name but different parameters
//example of method overloading in javascript
/*
class employee{
    login(){
        console.log("employee logged in");
    }
    logout(){
        console.log("employee logged out");
    }
    requestLeaves(leaves){
        console.log(`employee requested ${leaves} leaves - auto approved`);

    }
}
class programmer extends employee{
    requestcoffee(x){
        console.log(`programmer requested ${x} coffee`);
    }
    //overriding the requestLeaves method of the employee class
    requestLeaves(leaves){
        super.requestLeaves(4); // calling the parent class method using super keyword
        console.log(`one extra leave is granted`);
       // console.log(`employee requested ${leaves+1} leaves one extra`);
}
}
let e=new programmer()
e.login()
e.requestLeaves(3)

//super keyword in javascript
//the super keyword is used to call the parent class methods from the child class
//it is used to access the parent class methods and properties from the child class
//syntax of super keyword in javascript.
//super.methodName() - to call the parent class method
//super.propertyName - to access the parent class property
*/

// method overriding in javascript with constructor 
// example of method overriding in javascript with constructor 

/*
class employee{
    constructor(name){
        console.log(`${name} - employee constructor called`);
        this .name=name
    }
    login(){
        console.log("employee logged in");
    }
    logout(){
        console.log("employee logged out");
    }
    requestLeaves(leaves){
        console.log(`employee requested ${leaves} leaves - auto approved`);

    }
}
class programmer extends employee{
     constructor(name){
        super(name); // calling the parent class constructor
        console.log(`programmer constructor called`);// this is newly written constructor
        this .name=name}// this .name is always writtem under super keyword
    // if we don't write the super keyword then it will give an error
   // constructor(){
        //super(); // calling the parent class constructor using super keyword
        //automatically calls the parent class constructor by javascript
    
    requestcoffee(x){
        console.log(`programmer requested ${x} coffee`);
    }
    //overriding the requestLeaves method of the employee class
    requestLeaves(leaves){
        super.requestLeaves(4); // calling the parent class method using super keyword
        console.log(`one extra leave is granted`);}
       // console.log(`employee requested ${leaves+1} leaves one extra`);
}


let e=new programmer("harry") // creating an object of the programmer class
e.login()
e.requestLeaves(3)
*/

