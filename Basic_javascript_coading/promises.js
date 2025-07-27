// .then and .cathch are used to handle the promises
let p= new promise((resolve,reject)=>{
    console.log("promise is pending")
setTimeout(()=>{
    console.log ("hello i am promise i am resolved")
resolve(true)
},5000)
})
console.log(p);
