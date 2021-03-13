// manipulate document title
document.title = "Items";
// Examine document objects
console.dir(document);
// HTML collection of items in the document
console.log(document.all);
// All forms
console.log(document.forms);
// All link tag
console.log(document.links);

// getElementByID 
console.log(document.getElementById("main-header"));

//innerText pays attention to styles inside
//textContent will give whatever text is inside regardless of display-none
var headerTitle = document.getElementById('header-title'); 
console.log(headerTitle.innerText);
console.log(headerTitle.textContent);


// Change the style and use camelcase for style type
headerTitle.style.borderBottom = "solid 3px #000";

var items = document.getElementsByClassName('list-group-item');
console.log(items);


document.querySelector("h2.title").style.fontWeight = "bold";
document.querySelector("h2.title").style.color = "green";

// querySelector
var header = document.querySelector("#main-header");
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';

// queryselectorall
var titles = document.querySelectorAll('.title');
titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "#f4f4f4";

// }

var items = document.querySelectorAll('.list-group-item');
items[2].style.backgroundColor = "green";

for (var i=0;i<items.length;i++){
	items[i].style.fontWeight = "bold";
	items[i].style.color = "black";
}

var listItem=document.getElementsByClassName('new-list-ele');
listItem[0].style.backgroundColor = "black";

var listItemName = document.getElementsByTagName('li');
listItemName[4].style.color = "white";

listItemName[1].style.backgroundColor = "green";
listItemName[2].style.display = "none";


var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
	odd[i].style.backgroundColor = 'black';
	odd[i].style.color="green";
}

// parentElement
listItemName[2].parentElement.style.border ="thick solid #fff";
// lastelementchild
console.log(document.querySelector('ul').lastElementChild);
document.querySelector('ul').lastElementChild.style.fontWeight ="bold";
// lastchild
console.log(document.querySelector('ul').lastChild);

// appendchild,createElement,createTextNode
var node = document.createElement("li");
var textnode = document.createTextNode("Item 6");
node.appendChild(textnode);
document.querySelector("ul#items").appendChild(node);

//firstElementChild and firstChild
document.querySelector('ul').firstElementChild.style.color = "white";
console.log(document.querySelector('ul').firstChild);

// nextsibling and nextElementsibling
console.log(document.querySelector('li.new-list-ele').nextSibling);
document.querySelector('li.new-list-ele').nextElementSibling.innerText = "hello";

// previoussibling and previousElementsibling
console.log(document.querySelector('li.new-list-ele').previousSibling);
document.querySelector('li.new-list-ele').previousElementSibling.innerText = "hi";

// setAttribute
document.querySelector("input[type='submit']").setAttribute("id","submit-btn");


 // changing the html content
//  headerTitle.parentElement = "<h3>Hello</h3>";
headerTitle.insertAdjacentText("beforebegin", "HEllo");
document.querySelector('li:nth-child(1)').insertAdjacentText("beforebegin","HEllo");