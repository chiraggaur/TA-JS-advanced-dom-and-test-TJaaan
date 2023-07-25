let form = document.querySelector('form');
let ul =  document.querySelector('.noticeBoard');
let cardsData =  JSON.parse(localStorage.getItem('cards')) || [];//object form data input


// form events
form.addEventListener('submit',(event)=>{
     event.preventDefault(); // prevent default refresh
     let title = event.target.elements.title.value;
     let category = event.target.elements.title.value;
     cardsData.push({title,category});
// local storage support
    localStorage.setItem('cards',JSON.stringify(cardsData));
     createUI(cardsData,ul);
      
})

//handleEdit and update cardsdata

function handleEdit(event,info,id,label){
    let elm = event.target
    let input = document.createElement('input');
       input.type = 'text';
       input.value = info;

    input.addEventListener('keyup',(e) => {
        if(e.keyCode === 13){
            let  updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem('cards',JSON.stringify(cardsData));
        }
    });   

    input.addEventListener('blur',(e) => {  
            let  updatedValue = e.target.value;
            cardsData[id][label] = updatedValue;
            createUI();
            localStorage.setItem('cards',JSON.stringify(cardsData));
    });   
    let parent = event.target.parentElement;
    parent.replaceChild(input,elm);
  
}






// creating ui from data 

function createUI(data = cardsData,root = ul){
     root.innerHTML = '';
    let fragment = new DocumentFragment();
    data.forEach((cardInfo,index) => {
       let li = document.createElement('li');
        li.id = 'list';
       let p = document.createElement('p');
       p.id = 'category';
       p.innerText = cardInfo.category;

      p.addEventListener('dblclick',(event)=> handleEdit(event,cardInfo.category,index,'category')); // pass arguments in callback       
       let h2 = document.createElement('h2');
       h2.id = 'title';
       h2.innerText = cardInfo.title;
       h2.addEventListener('dblclick',(event)=> handleEdit(event,cardInfo.title,index,'title')); // pass arguments in callback 
       li.append(p,h2);
       fragment.appendChild(li);
    })
    root.appendChild(fragment);
}

createUI(cardsData,ul);