/*1. function selectDiv() {
const div = document.querySelector("#container ")
console.log(div);

}  */ 

/*2. function selectul() {
  const listItems = document.querySelector("ul .menu li")
  console.log(Array.from(listItems));
  
} */ 

/**
3.  function selecth1(){
  const h1 = document.querySelector("h1")
  h1.style.color = "blue";
} 

 */

/**
 4. function cardborder() {
  const card = document.querySelector(".card")
  card.style.border ="2px solid red"
  
}
 */

/*
5. function logButton() {
  const btn = document.querySelector("button")
  console.log(Array.from(btn));
  
}
 */

/**
6. function selectPara() {
  let p = document.querySelector("p");
  p.textContent ="Updated description";
  
}
 */

/** 
 * 7. function hello() {
  const text = document.querySelector("#element")
  text.textContent ="Hello, World!"
}

 */

/*
8. const btn = document.querySelector("#submit")
btn.textContent = "Submit Form";
*/

const price = document.querySelector(".price")
price.textContent="499";


function changeh2Text() {
  const h2 = document.querySelector("h2");
  h2.innerHTML =" Welcome to my page"
}

// Changing the HTML in JS  

const content = document.querySelector("#content");
content.innerHTML = " <h2> This is h2 </h2> <p> this is p </p>";


function clickMe() {
  const content = document.querySelector("#content")
  content.innerHTML = "  <button>Click Me!</button>"
}

const info = document.querySelector(".info")
const strong = document.createElement("strong")
strong.textContent ="Important"
info.append(strong)

const main  = document.querySelector("#main")
main.innerHTML ='<ul> <li> Home </li> <li> About </li> <li> contect </li> </ul>'

function takeImg(id) {
   const element = document.querySelector(`#${id}`)
   const img = document.createElement("img")
   img.src ="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
element.appendChild(img)
}