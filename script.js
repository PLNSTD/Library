const mainContainer = document.querySelector('#main-container');
const addBookBtn = document.querySelector('#add-book-button');

addBookBtn.addEventListener('click', function(e) {
    const newBookContainer = document.createElement('div');
    newBookContainer.classList.add('bookCard');
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
    
    newBookContainer.appendChild(addNewBookP);
    newBookContainer.appendChild(titleInputField);
    newBookContainer.appendChild(authorInputField);
    newBookContainer.appendChild(pagesInputField);
    newBookContainer.appendChild(submitBtn);

    mainContainer.appendChild(newBookContainer);
});