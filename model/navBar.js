export class NavBar {
  navElementHTML =
    `<nav class="navbar navbar-expand-lg bg-light">
        <img src="/img/icon.png" class="christmas-tree" alt="christmas-tree">
        <b class="gold">Freddys</b>
        <b class="green">Feestwinkel</b>
        
        <form class="d-flex search" role="search">
        <input class="form-control me-2 search-input" type="search" placeholder="Search"
          aria-label="Search">
        <button class="btn btn-success" type="submit">Search</button>
      </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link title" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/view/product.html">Producten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/view/contact.html">Contact</a>
            </li>
          </ul>
         
          <a href="/view/contact.html"><i class="link__icon icon fa-regular fa-heart"></i></a>
          <a href="/view/contact.html"><i class="link__icon icon fa-solid fa-shopping-cart"></i></a>
          <a href="/view/inloggen.html"><b class="title inloggen">Inloggen</b></a>
          <a href="/view/registreer.html">
            <button type="button" class="btn btn-success account-aanmaken">
              Account aanmaken
            </button>
          </a>
        
      </div>
    </nav>`;

  navElementHTMLWINKELIER =
    `<nav class="navbar navbar-expand-lg bg-light">
        <img src="/img/icon.png" class="christmas-tree" alt="christmas-tree">
        <b class="gold">Freddys</b>
        <b class="green">Feestwinkel</b>
        
        <form class="d-flex search" role="search">
        <input class="form-control me-2 search-input" type="search" placeholder="Search"
          aria-label="Search">
        <button class="btn btn-success" type="submit">Search</button>
      </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link title" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/view/product.html">Producten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/view/producttoevoegen.html">Product toevoegen</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/view/klanten.html">Klanten pagina</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/view/contact.html">Contact</a>
            </li>
          </ul>
         
          <a href="/view/contact.html"><i class="link__icon icon fa-regular fa-heart"></i></a>
          <a href="/view/contact.html"><i class="link__icon icon fa-solid fa-shopping-cart"></i></a>
          <a href="/view/inloggen.html"><b class="title inloggen">Inloggen</b></a>
          <a href="/view/registreer.html">
            <button type="button" class="btn btn-success account-aanmaken">
              Account aanmaken
            </button>
          </a>
        
      </div>
    </nav>`;

  showUsername() {

    let response = JSON.parse(localStorage.getItem("response"));

    const usernameElement = document.querySelector('.navbar-username');
    if (!usernameElement) {
      // Update the text of the "Inloggen" link to the passed in username
      var inloggenHTML = document.querySelector('.inloggen');
      inloggenHTML.innerHTML = response.naam;
    }
  }

  showRole() {

    let response = JSON.parse(localStorage.getItem("response"));

    const roleElement = document.querySelector('.navbar-role');
    if (!roleElement) {
      // Update the text of the "Inloggen" link to the passed in username
      var inloggenHTML = document.querySelector('.account-aanmaken');
      inloggenHTML.innerHTML = response.role;
    }
  }

  constructor() {
    var link = document.createElement("link");
    link.href = "/css/navbar.css";
    link.type = "text/css";
    link.rel = "stylesheet";

    // Check if the stylesheet is already added
    var links = document.getElementsByTagName("link");
    var alreadyAdded = false;
    for (var i = 0; i < links.length; i++) {
      if (links[i].href == link.href && links[i].type == link.type && links[i].rel == link.rel) {
        alreadyAdded = true;
        break;
      }
    }

    // Append the stylesheet to the head if it's not already added
    if (!alreadyAdded) {
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    if (localStorage.getItem("response") != null) {
      let response = JSON.parse(localStorage.getItem("response"));
      if (response.role == "WINKELIER") {
        // Check if a navbar element already exists
        const existingNavbar = document.querySelector('.navbar');
        if (existingNavbar) {
          // If a navbar element already exists, don't create a new one
          existingNavbar.innerHTML = navElementHTMLWINKELIER;
          return;
        }
        const navbar = document.createElement('div');
        const container = document.querySelector('.container-fluid');

        // Append the navbar to the container
        if (container) {
          container.insertBefore(navbar, container.firstChild);
          navbar.innerHTML = this.navElementHTMLWINKELIER;
          return
        }

        // Append the navbar to the top of the page
        const firstChild = document.body.firstChild;
        document.body.insertBefore(navbar, firstChild);
        navbar.innerHTML = this.navElementHTMLWINKELIER;
      }
       // Check if a navbar element already exists
       const existingNavbar = document.querySelector('.navbar');
       if (existingNavbar) {
         existingNavbar.innerHTML = this.navElementHTML;
         return;
       }
 
       const navbar = document.createElement('div');
       const container = document.querySelector('.container-fluid');
 
       // Append the navbar to the container
       if (container) {
         container.insertBefore(navbar, container.firstChild);
         navbar.innerHTML = this.navElementHTML;
         return
       }
 
       // Append the navbar to the top of the page
       const firstChild = document.body.firstChild;
       document.body.insertBefore(navbar, firstChild);
       navbar.innerHTML = this.navElementHTML;
    }
    else {
      // Check if a navbar element already exists
      const existingNavbar = document.querySelector('.navbar');
      if (existingNavbar) {
        existingNavbar.innerHTML = this.navElementHTML;
        return;
      }

      const navbar = document.createElement('div');
      const container = document.querySelector('.container-fluid');

      // Append the navbar to the container
      if (container) {
        container.insertBefore(navbar, container.firstChild);
        navbar.innerHTML = this.navElementHTML;
        return
      }

      // Append the navbar to the top of the page
      const firstChild = document.body.firstChild;
      document.body.insertBefore(navbar, firstChild);
      navbar.innerHTML = this.navElementHTML;
    }
  }
}
