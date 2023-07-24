let rootElement = document.querySelector('.container');



let max = 3;
let index = 0;

function addquotes(){

    for(let i = 0; i < max; i++){
    
        let ul = document.createElement('ul');
        ul.classList = 'unorderedList';
        let li = document.createElement('li');
        li.classList = 'listingQuote';
        let p = document.createElement('p');
        p.classList = 'listingAuthor';
        li.innerText = quotes[index].quoteText;
        p.innerText = quotes[index].quoteAuthor;
        ul.append(li,p);
        rootElement.append(ul);
    
      index++;
    }
}
 addquotes();

document.addEventListener('scroll', ()=>{
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addquotes();
    }

});
//   function ready() {
//     alert(`The content of the DOM is loaded`);

//     // image is not yet loaded (unless it was cached), so the size is 0x0

//   }

//   document.addEventListener("DOMContentLoaded", ready);

