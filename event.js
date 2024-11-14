function f1(){
    window.alert("Hey User Good Afternoon")
}


let z = document.getElementById("bt")
console.log(z);
z.addEventListener("click",()=>alert("Good AfterNoon Again"))

let z1 = document.getElementsByTagName("button")
console.log(z1[2]);
    z1[2].onclick=function f2(){
        alert("Hello")
    }

