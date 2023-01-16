let respNavBar = document.querySelector('#respNavBar');
navElementHTML = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/img/icon.png" class="christmas-tree" alt="christmas-tree">
                <b class="christmas-gold">Freddys</b>
                <b class="christmas-title">Feestwinkel</b>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                    <a class="nav-item nav-link title" aria-current="page" href="/index.html">Home</a>
                    <a class="nav-item nav-link title" href="product.html">Producten</a>
                    <a class="nav-item nav-link title" href="contact.html">Over ons</a>
                </div>
                <form class="d-flex" id="search">
                    <div class="input-group">
                        <input class="form-control me-2 search-title search-input">
                        <button type="button" class="btn btn-success">Zoek</button>
                    </div>
                </form>
                `
    +
    `
                <div class="navbar-nav" id="authentication">
                    <a href="inloggen.html" class="nav-item nav-link">
                        <button type="button" class="btn button-title remove-button-effects">
                            Login
                        </button>
                    </a>
                    <a href="registreer.html" class="nav-item nav-link">
                        <button type="button" class="btn btn-success button-title-white">
                            Account aanmaken
                        </button>
                    </a>
                </div>
                `
    +
    `
            </div>
        </div>
    </nav>
    `;

respNavBar.innerHTML = navElementHTML;
