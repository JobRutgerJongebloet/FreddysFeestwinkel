export class NavBar {
  navElementHTML =
    `<nav class="navbar navbar-expand-lg bg-light">
        <img src="/images/navbar-icons/icon.png" class="christmas-tree" alt="christmas-tree">
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
              <a class="nav-link title" href="/views/producten.html">Producten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/contact.html">Contact</a>
            </li>
          </ul>
         
          <a href="/views/favorieten.html"><i class="link__icon icon fa-regular fa-heart"></i></a>
          <a href="/views/winkelwagen.html"><i class="link__icon icon fa-solid fa-shopping-cart"></i></a>
          <a href="/views/inloggen.html"><b class="title inloggen">Inloggen</b></a>
          <a href="/views/registreren.html">
            <button type="button" class="btn btn-success account-aanmaken">
              Account aanmaken
            </button>
          </a>
        
      </div>
    </nav>`;

  navElementHTMLWINKELIER =
    `<nav class="navbar navbar-expand-lg bg-light">
        <img src="/images/navbar-icons/icon.png" class="christmas-tree" alt="christmas-tree">
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
              <a class="nav-link title" href="/views/producten.html">Producten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/producttoevoegen.html">Product toevoegen</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/klanten.html">Klanten pagina</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/contact.html">Contact</a>
            </li>
          </ul>
         
          <a href="/views/favorieten.html"><i class="link__icon icon fa-regular fa-heart"></i></a>
          <a href="/views/winkelwagen.html"><i class="link__icon icon fa-solid fa-shopping-cart"></i></a>
          <a href="/views/inloggen.html"><b class="title inloggen">Inloggen</b></a>
          <a href="/views/registreren.html">
            <button type="button" class="btn btn-success account-aanmaken">
              Account aanmaken
            </button>
          </a>
        
      </div>
    </nav>`;

  navElementHTMLKLANT =
    `<nav class="navbar navbar-expand-lg bg-light">
        <img src="/images/navbar-icons/icon.png" class="christmas-tree" alt="christmas-tree">
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
              <a class="nav-link title" href="/views/producten.html">Producten</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/producttoevoegen.html">Product toevoegen</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/klanten.html">Klanten pagina</a>
            </li>
            <li class="nav-item">
              <a class="nav-link title" href="/views/contact.html">Contact</a>
            </li>
          </ul>
         
          <a href="/views/favorieten.html"><i class="link__icon icon fa-regular fa-heart"></i></a>
          <a href="/views/winkelwagen.html"><i class="link__icon icon fa-solid fa-shopping-cart"></i></a>
          <a href="javascript:void(0)"><b class="title uitloggen" id="uitloggen">Uitloggen</b></a>
          <a href="/views/inloggen.html"><b class="title inloggen">Inloggen</b></a>
          <a href="/views/registreren.html">
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
    document.getElementsByTagName("head")[0].appendChild(link);
    const navbar = document.createElement('div');
    if (localStorage.getItem("response") != null) {
      let response = JSON.parse(localStorage.getItem("response"));
      if (response.role == "WINKELIER") navbar.innerHTML = this.navElementHTMLWINKELIER;
      else navbar.innerHTML = this.navElementHTMLKLANT;
    } else navbar.innerHTML = this.navElementHTML;
    // Append the navbar to the top of the page
    const firstChild = document.body.firstChild;
    document.body.insertBefore(navbar, firstChild);

    const uitloggen = document.getElementById('uitloggen');
    if (uitloggen != null) {
      uitloggen.addEventListener('click', (evt) => {
        localStorage.clear();
        location.reload();
      });
    }
  }

}
