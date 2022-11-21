import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  let domString = `
  <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${obj.first_name} ${obj.last_name}</h2>
          <h4>${obj.favorite ? '<span class="badge text-bg-warning">Favorite</span>' : ''}</h4>
          <a href="mailto:${obj.email}">${obj.email}</a>
          <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
        </div>
      </div>
    </div>
  </div>`;

  obj.authorBooksArr.map((book) => {
    domString += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <div class="card">
          <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${book.title}</h5>
              <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
              <hr>
              <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}"></i>
              <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>`;
    return renderToDOM('#view', domString);
  });
};

export default viewAuthor;
