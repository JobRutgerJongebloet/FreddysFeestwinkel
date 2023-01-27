export class NavBar {
  navElementHTML = `
    <nav class="d-flex">
        <div></div>
        <a class="align-self-center" href="#offcanvasExample" data-bs-toggle="offcanvas" aria-controls="offcanvasExample">
            <i class="link__icon icon fa-solid fa-bars white"></i>
        </a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header" style="background: darkgreen;">
                <h1 class="offcanvas-title white ps-4 white" id="offcanvasExampleLabel">categorieen</h1>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="canvasHTML">
                </div>
                <div class="dropdown d-flex">
                    <div class="dropdown d-flex hover" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="align-self-center link__icon fa-solid white fa-user"></i>
                        <b class="align-self-center cursive gold fontsize1" style="padding-left: 0.5rem;">account</b>
                    </div>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" href="/views/inloggen.html"
                                id="username">Inloggen</a>
                        </li>
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" href="/views/registreren.html"
                                id="role">Account aanmaken</a>
                        </li>
                    </ul>
                    <div></div>
                    <a href="/views/contact.html" class="nounderline align-self-center green hover ps-5">
                        <i class="link__icon fa-solid fa-phone white hover"></i>
                        <b class="align-self-center gold cursive fontsize1 ps-2">contact</b>
                    </a>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <a class="nav-link" href="/index.html">
                <img src="/images/navbar-icons/icon.png" class="kerstboom" alt="kerstboom">
                <a href="/index.html" class="align-self-center nav-link red cursive title-nav hover">freddys</a>
                <a href="/index.html" class="align-self-center nav-link gold cursive title-nav hover">feestwinkel</a>
                <a href="/index.html" class="align-self-center nav-link red cursive title-nav hover">.nl</a>
            </a>
        </div>
        <form role="search" id="searchNavBar" class="d-flex form-search-navbar">
            <input class="form-control search" type="search" placeholder="Vind hier je product..." aria-label="Search">
            <i class="align-self-center link__icon fa-solid fa-search"></i>
        </form>
        <div class="dropdown d-flex">
            <div class="dropdown d-flex hover" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="align-self-center link__icon fa-solid fa-user"></i>
                <b class="align-self-center white cursive fontsize1 ps-2">account</b>
            </div>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item fontsize1 black align-self-center" href="/views/inloggen.html"
                        id="username2">Inloggen</a>
                </li>
                <li>
                    <a class="dropdown-item fontsize1 black align-self-center" href="/views/registreren.html"
                        id="role2">Account aanmaken</a>
                </li>
            </ul>
        </div>
        <a href="favorieten.html" class="align-self-center hover ps-5"><i class="link__icon fa-regular fa-heart"></i></a>
        <div class="d-flex hover ps-5">
        
       <a class="nounderline align-self-center position-relative hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="link__icon fa-solid fa-shopping-cart">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" >0</span>
            </i>
        </a>
        <a class="nounderline align-self-center position-relative hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <b class="align-self-center white cursive fontsize1 ps-2">winkelwagen</b>
        </a>
        </div>
    </nav>

    <header class="d-flex" id="header"></header>`;

  navElementHTMLWINKELIER = `
    <nav class="d-flex">
        <div></div>
        <a class="align-self-center" href="#offcanvasExample" data-bs-toggle="offcanvas" aria-controls="offcanvasExample">
            <i class="link__icon icon fa-solid fa-bars white"></i></a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header" style="background: darkgreen;">
                <h1 class="offcanvas-title white ps-4 white" id="offcanvasExampleLabel">categorieen</h1>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="canvasHTML">
                </div>
                <div class="dropdown d-flex">
                    <div class="dropdown d-flex hover" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="align-self-center link__icon fa-solid white fa-user"></i>
                        <b class=" align-self-center cursive gold fontsize1" style="padding-left: 0.5rem;">account</b>
                    </div>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" href="/views/inloggen.html"
                                id="username">Inloggen</a>
                        </li>
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" href="/views/registreren.html"
                                id="role">Account aanmaken</a>
                        <li>
                            <a class="dropdown-item cursive fontsize1 align-self-center"
                                href="/views/producttoevoegen.html">product toevoegen</a>
                        </li>
                        <li>
                        <a class="dropdown-item fontsize1 align-self-center" href="/views/klanten.html"
                            id="role">Klanten page</a>
                        <li>
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" id="uitloggen">uitloggen</a>
                        </li>
                        
                    </ul>
                    <div></div>
                    <a href="/views/contact.html" class="nounderline align-self-center green hover ps-5">
                        <i class="link__icon fa-solid fa-phone white hover"></i>
                        <b class="align-self-center gold cursive fontsize1 ps-2">contact</b>
                    </a>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <a class="nav-link" href="/index.html">
                <img src="/images/navbar-icons/icon.png" class="kerstboom" alt="kerstboom">
                <a href="/index.html" class="align-self-center nav-link red cursive title-nav hover">freddys</a>
                <a href="/index.html" class="align-self-center nav-link gold cursive title-nav hover">feestwinkel</a>
                <a href="/index.html" class="align-self-center nav-link red cursive title-nav hover">.nl</a>
            </a>
        </div>
        <form role="search" id="searchNavBar" class="d-flex form-search-navbar">
            <input class="form-control search" type="search" placeholder="Vind hier je product..." aria-label="Search">
            <i class="align-self-center link__icon fa-solid fa-search"></i>
        </form>
        <div class="dropdown d-flex">
            <div class="dropdown d-flex hover" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="align-self-center link__icon fa-solid fa-user"></i>
                <b class=" align-self-center white cursive fontsize1 ps-2">account</b>
            </div>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item fontsize1 black align-self-center" href="/views/inloggen.html"
                        id="username2">Inloggen</a>
                </li>
                <li>
                    <a class="dropdown-item fontsize1 black align-self-center" href="/views/registreren.html"
                        id="role2">Account aanmaken</a>
                <li>
                    <a class="dropdown-item fontsize1 align-self-center" href="/views/producttoevoegen.html">
                        product toevoegen</a>
                </li>
                <li>
                <a class="dropdown-item fontsize1 align-self-center" href="/views/klanten.html"
                    id="role">Klanten page</a>
                <li>
                <li>
                    <a class="dropdown-item fontsize1 align-self-center" id="uitloggen2">uitloggen</a>
                </li>
            </ul>
        </div>
        <a href="favorieten.html" class="align-self-center hover ps-5"><i class="link__icon fa-regular fa-heart"></i></a>
        <div class="d-flex hover ps-5">
        <a class="nounderline align-self-center position-relative hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="link__icon fa-solid fa-shopping-cart">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" id="shoppingCartNumber">0</span>
            </i>
        </a>
        <a class="nounderline align-self-center position-relative hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <b class="align-self-center white cursive fontsize1 ps-2">winkelwagen</b>
        </a>
        </div>
    </nav>

    <header class="d-flex" id="header"></header>`;

  navElementHTMLKLANT = `
    <nav class="d-flex">
        <div></div>
        <a class="align-self-center" href="#offcanvasExample" data-bs-toggle="offcanvas" aria-controls="offcanvasExample">
            <i class="link__icon icon fa-solid fa-bars white"></i>
        </a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header" style="background: darkgreen;">
                <h1 class="offcanvas-title white ps-4 white" id="offcanvasExampleLabel">categorieen</h1>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div id="canvasHTML"></div>
                <div class="dropdown d-flex">
                    <div class="dropdown d-flex hover" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="align-self-center link__icon fa-solid white fa-user"></i>
                        <b class=" align-self-center cursive gold fontsize1" style="padding-left: 0.5rem;">account</b>
                    </div>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" href="/views/inloggen.html"
                                id="username">Inloggen</a>
                        </li>
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" href="/views/registreren.html"
                                id="role">Account aanmaken</a>
                        <li>
                            <a class="dropdown-item fontsize1 align-self-center" id="uitloggen">uitloggen</a>
                        </li>
                    </ul>
                    <div></div>
                    <a href="/views/contact.html" class="nounderline align-self-center green hover ps-5">
                        <i class="link__icon fa-solid fa-phone white hover"></i>
                        <b class="align-self-center gold cursive fontsize1 ps-2">contact</b>
                    </a>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <a class="nav-link" href="/index.html">
                <img src="/images/navbar-icons/icon.png" class="kerstboom" alt="kerstboom">
                <a href="/index.html" class="align-self-center nav-link red cursive title-nav hover">freddys</a>
                <a href="/index.html" class="align-self-center nav-link gold cursive title-nav hover">feestwinkel</a>
                <a href="/index.html" class="align-self-center nav-link red cursive title-nav hover">.nl</a>
            </a>
        </div>
        <form role="search" id="searchNavBar" class="d-flex form-search-navbar">
            <input class="form-control search" type="search" placeholder="Vind hier je product..." aria-label="Search">
            <i class="align-self-center link__icon fa-solid fa-search"></i>
        </form>
        <div class="dropdown d-flex">
            <div class="dropdown d-flex hover" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="align-self-center link__icon fa-solid fa-user"></i>
                <b class=" align-self-center white cursive fontsize1 ps-2">account</b>
            </div>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item fontsize1 black align-self-center" href="/views/inloggen.html"
                        id="username2">Inloggen</a>
                </li>
                <li>
                    <a class="dropdown-item fontsize1 black align-self-center" href="/views/registreren.html"
                        id="role2">Account aanmaken</a>
                <li>
                    <a class="dropdown-it fontsize1 align-self-center" id="uitloggen2">uitloggen</a>
                </li>
            </ul>
        </div>
        <a href="favorieten.html" class="align-self-center hover ps-5"><i class="link__icon fa-regular fa-heart"></i></a>
        <div class="d-flex hover ps-5"> 
        <a class="nounderline align-self-center position-relative hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="link__icon fa-solid fa-shopping-cart">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" id="shoppingCartNumber">0</span>
            </i>
        </a>
        <a class="nounderline align-self-center position-relative hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <b class="align-self-center white cursive fontsize1 ps-2">winkelwagen</b>
        </a>
        </div>
    </nav>

    <header class="d-flex" id="header"></header>`;

  updateNavBar() {

    let response = JSON.parse(localStorage.getItem("response"));

    const nameElement = document.getElementById('username');
    const nameElement2 = document.getElementById('username2');
    const roleElement = document.getElementById('role');
    const roleElement2 = document.getElementById('role2');
    nameElement.innerHTML = response.naam;
    nameElement2.innerHTML = response.naam;
    roleElement.innerHTML = response.role;
    roleElement2.innerHTML = response.role;
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
        console.log("uitloggen")
        localStorage.clear();
        location.reload();
      });
    }
    const uitloggen2 = document.getElementById('uitloggen2');
    if (uitloggen2 != null) {
      uitloggen2.addEventListener('click', (evt) => {
        console.log("uitloggen")
        localStorage.clear();
        location.reload();
      });
    }

    var heart = document.getElementsByClassName("fa-heart")[0];
    heart.addEventListener("mouseover", function () {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");
    });
    heart.addEventListener("mouseout", function () {
      heart.classList.remove("fa-solid");
      heart.classList.add("fa-regular");
    });

    var user = document.getElementsByClassName("fa-user")[0];
    user.addEventListener("mouseover", function () {
      user.classList.remove("fa-solid");
      user.classList.add("fa-regular");
    });
    user.addEventListener("mouseout", function () {
      user.classList.remove("fa-regular");
      user.classList.add("fa-solid");
    });

    var user = document.getElementsByClassName("fa-user")[1];
    user.addEventListener("mouseover", function () {
      user.classList.remove("fa-solid");
      user.classList.add("fa-regular");
    });
    user.addEventListener("mouseout", function () {
      user.classList.remove("fa-regular");
      user.classList.add("fa-solid");
    });

    updateCanvas();
    async function updateCanvas() {
      try {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(baseURL + "product/categorieen", requestOptions);
        const result = await response.json();
        const header = document.getElementById("canvasHTML");

        result.forEach(category => {
          const node = document.createElement("div");
          node.classList.add("dropdown");
          node.classList.add("padding");

          const button = document.createElement("button");
          button.classList.add("btn");
          button.classList.add("btn-danger");
          button.classList.add("btn-header");
          button.classList.add("dropdown");
          button.setAttribute("type", "button");
          button.setAttribute("data-bs-toggle", "dropdown");
          button.setAttribute("aria-expanded", "false");
          button.style.zIndex = "9";
          button.innerHTML = category;
          node.appendChild(button);

          const ul = document.createElement("ul");
          ul.classList.add("dropdown-menu");
          node.appendChild(ul);

          header.appendChild(node);

          const fakeSubCategories = ["subcategory1", "subcategory2", "subcategory3"];
          fakeSubCategories.forEach(subcategory => {
            const li = document.createElement("li");

            const anchor = document.createElement("a");
            anchor.href = "/views/producten.html";
            anchor.style.paddingLeft = "10px";
            anchor.style.paddingRight = "10px";
            anchor.classList.add("nounderline");
            anchor.classList.add("white");
            anchor.classList.add("cursive");
            anchor.innerHTML = subcategory;
            li.appendChild(anchor);

            ul.appendChild(li);
          });

          button.addEventListener("click", function () {
            localStorage.setItem("category", category);
          });
        });

      } catch (error) {
        console.log('error', error);
      }
    }

    async function fetchCategories() {
      try {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        const response = await fetch(baseURL + "product/categorieen", requestOptions);
        const result = await response.json();
        const header = document.getElementsByTagName("header")[0];

        result.forEach(category => {
          const node = document.createElement("div");
          node.classList.add("dropdown");
          node.classList.add("padding");

          const button = document.createElement("button");
          button.classList.add("btn");
          button.classList.add("btn-danger");
          button.classList.add("btn-header");
          button.classList.add("dropdown");
          button.setAttribute("type", "button");
          button.setAttribute("data-bs-toggle", "dropdown");
          button.setAttribute("aria-expanded", "false");
          button.style.zIndex = "9";
          button.innerHTML = category;
          node.appendChild(button);

          const ul = document.createElement("ul");
          ul.classList.add("dropdown-menu");
          node.appendChild(ul);

          header.appendChild(node);

          const fakeSubCategories = ["subcategory1", "subcategory2", "subcategory3"];
          fakeSubCategories.forEach(subcategory => {
            const li = document.createElement("li");

            const anchor = document.createElement("a");
            anchor.href = "/views/producten.html";
            anchor.style.paddingLeft = "10px";
            anchor.style.paddingRight = "10px";
            anchor.style.paddingRight = "10px";
            anchor.classList.add("nounderline");
            anchor.classList.add("white");
            anchor.classList.add("cursive");
            anchor.innerHTML = subcategory;
            li.appendChild(anchor);

            ul.appendChild(li);
          });

          button.addEventListener("click", function () {
            localStorage.setItem("category", category);
          });
        });

      } catch (error) {
        console.log('error', error);
      }
    }

    async function addSearchBar(header) {
      header.innerHTML = `
        <form role="search" class="d-flex form-search-header">
            <input class="form-control search" type="search" placeholder="Vind hier je product..." aria-label="Search">
            <i class="align-self-center link__icon icon fa-solid fa-search"></i>
        </form>`;
      header.style.paddingLeft = "0px";
      header.style.paddingRight = "20px";
    }

    function updateInnerHTML(e) {
      const searchNavBar = document.getElementById("searchNavBar");
      const header = document.getElementById("header");
      if (e.matches) {
        searchNavBar.innerHTML = "";
        searchNavBar.style.padding = "0px";

        addSearchBar(header);
      } else {
        searchNavBar.innerHTML = `
          <input class="form-control search" type="search" placeholder="Vind hier je product..." aria-label="Search">
          <i class="align-self-center link__icon icon fa-solid fa-search"></i>`;
        searchNavBar.style.paddingLeft = "1rem"

        header.innerHTML = "";
        header.style.paddingLeft = "160px";
        header.style.paddingRight = "160px";
        fetchCategories();
      }
    }

    function debounce(func, wait) {
      let timeout;
      return function () {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      };
    }

    if (window.matchMedia) {
      let debouncedUpdate = debounce((e) => updateInnerHTML(e), 200);
      let mq = window.matchMedia("(max-width: 1200px)");
      mq.addListener(debouncedUpdate);
      debouncedUpdate(mq);
    }
  }

}
