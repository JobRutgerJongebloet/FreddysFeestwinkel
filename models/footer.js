export class Footer {
    footerElementHTML =
        `<footer class=" footer py-1 my-0">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="index.html" 
        class="nav-link title">Home</a></li>
        <li class="nav-item"><a href="views/product.html"
        class="nav-link title">Producten</a></li>
        <li class="nav-item"><a href="views/contact.html"
        class="nav-link title">Contact</a></li>
        <li class="nav-item"><a href="views/inloggen.html"
        class="nav-link title">Login</a></li>
        <li class="nav-item"><a href="views/registreren.html"
        class="nav-link title" px-2">Account aanmaken</a></li>
    </ul>
    <p class="text-center">&copy; 2023 Freddys Feestwinkel</p>
</footer>`;

    constructor() {
        var link = document.createElement("link");
        link.href = "/css/footer.css";
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


        // Check if a footer element already exists
        const existingFooter = document.querySelector('.footer');
        if (existingFooter) {
            existingFooter.innerHTML = this.navElementHTML;
            return;
        }

        const footer = document.createElement('div');
        const container = document.querySelector('.container-fluid');

        // Append the footer to the container
        if (container) {
            container.appendChild(footer, container.firstChild);
            footer.innerHTML = this.footerElementHTML;
            return
        }

        // Append the footer to the top of the page
        const firstChild = document.body.firstChild;
        document.body.appendChild(footer, firstChild);
        footer.innerHTML = this.footerElementHTML;
    }
}
