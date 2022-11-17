import { getBooks, booksOnSale } from '../api/bookData';
import { signOut } from '../utils/auth';
import { showBooks } from '../pages/books';
import { getAuthors, getFavAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    console.warn('CLICKED SALE BOOKS');
    booksOnSale().then(showBooks);
  });

  // Done: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });

  //  STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // FIXME: 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function

  // Done: ALL AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then(showAuthors);
  });

  // FAVORITE AUTHORS
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getFavAuthors().then(showAuthors);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
