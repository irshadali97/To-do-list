/*let parent = document.getElementById("parent") ;
parent.style.backgroundColor = "gray" ;
console.log(parent) ;

let childs = Array.from(document.getElementsByClassName("child")) ;
console.log(childs) ;
for (let child of childs) {
    if  (childs.indexOf(child) % 2 === 0 ) {
        child.style.backgroundColor = "black" ;
    }
} 
//let parent = document.querySelector("#parent") ;
let sibling = parent.previousElementSibling ;
console.log(sibling) ;
let el = document.getElementById("parent") ;
console.log(el.textContent) ;
console.log(el.innerText) ;
console.log(el.innerHTML) ; 
 
function increment() {
    let countEl = document.getElementById("count") ;
  let  currentcount = parseInt(countEl.innerText);
  let updatedCount = currentcount + 1 ;
  countEl.innerText = updatedCount ;

    console.log("increment") ;
}
function decrement() {
  let countEl = document.getElementById("count") ;
  let  currentcount = parseInt(countEl.innerText);
  let updatedCount = currentcount - 1 ;
  countEl.innerText = updatedCount ;

} */
function addElement() {
    const container = document.getElementById("container") ;
   const inputEl = document.getElementById("input") ;
   let newElement = document.createElement("p")
   newElement.innerText = inputEl.value ;
   newElement.setAttribute("onclick" ,"removeElement(this)");
    container.appendChild(newElement);
    return container ;
}
function removeElement(el) {
    el.remove();
}
