const books = JSON.parse(localStorage.getItem('books')) || [];

function updateBookList() {
  const bookList = document.getElementById('booksList');

  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;

    function removeBook(index) {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      updateBookList();
    }

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => removeBook(index));

    li.appendChild(removeBtn);
    bookList.appendChild(li);
  });
}

function addBook(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  const book = { title, author };

  books.push(book);

  localStorage.setItem('books', JSON.stringify(books));
  titleInput.value = '';
  authorInput.value = '';

  updateBookList();
}

const bookForm = document.getElementById('bookForm');
bookForm.addEventListener('submit', addBook);
updateBookList();