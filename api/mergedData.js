import { deleteSingleAuthor, getSingleAuthor } from './authorData';
import { getSingleBook, getBooksByAuthor, deleteBook } from './bookData';

// API CALLS FOR MERGED DATA

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObj) => {
    getSingleAuthor(bookObj.author_id)
      .then((authorObject) => resolve({ ...bookObj, authorObject }));
  }).catch(reject);
});

const getAuthorBooks = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObj) => {
    getBooksByAuthor(authorObj.firebaseKey)
      .then((authorBooksArr) => resolve({ ...authorObj, authorBooksArr }));
  }).catch(reject);
});

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getBooksByAuthor(firebaseKey).then((booksArray) => {
    const deleteBookPromises = booksArray.map((book) => deleteBook(book.firebaseKey));
    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  })
    .catch(reject);
});

export { getBookDetails, getAuthorBooks, deleteAuthorBooksRelationship };
