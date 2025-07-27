// string
let name = "harry"
console.log(name);
let name2 = 'shivam';
console.log(name2);
// Here you can see that we are making strings in two ways double quots, single quots.

// use .length to find length of any string length of string 
let friend = "shubham"
console.log(friend.length);
// here we can see that find stringg by the use of index [0]
console.log(friend[2]);


// tempelate literals 
let boy1 = "pramod "
let boy2 = "shubham "
//shubham is a friend of pramod

let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence);
// ${} this is called a string interpretation.


//Escape sequence character:

let fruit = 'bana\'na'
console.log(fruit);
//(\backslash is a escape sequence character to make symbol convert it into in character).
/*
\n= newline in javascript.
\t =tab
\r=carriage return.
*/


//Strings method and properties :

//.length is used to detect length of string
let nam = "harry";
let sd = 'ghsd\'d'
console.log(nam.length)// 
console.log(sd.length) // here you can see the length of string is 6 because escape character is used 
// .touppercase() function this fun.. is used to convert lowercase character to uppercase character
console.log(nam.toUpperCase())
// .tolowercase()function  is used to convert upper case character to lower case  
console.log(nam.toLowerCase())
// .Slice is a method in string to cut the character on the basis of mention index value 
console.log(nam.slice(3, 4))
// when we give one argument  only then :
console.log(nam.slice(2))
// . replace method is used to replace string value from harry to shivam 
console.log(nam.replace("harry", "shivam "))
// concat method  is used to add  number of string 
console.log(nam.concat("is a brother of", friend))
// .Trim method is used to trim the spaces 
let ladies ="   aditi         "
console.log(ladies);
console.log(ladies.trim())
// practice question 


