let notice = document.querySelector('.noticeBoard');
let form = document.querySelector('form');

form.addEventListener('submit',handleEvent);

function handleEvent(event){
    event.preventDefault();// prevent default refresh
    let indivisualNotice = document.createElement('div');
    indivisualNotice.classList = "noticeBox";
    let noticeAnchor = document.createElement('input');
      noticeAnchor.id = "titleText";
      noticeAnchor.type = 'text';
    let noticeCategory = document.createElement('input') ;
    noticeCategory.id = "titleCategory";
    noticeCategory.type = 'text';

     noticeAnchor.value = form.elements.title.value;
     noticeCategory.value = form.elements.category.value;

     indivisualNotice .append(noticeCategory,noticeAnchor);
    notice.append(indivisualNotice);

    // ondouble click change

    noticeAnchor.addEventListener('dblclick',editCategory); // doubt edit ob double click
    
    function editCategory(event){
        noticeAnchor.value = event.target.value;
        indivisualNotice.append(noticeAnchor);
        console.log(noticeAnchor);

    };
 
}