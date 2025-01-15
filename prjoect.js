let r;
let g;
let b;
let button = document.querySelector("button");
let h2 = document.querySelector("h2");
let div = document.querySelector("#rectangle");
function color()
{
    r = Math.floor(Math.random()*255);
    g =Math.floor( Math.random()*255);
    b = Math.floor(Math.random()*255);
     h2.innerText = `rgb ${r} ${g} ${b}`;

    div.setAttribute("style",`background-color: rgb(${r},${g},${b})`);
}
button.onclick = color;






