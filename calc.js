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
        
        document.getElementById('inp').value = ""
        
    }

