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
    document.getElementById("item").value = li.querySelector("h6").textContent;
    document.getElementById("item-description").value = li.querySelector("p").textContent;
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
    var inputItem = document.getElementById("item");
    var inputDes = document.getElementById("item-description");
    if(inputItem.value === '' || inputDes.value === ''){
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
      setTimeout(()=> msg.remove(), 3000);
  } else{
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = "<div><h5 class='text-primary d-inline'>Item Name : </h5><h6 class='m-0 p-0 d-inline'></h6></div><div><h5 class='text-primary d-inline' >Description : </h5><p class='m-0 p-0 d-inline'>Just an item</p>"
    li.querySelector("h6").innerText = inputItem.value;
    li.querySelector('p').innerText = inputDes.value;
    // li.appendChild(document.createTextNode(inputItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn mr-2 btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    var editBtn = document.createElement('button');
    editBtn.className ="btn mr-2 btn-warning btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
    inputItem.value = "";
    inputDes.value = "";
  }
}

var items = itemList.getElementsByTagName('li');
console.log(items);
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      item_name = item.querySelector('h6').textContent;
      item_des = item.querySelector('p').textContent;
      // var itemName = item.firstChild.textContent;
      if((item_name.toLowerCase().indexOf(text) != -1) || (item_des.toLowerCase().indexOf(text) != -1)){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }