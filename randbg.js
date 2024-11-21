// x = document.querySelector("body")
// console.log(x);


// function getRandomColor() {
//     const r = Math.trunc(Math.random() * 256); 
//     const g = Math.trunc(Math.random() * 256); 
//     const b = Math.trunc(Math.random() * 256); 
//     const a = Math.random().toFixed(2); 
//     document.querySelector("h2").innerHTML = `rgba(${r}, ${g}, ${b}, ${a})`;

//     return `rgba(${r}, ${g}, ${b}, ${a})`;
//   }
//   document.querySelector("button").addEventListener('click', () => {
//     document.body.style.backgroundColor = getRandomColor();
//     });

    //print rgba values
    // dark mode light mode
 let a = document.querySelector("#a");
 console.log(a);
 let b = document.querySelector("#b");
 console.log(b);
    a.addEventListener('click', () => {
      document.body.style.backgroundColor = "rgb(0,0,0)";
    });
    b.addEventListener('click', () => {
      document.body.style.backgroundColor = "rgb(255,255,255)";
    });