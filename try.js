


// let input = document.getElementById("a")
// let button = document.getElementById("b")
// let output = document.getElementById("c")
//console.log(input);
// function display(){
//     const a = document.getElementById('a').value;
//     document.getElementById('c').innerHTML = " You entered: " + a;
// }

let input = document.getElementById("a")
let button = document.getElementById("b")

function add(){
           let a = Number(document.getElementById("a").value)
           let b = Number(document.getElementById("b").value)
           let c = Number(a+b)
           document.getElementById('d').innerHTML = c        
}
function sub(){
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let d = Number(a-b)
    document.getElementById('e').innerHTML = d        
}
