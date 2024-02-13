const mainContainer = document.querySelector('#main-container');
const bookContainer = document.querySelector('#book-container');
const addBookBtn = document.querySelector('#add-book-button');
const modal = document.querySelector('.modal');
let myLibrary = [];

$('.overlay').on('click', function(e) {
    if (e.target !== this) {
        $('overlay').hide();
        return;
    }
    $('overlay').hide();
})

addBookBtn.addEventListener('click', function(e) {

    const newBookForm = document.createElement('form');
    const addNewBookP = document.createElement('p');
    const titleInputField = document.createElement('input');
    const authorInputField = document.createElement('input');
    const pagesInputField = document.createElement('input');
    const submitBtn = document.createElement('button');

    addNewBookP.textContent = 'Add new book';
    titleInputField.setAttribute('autofocus', 'true');
    titleInputField.setAttribute('placeholder', 'Title');
    titleInputField.setAttribute('maxlength', '30');
    titleInputField.setAttribute('minlength', '1');
    titleInputField.setAttribute('required', '');
    authorInputField.setAttribute('placeholder', 'Author');
    authorInputField.setAttribute('maxlength', '20');
    authorInputField.setAttribute('minlength', '1');
    authorInputField.setAttribute('required', '');
    pagesInputField.setAttribute('placeholder', 'Pages');
    pagesInputField.setAttribute('min', '1');
    pagesInputField.setAttribute('max', '1000');
    pagesInputField.setAttribute('maxlength', '4');
    pagesInputField.setAttribute('type', 'number');
    pagesInputField.setAttribute('required', '');
    pagesInputField.addEventListener('keypress', (e) => {
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    })
    submitBtn.setAttribute('type', 'submit');
    submitBtn.textContent = 'Submit';
    submitBtn.classList.add('submit-button');

    newBookForm.addEventListener('submit', function(e) {
        const newBook = new Book(titleInputField.value, authorInputField.value, pagesInputField.value);
        addBookToLibrary(newBook);
        modal.textContent = '';
        $('.overlay').hide();
    });

    submitBtn.addEventListener('click', (e) => {
        newBookForm.classList.add('submitted');
        newBookForm.blur();
    })

    newBookForm.appendChild(addNewBookP);
    newBookForm.appendChild(titleInputField);
    newBookForm.appendChild(authorInputField);
    newBookForm.appendChild(pagesInputField);
    newBookForm.appendChild(submitBtn);
    modal.appendChild(newBookForm);
});

function Book(bookTitle, bookAuthor, bookPages) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.status = 'To read';
}

let addBookToLibrary = (newBook) => {
    const bookId = myLibrary.length;
    myLibrary.push(newBook);
    const newBookCard = document.createElement('div');
    newBookCard.classList.add('book-card');

    const bookTitleP = document.createElement('p');
    const bookAuthorP = document.createElement('p');
    const bookPages = document.createElement('p');
    const buttonContainer = document.createElement('div');
    const statusBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    bookTitleP.classList.add('book-title');
    bookAuthorP.classList.add('book-author');
    bookPages.classList.add('book-pages');
    buttonContainer.classList.add('button-container');
    statusBtn.classList.add('status-button');
    deleteBtn.classList.add('delete-button');

    bookTitleP.innerHTML = newBook.title;
    bookAuthorP.innerHTML = 'by ' + newBook.author;
    bookPages.innerHTML = newBook.pages + ' pages';
    statusBtn.innerHTML = newBook.status;
    deleteBtn.innerHTML = 'DELETE';
    
    deleteBtn.addEventListener('click', function(e) {
        const bookId = myLibrary.indexOf(newBook);
        bookContainer.removeChild(newBookCard);
        removeBook(bookId);
    });

    statusBtn.addEventListener('click', function(e) {
        if (newBook.status != 'Read') {
            statusBtn.style.backgroundColor = 'red';
            statusBtn.style.color = 'white';
            statusBtn.innerHTML = 'Read';
            newBook.status = 'Read';
        } else {
            statusBtn.style.backgroundColor = 'greenyellow';
            statusBtn.style.color = 'black';
            statusBtn.innerHTML = 'To read';
            newBook.status = 'To Read';
        }
        statusBtn.setAttribute('background-color', 'chocolate');
    });

    // bookTitleP.innerHTML = 'Pierino e le mille disavventure';
    // bookAuthorP.innerHTML = 'by Plidher';
    // bookPages.innerHTML = '20' + ' pages';

    newBookCard.appendChild(bookTitleP);
    newBookCard.appendChild(bookAuthorP);
    newBookCard.appendChild(bookPages);
    buttonContainer.appendChild(statusBtn);
    buttonContainer.appendChild(deleteBtn);
    newBookCard.appendChild(buttonContainer);
    bookContainer.appendChild(newBookCard);
}

let removeBook = (bookIdx) => {
    myLibrary.splice(bookIdx, 1);
}

