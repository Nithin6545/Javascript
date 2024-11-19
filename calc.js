let inp = document.querySelector("input")
let y = document.getElementsByClassName("btn")
console.log(y);

for(let i=0;i<y.length;i++)
        {
            y[i].addEventListener("click",()=>
            {
                inp.value += y[i].innerHTML  //to concat in input display
            })
        }
function ac(){
    inp.value = '';
    }
function ce(){
    inp.value =  inp.value.slice(0,-1)
}

// let a = document.getElementById("ce")
// console.log(a);
// a.addEventListener("click",()=>{
//     let l = inp.value
//     inp.value=l.slice(0, -1)
// })

// let res = document.getElementsById("eq")
// console.log(res);
// res.addEventListener("click",()=>{
//     inp.value=eval(inp.value)
// })

function eq(){
    inp.value=eval(inp.value)
}
