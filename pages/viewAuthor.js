import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
        <hr>
        <p class="card-text bold">${obj.favorite ? '<span class="badge text-bg-warning">Favorite</span>' : ''}</p>
       <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
      </div>
    </div>`;

  // obj.authorBooks.map((book) => {
  //   domString += `
  //       <div class="card">
  //         <img class="card-img-top" src=${obj.authorBooks.image} alt=${obj.authorBooks.title} style="height: 400px;">
  //         <div class="card-body" style="height: 180px;">
  //           <h5 class="card-title">${obj.authorBooks.title}</h5>
  //             <p class="card-text bold">${obj.authorBooks.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.authorBooks.price}` : `$${obj.authorBooks.price}`}</p>
  //             <hr>
  //             <i class="btn btn-success fas fa-eye" id="view-book-btn--${obj.authorBooks.firebaseKey}"></i>
  //             <i id="edit-book-btn--${obj.authorBooks.firebaseKey}" class="fas fa-edit btn btn-info"></i>
  //             <i id="delete-book-btn--${obj.authorBooks.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  //         </div>
  //       </div>`;
  // });

  renderToDOM('#view', domString);
};

export default viewAuthor;
