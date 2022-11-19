import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// API CALLS FOR BOOKS

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

export default getBookDetails;
