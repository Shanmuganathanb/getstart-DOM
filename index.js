var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

var li = document.createElement('li')
var delBtn = document.createElement('button');
delBtn.title = "Delete lastly added Item";
delBtn.className ="btn btn-danger btn-md float-right mr-5 delete";
delBtn.appendChild(document.createTextNode('X'));
document.querySelectorAll('h2.title')[1].appendChild(delBtn);

form.addEventListener('submit',addItem);
delBtn.addEventListener('click',delItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
  if(e.target.classList.contains('edit')){
    var li = e.target.parentElement;
    document.getElementById("item").value = li.firstChild.textContent;
    itemList.removeChild(li);
  }
}
function delItem(e){
    var items = document.getElementsByTagName('li');
    if(items.length){
        var li = document.querySelector('ul').lastElementChild;
        itemList.removeChild(li);
    }
}
      
function addItem(e){
    e.preventDefault();
    var inputItem = document.getElementById("item").value;
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(inputItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    var editBtn = document.createElement('button');
    editBtn.className ="btn btn-warning btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
}


function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }