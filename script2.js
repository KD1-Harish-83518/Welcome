var itemList = document.querySelector('#items');
//parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ="yellow";

// // firstChild
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";
 
// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "Hello 4"

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling 
// console.log(itemList.nextElementSibling)


// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'greem';

// createElement
var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title','Hello Div');
console.log(newDiv);

// create text Node
 
var newDivText = document.createTextNode("Hello World");

newDiv.appendChild(newDivText);

console.log(newDiv)

console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
newDiv.style.fontSize = "30px"
container.insertBefore(newDiv,h1);




