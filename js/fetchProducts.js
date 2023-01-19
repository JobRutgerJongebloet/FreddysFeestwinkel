document.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelector('#products');

    async function fetchProducts(url) {
        let data = await fetch(url);
        let response = await data.json();

        // Product
        for (let i = 0; i < response.length; i++) {
            console.log(response[i].afbeelding);

            if (response[i].afbeelding != null) {
                var afbeelding = response[i].afbeelding;
            } else {
                var afbeelding = "img/items/christmas-sweater.jpg";
            }

            products.innerHTML += `
                <div class="filter-card col mb-3 all ${response[i].categorie}">
                    <div class="filter-card-item p-4 bg-light rounded">
                        <div class="filter-card-img rounded">
                            <img src="${afbeelding}" class="item-img" alt="">
                            <div class="filter-card-heart">
                                <img src="img/filter-icons/favourite.png" alt="favourite">
                            </div>
                        </div>
                        <div class="filter-card-title">${response[i].naam}</div>
                        <div class="filter-card-description">${response[i].omschrijving}</div>
                        <div class="filter-card-price">€ ${response[i].kosten}</div>
                    </div>
                </div>`;

        }
    };
    fetchProducts(baseURL + 'producten')
});