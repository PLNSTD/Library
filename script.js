const mainContainer = document.querySelector('#main-container');
const addBookBtn = document.querySelector('#add-book-button');
const modal = document.querySelector('.modal');

$('.overlay').on('click', function(e) {
    if (e.target !== this) {
        return;
    }
    $('overlay').hide();
})

addBookBtn.addEventListener('click', function(e) {
    const newBookContainer = document.createElement('div');
    
    const addNewBookP = document.createElement('p');
    const titleInputField = document.createElement('input');
    const authorInputField = document.createElement('input');
    const pagesInputField = document.createElement('input');
    const submitBtn = document.createElement('button');

    addNewBookP.textContent = 'Add new book';
    titleInputField.setAttribute('placeholder', 'Title')
    authorInputField.setAttribute('placeholder', 'Author');
    pagesInputField.setAttribute('placeholder', 'Pages');
    submitBtn.textContent = 'Submit';
    submitBtn.classList.add('submit-button');
    submitBtn.addEventListener('click', function(e) {
        modal.textContent = '';
        $('.overlay').hide();
    })

    modal.appendChild(addNewBookP);
    modal.appendChild(titleInputField);
    modal.appendChild(authorInputField);
    modal.appendChild(pagesInputField);
    modal.appendChild(submitBtn);

    //modal.appendChild(newBookContainer);
});

