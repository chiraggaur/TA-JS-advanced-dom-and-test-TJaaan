let rootElement = document.querySelector('.container');
let threeData = [];


quotes.forEach((data,i) => {
    if(i < 3){
        threeData.push(data);
    };
});
console.log(threeData);
   // first three data
    threeData.forEach((data) => {
     let ul = document.createElement('ul');
      ul.classList = 'unorderedList';
     let li = document.createElement('li');
     li.classList = 'listingQuote';
     let p = document.createElement('p');
        p.classList = 'listingAuthor';
     li.innerHTML = data.quoteText;
     p.innerHTML = data.quoteAuthor;
     ul.append(li,p);
     rootElement.append(ul);
});

// let values = quotes.forEach((data,i) => {
//     if(i >= 3){
// let ul = document.createElement('ul');
// ul.classList = 'unorderedList';
// let li = document.createElement('li');
// li.classList = 'listingQuote';
// let p = document.createElement('p');
//   p.classList = 'listingAuthor';
// li.innerHTML = data.quoteText;
// p.innerHTML = data.quoteAuthor;
// ul.append(li,p);
// rootElement.append(ul);
//     };

// });

document.addEventListener('scroll', function() {
     quotes.forEach((data,i) => {
        if(i >= 3){
    let ul = document.createElement('ul');
    ul.classList = 'unorderedList';
    let li = document.createElement('li');
    li.classList = 'listingQuote';
    let p = document.createElement('p');
      p.classList = 'listingAuthor';
    li.innerHTML = data.quoteText;
    p.innerHTML = data.quoteAuthor;
    ul.append(li,p);
    rootElement.append(ul);
        };
    
    });
  });
  function ready() {
    alert(`The content of the DOM is loaded`);

    // image is not yet loaded (unless it was cached), so the size is 0x0

  }

  document.addEventListener("DOMContentLoaded", ready);

