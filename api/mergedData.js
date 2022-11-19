// for merged promises
import client from '../utils/client';
import { getSingleBook } from './bookData';

// API CALLS FOR BOOKS

const endpoint = client.databaseURL;

const getBookDetails = (firebaseKey) new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObj) => {
     getSingleAuthor(bookObj.author_id).then((authorObject) =>
      resolve(...bookObj, authorObject));
      })
      .catch(reject);
});

export default getBookDetails;
