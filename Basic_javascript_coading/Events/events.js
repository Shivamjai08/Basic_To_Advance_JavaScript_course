// // mouse events
//   //mouseover event 
//   document.getElementById("mouseOver").addEventListener("mouseOver",function() { });
//   //mouseout event
//  document.getElementById("mouseout").addEventListener("mouseOut",function() { });
// //mousedown events 
// document.getElementById("mouseDown").addEventListener("mouseddown",function(){});
// // mouseupevent
// document.getElementById("mpouseUp").addEventListener("mouseup",function(){});
// //mousemove event 
// document.getElementById("mpousemove").addEventListener("mousemove",function(){});

// // touch events
//   //touchstart event
//   document.getElementById("touchStart").addEventListener("touchstart",function(){});
//   //touchmove event
//   document.getElementById("touchMove").addEventListener("touchmove",function(){});
//   //touchend event
//   document.getElementById("touchEnd").addEventListener("touchend",function(){});
//   //touchcancel event
//   document.getElementById("touchCancel").addEventListener("touchcancel",function(){});

//   // kyboard events 
// document.getElementById("keyDown").addEventListener("keydown",function(){});
// document.getElementById("keyUp").addEventListener("keyup",function(){});
// document.getElementById("keyPress").addEventListener("keypress",function(){});
// // form events
//   //submit event
//   document.getElementById("submit").addEventListener("submit",function(){});
//   //change event
//   document.getElementById("change").addEventListener("change",function(){});
//   //input event
//   document.getElementById("input").addEventListener("input",function(){});
//   //focus event
//   document.getElementById("focus").addEventListener("focus",function(){});
//   //blur event
//   document.getElementById("blur").addEventListener("blur",function(){});



// document.getElementById("offline").
// addEventListener("offline",function(){});
// //visibilitychange event
// document.addEventListener("visibilitychange",function(){});
// //animation events
//   //animationstart event
//   document.getElementById("animationStart").addEventListener("animationstart",function(){});
//   //animationend event
//   document.getElementById("animationEnd").addEventListener("animationend",function(){});
//   //animationiteration event
//   document.getElementById("animationIteration").addEventListener("animationiteration",function(){});
// //transition events
//     //transitionstart event
//     document.getElementById("transitionStart").addEventListener("transitionstart",function(){});
//     //transitionend event
//     document.getElementById("transitionEnd").addEventListener("transitionend",function(){});
// //transitioncancel event
//     document.getElementById("transitionCancel").addEventListener("transitioncancel",function(){});
// //drag and drop events
//     //dragstart event
//     document.getElementById("dragStart").addEventListener("dragstart",function(){});
//     //drag event
//     document.getElementById("drag").addEventListener("drag",function(){});
//     //dragenter event
//     document.getElementById("dragEnter").addEventListener("dragenter",function(){});
//     //dragleave event
//     document.getElementById("dragLeave").addEventListener("dragleave",function(){});
//     //dragover event
//     document.getElementById("dragOver").addEventListener("dragover",function(){});
//     //drop event
//     document.getElementById("drop").addEventListener("drop",function(){});
//     //dragend event
//     document.getElementById("dragEnd").addEventListener("dragend",function(){});

//     onclick = function() {
//       alert("Button clicked!");
//     } 
//     // This function will be called when the button is clicked
//     document.getElementById("myButton").addEventListener("click", function() {
//       alert("Button clicked!");
//     });
//     //add event listener to the button
//     document.getElementById("myButton").addEventListener("click", function() {
//       alert("Button clicked!");
//     });

//     //remove event listener from the button
//     removeEventListener = function() {
//       document.getElementById("myButton").removeEventListener("click", function() {
//         alert("Button clicked!");
//       });
//     }


// //click event
// document.getElementById("click").addEventListener("click",function(){});
// //dblclick event
// document.getElementById("dblClick").addEventListener("dblclick",function(){});
// //contextmenu event
// document.getElementById("contextMenu").addEventListener("contextmenu",function(){});
// //load event
// document.getElementById("load").add
// EventListener("load",function(){});
// //resize event
// document.getElementById("resize").addEventListener("resize",function(){});
// //scroll event
// document.getElementById("scroll").addEventListener("scroll",function(){});
// //unload event
// document.getElementById("unload").addEventListener("unload",function(){});
// //error event
// document.getElementById("error").addEventListener("error",function(){});
// //beforeunload event
// document.getElementById("beforeUnload").addEventListener("beforeunload",function(){});
// //online event
// document.getElementById("online").addEventListener("online",function(){});
// //offline event
   
//callback function 
function loadscript(src,callback){
    var script= document.createElement("script");
    script.src=src;
    script.onload = function() {
        console.log("Script loaded successfully."+src);
    callback(null,src);
    };
    script.onerror=function(){
        console.log("error loading script src:"+src);
        callbacks(new error ("src got some error "))

    }
    document.body.appendChild(script);
}
function hello(error,src){
if (error){ 
    console.log(error)
    return
}
}
function goodmorning(src){
    alert('good morning'+src);
}
 loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js",hello ); 