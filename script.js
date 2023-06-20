
console.log(document.domain);
console.log(document.URL);
console.log(document.title)
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10])
document.all[10].textContent = "Hello";

console.log(document.forms);
console.log(document.links);
console.log(document.images);

Get ElementByID//

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText= "GoodBye";
// document.getElementsByClassName("title").style.color = "green";
headerTitle.style.border = "solid 3px #000";


var items =  document.getElementsByClassName('title');
items[0].style.fontWeight="bold"
items[0].style.color="#00FF00"

var item = document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor = "#00FF00"

for(var i = 0; i<item.length;i++){
item[i].style.fontWeight="bold"
}
 
var ite = document.getElementsByClassName("new-list");
ite[0].style.color="green"
ite[0].style.margin="5px"


var ity = document.getElementsByTagName("li")
ity[4].style.fontWeight = "bold"

var tie = document.querySelectorAll('.list-group-item:nth-child(2)');
tie.style.backgroundColor = 'green'