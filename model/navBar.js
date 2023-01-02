export class NavBar {
  navElementHTML =
    `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/view/contact.html">contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/view/product.html">product</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" >contact</a></li>
              <li><a class="dropdown-item" >Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" >Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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
    const firstChild = document.body.firstChild;

    // Insert the navbar div as the first child of the body element
    document.body.insertBefore(navbar, firstChild);

    // Insert the navbar HTML code
    navbar.innerHTML = this.navElementHTML;
  }
}
