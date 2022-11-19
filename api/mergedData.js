import { getAuthorBooks, getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// API CALLS FOR MERGED DATA

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObj) => {
    getAuthorBooks(authorObj.author_id)
      .then((booksObj) => resolve({ ...authorObj, booksObj }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
