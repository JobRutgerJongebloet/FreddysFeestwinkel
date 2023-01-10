document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('#products');

    async function fetchProducts(url) {
        let data = await fetch(url);
        let response = await data.json();

        // Product
        for (let i = 0; i < response.length; i++) {
            products.innerHTML += `
                <div class="filter-card col mb-3 all ${response[i].categorie}">
                    <div class="filter-card-item p-4 bg-light rounded">
                        <div class="filter-card-img rounded">
                            <img src="img/items/christmas-sweater.jpg" class="item-img" alt="">
                            <div class="filter-card-heart">
                                <img src="img/filter-icons/favourite.png" alt="favourite">
                            </div>
                        </div>
                        <div class="filter-card-title">${response[i].naam}</div>
                        <div class="filter-card-description">${response[i].beschrijving}</div>
                        <div class="filter-card-price">€ 25</div>
                    </div>
                </div>`;
        }
    };
    fetchProducts(baseURL + 'producten')
});