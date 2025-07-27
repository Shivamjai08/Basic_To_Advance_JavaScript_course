// arrays it is known as a collection of items 
// In the array we can store more than one value,index, array/ multiple value,index, array
 //syntax :
 let marks =[1,2,33,4,5, null, false , "shivam "]
console.log(marks)
// in th array we can print individuals value,index, array use index 
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks.length)
// In the array we can add  new value,index, array in the given array 
marks[9]=56
marks[9]=55// here we can see that we ca also edit the value,index, array 
console.log(marks[9])
//array is a type of object
console.log( typeof marks)
// array methods 
//1.To change array in String:
let num=[1,2,3,4,5]
// let b=num.toString()//now b is a string 
// console.log( typeof b);
// console.log( "string:-" ,b)
// //2. join method to join something new in array 
// let c= num.join("__");
// console.log(c);
// //  pop() this method is used to remove last element fron the original array.
// let d =num.pop()
// console.log(num,d);  // here you can see that hoe pop function worked in array and also show the removed element.



// // push () function in array add the nuber and elements last in array by push function.
// let e=num .push(34) 
//    console.log (num ,e);

//    //shift function 
// let f= num.shift()
// console.log(f, num);// removes an element from the start of the array 

 
// // unshift function 
// let g=num.unshift(0)
// console.log(g, num )// add an element from the start of an array

//delete is a opearator 

// delete num[0]
// console.log( num);

//concat method 

// let num_more=[10,23,24,56,34,67]
// let newarray=num.concat(num_more)
// console.log (newarray)

// //Sort method it sort elements alphabatically 

// num_more.sort()
// console.log(num_more);
// // compare function in sort desecending method 
// let compare=(a,b)=>{
//     return a-b
// }

// //reverse method 
// num.reverse()
// console.log(num )
  
// // splice method  to add elemnts in array 
//  let deletedvalues=num.splice( 1020,2030,4030,4000,2090)
// console.log(num)
// console.log(deletedvalues);

//Using loops in array 
 //using for loop in array 
let lr=[3,4,2,5,6]
 
// for(let i=0;i<num.length;i++){
//         console.log(lr[i]);

//}
//to print square of each element we can use for each function 
//  lr.forEach((element)=>{
//     console.log (element*element)
//  }
// )

// array.from is used to convert html bundles of coading it into by array.form 

// let nam= "shivam "
// let arr=Array.from(nam)
// console.log (arr);

// //For of & For in loop in array 
//   // for of loop is shortcut used to print array in javascript
// for(let item of lr) {
//     console.log(item);
//}

// For in loop 

for (let i in lr) {
  console.log(lr[i])
        
    }

    // important topic 
    // Map  function  is used to make a new array 

    let arr=[1,2,4,5,6,7]
let a =arr.map((value,index, array) =>{
console.log (value,index, array)// here we can print value index and array value we can print all these three things by the using of map function 
return value+1// here we can also  add index value 
})
console.log(a)

// Array  filter method 
// IN fiter method we can filter element by on our needs

let a2=arr.filter((a)=>{
    return a<5;
})
console.log(a2);

// Reduce method function 

 let arr1=[1,2,4,5,6,7]
 let a4= arr1.reduce((h1,h2)=>{
    return h1+h2;

 })
 console.log (a4)

 //practice question 
  // using do- while loops to print an array 
  let arr3=[23,53,45,51,66,32]
  let A=[1,2,3,4,5]
  do {
    A=console.log("enter a number")
    A=Number.parseInt(A)
arr3.push(A)
  } while (A!=0);
console.log(arr3)