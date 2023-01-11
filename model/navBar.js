export class NavBar {
  navElementHTML =
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/view/product.html">product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/view/producttoevoegen.html">Product toevoegen</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/view/contact.html">contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/view/registreer.html">registreer</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
  </nav>`;

  showUsername(username) {
    // Get the element where the username will be displayed
    const usernameElement = document.querySelector('.navbar-username');
    if (usernameElement) {
      // If a username element already exists, update it
      usernameElement.innerHTML = username;
    } else {
      // If a username element doesn't exist, create one
      const newUsernameElement = document.createElement('div');
      newUsernameElement.classList.add('navbar-username');
      newUsernameElement.innerHTML = username;

      // Find the navbar element
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        // Append the new username element to the navbar
        navbar.appendChild(newUsernameElement);
      }
    }
  }

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
