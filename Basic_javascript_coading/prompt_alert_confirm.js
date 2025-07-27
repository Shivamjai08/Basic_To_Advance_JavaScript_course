alert("Enter the value of a!");
let a= prompt("Enter a here ","654");
    a=Number.parseInt(a);
    alert("you entered a  of type"+typeof a )
   
let write =confirm("this is your confirm submission ")
if(write){
     document.write(a);//console.log(a);
}
else{
    document.write("please allow me to write")
}
