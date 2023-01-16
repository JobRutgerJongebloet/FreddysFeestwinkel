export class NavBar {
  navElementHTML =
    `	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<img src="/img/icon.png" class="christmas-tree" alt="christmas-tree">
			<b class="gold">Freddys</b>
      <b class="green">Feestwinkel</b>
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
						<a class="nav-link title" href="/view/contact.html">Contact</a>
					</li>
				</ul>
				<form class="d-flex search" role="search">
					<input class="form-control me-2 search-input" type="search" placeholder="Search"
						aria-label="Search">
					<button class="btn btn-success" type="submit">Search</button>
				</form>
				<a href="/view/contact.html"><i class="link__icon icon fa-regular fa-heart"></i></a>
				<a href="/view/contact.html"><i class="link__icon icon fa-solid fa-shopping-cart"></i></a>
				<a href="view/inloggen.html"><b class="title inloggen">Inloggen</b></a>
				<a href="view/registreer.html">
					<button type="button" class="btn btn-success account-aanmaken">
						Account aanmaken
					</button>
				</a>
			</div>
		</div>
	</nav>`;

  showUsername() {

    let response = JSON.parse(localStorage.getItem("response"));

    const usernameElement = document.querySelector('.navbar-username');
    if (!usernameElement) {
      // Update the text of the "Inloggen" link to the passed in username
      var test = document.querySelector('.title.inloggen');
      console.log(test);
      test.innerHTML = response.naam;
      // Remove the "Account aanmaken" button
      document.querySelector('.account-aanmaken').remove();
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
