let x = document.querySelector("input")
console.log(x);
let y = document.querySelector("h2")
console.log(y);
function f1() {
    let inp = x.value;
    if (inp.length > 8) {
        y.innerHTML = "Strong Password"
        y.style.color = "red"
    }
    else if (inp.length < 8 && inp.length > 4) {
        y.innerHTML = "Medium Password";
        y.style.color = "yellow"
    }
    
    else if (inp.length == 0)
    y.innerHTML = "";
    else if (inp.length < 4 )
        {
            y.innerHTML = "Weak Password";
            y.style.color = "green"
        }
}
