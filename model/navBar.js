export class NavBar {
  navElementHTML =
    `<nav class="navbar navbar-expand-lg christmas-bg-red">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">
              <img src="img/icon.png" class="christmas-tree" alt="christmas-tree">
              <b class="christmas-gold">Freddys</b>
              <b class="christmas-title">Feestwinkel</b>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link title active" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link title" href="view/product.html">Producten</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link title" href="view/contact.html">Over ons</a>
                  </li>
              </ul>
              <form class="d-flex search" role="search">
                  <input class="form-control me-2 search-title search-input" type="search">
                  <button class="btn btn-success" type="submit">Zoek</button>
              </form>
              <div class="d-flex">
                  <a href="view/inloggen.html">
                      <button type="button" class="btn button-title remove-button-effects">Login</button>
                  </a>
                  <a href="view/registreer.html">
                      <button type="button" class="btn btn-success button-title-white">
                          Account aanmaken
                      </button>
                  </a>
              </div>
          </div>
      </div>
  </nav>`;

  constructor() {
    // Check if a navbar element already exists
    const existingNavbar = document.querySelector('.navbar');
    if (existingNavbar) {
      // If a navbar element already exists, don't create a new one
      return;
    }

    // Create the navbar div
    const navbar = document.createElement('div');

    // Get the first child of the body element
    //! Creates a new div as the first child of the body element, but skips then the whole layout
    const firstChild = document.body.firstChild;

    // Insert the navbar div as the first child of the body element
    document.body.insertBefore(navbar, firstChild);

    // Insert the navbar HTML code
    navbar.innerHTML = this.navElementHTML;
  }
}
