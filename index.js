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

 // changing the html content
headerTitle.innerHTML = "<h3>Hello</h3>";
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

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';

// queryselectorall
var titles = document.querySelectorAll('.title');
titles[0].textContent = "Hello";

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "#f4f4f4";
    
}