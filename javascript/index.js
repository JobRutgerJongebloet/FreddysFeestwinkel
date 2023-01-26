import { NavBar } from '../models/navBar.js'
import { Favicon } from '../models/favicon.js'
import { Footer } from '../models/footer.js'

// var navbar = new NavBar();
var footer = new Footer();
var favicon = new Favicon();

// let response = JSON.parse(localStorage.getItem("response"));
// if (response != null) {
//     navbar.showUsername();
//     navbar.showRole();
// }

document.addEventListener('DOMContentLoaded', function () {
    fetchProducts();
});

async function fetchProducts() {
    let data = await fetch(baseURL + 'producten');
    let response = await data.json();

    // Product
    for (let i = 0; i < response.length; i++) {
        // console.log(response[i].afbeelding);

        if (response[i].afbeelding != null) {
            var afbeelding = response[i].afbeelding;
        } else {
            var afbeelding = "../images/products/rodefeestneus.jpg"
        }
        let products = document.querySelector('#products');

        products.innerHTML += `
            <div class="filter-card col mb-3 all ${response[i].feestdag} ${response[i].categorie}">
                <div class="filter-card-item p-4 bg-light rounded">
                    <div class="filter-card-img rounded">
                        <img src="${afbeelding}" class="item-img" alt="">
                        <div class="filter-card-heart">
                            <img src="images/filter-icons/favourite.png" alt="favourite">
                        </div>
                    </div>
                    <div class="filter-card-title">${response[i].naam}</div>
                    <div class="filter-card-description">${response[i].beschrijving}</div>
                    <div class="filter-card-price">€ ${response[i].kosten}</div>
                </div>
            </div>`;

    }
};

// Document.querySelectorAll()
const theme = document.querySelectorAll('.theme');

// Load events after the element has finished loading
window.onload = function () {
    for (let i = 0; i < theme.length; i++) {
        theme[i].addEventListener('click', filterThemes.bind(this, theme[i]));
    }
}

async function filterThemes(item) {
    changeActivePosition(item);

    const allThemes = document.querySelectorAll('.all');

    for (let i = 0; i < allThemes.length; i++) {
        if (allThemes[i].classList.contains(item.attributes.id.value)) {
            allThemes[i].style.display = "block";
        } else {
            allThemes[i].style.display = "none";
        }
    }
}

async function changeActivePosition(activeItem) {
    // Remove active attribute from the selected input
    for (let i = 0; i < theme.length; i++) {
        await theme[i].classList.remove('active');
    }

    // Add active attribute to the selected input
    await activeItem.classList.add('active');

    // Getting attributes from the active input
    const active = activeItem;
    let text = active.getAttribute("class");

    // Splitting the attributes into elements
    var words = text.split(" ");

    for (var i = 0; i < words.length - 1; i++) {
        if (words[i].con)
            words[i] += "";
    }

    // Get selected theme from the input.class.attributes
    var validateTheme = words.filter(function (word) {
        const selectedTheme = word.includes("-feestdag");
        return selectedTheme;
    });

    // Convert an Array to a String
    var convertSelectedTheme = validateTheme.toString();
}