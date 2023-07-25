// function allowDrop(ev) {
//     ev.preventDefault();
//   }
  
//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }
  
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   }

let root = document.querySelector('.list');
let inputItem = document.querySelector('form');

let itemsData = []

inputItem.addEventListener('keyup',addItem);
  
function addItem(event){
    event.preventDefault();
   let data = event.target.element;
    itemsData.push({data});
}

