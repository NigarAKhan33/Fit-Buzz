var products = [
    {
        "id": 1,
        "name": "Elliptical Trainer",
        "ratings": 4.5,
        "price": 79.99,
        "offers": "15% off for a limited time",
        "image": "images/EllipticalTrainer.jpg",
        "category": "Fitness Machine",
        "description": "The Elliptical Trainer stands out as an adaptable fitness machine designed to deliver a low-impact, holistic workout experience. Combining elements of running, cycling, and stair climbing, it caters to individuals seeking cardiovascular improvement while minimizing stress on joints."
    },
    {
        "id": 2,
        "name": "Adjustable Dumbbells Set",
        "ratings": 4.8,
        "price": 199.99,
        "offers": "5% off for a limites time",
        "image": "images/Dumbbell.jpg",
        "category": "Fitness Machine",
        "description": "The Adjustable Dumbbell Set emerges as a space-efficient and personalized weightlifting solution. With its customizable weight options, this set facilitates seamless adjustments, making it an ideal choice for your diverse strength training exercises. Its design is particularly advantageous for home gyms or settings with limited space."
    },
    {
        "id": 3,
        "name": "Stationary Bike",
        "ratings": 4.6,
        "price": 92.00,
        "offers": "Buy one, get one 50% off",
        "image": "images/StationaryBike.jpg",
        "category": "Accessories",
        "description": "The Stationary Bike ranks among the favored cardio machines of our customers, replicating the rhythmic cycling motion. Delivering an efficient cardiovascular workout with low impact, it proves excellent for enhancing leg strength, endurance, and overall fitness. Its stationary nature makes it a convenient choice for indoor exercise."
    },
    {
        "id": 4,
        "name": "TreadMill",
        "ratings": 4.7,
        "price": 449.99,
        "offers": "10% off with code FIT10",
        "image": "images/treadmill.jpg",
        "category": "Cardio Machine",
        "description": "The Treadmill remains a classic cardio machine, offering the convenience of walking, jogging, or running within indoor confines. With adjustable incline and speed settings, it serves as a versatile tool for effective cardiovascular exercise, calorie burning, and overall endurance improvement."
    },
    {
        "id": 5,
        "name": "Weight Bench",
        "ratings": 4.4,
        "price": 39.99,
        "offers": "10% off till midnight",
        "image": "images/WeightBench.jpg",
        "category": "Fitness Machine",
        "description": "The Weight Bench, a fundamental component of strength training, provides a stable foundation for a variety of exercises. From bench presses to dumbbell workouts, its adaptability and adjustability contribute to targeted muscle engagement. This makes it an indispensable asset for a comprehensive strength training regimen."
    },
    {
        "id": 6,
        "name": "Resistance Bands",
        "ratings": 4.5,
        "price": 79.99,
        "offers": "15% off for a limited time",
        "image": "images/rbands.jpg",
        "category": "Fitness Machine",
        "description": "The Resistance Bands, characterized by their flexibility and portability, will add resistance to strength your training routines. These lightweight bands, available in various resistance levels, offer versatility for workouts at home or on the go. Their scalability caters to users of diverse fitness levels, contributing to a well-rounded fitness experience."
    }];

document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.querySelector('.products');
    populateData(products);

    document.getElementById('searchInput').addEventListener('input', function () {

        const query = searchInput.value.toLowerCase();
        const searchedProducts = products.filter(product => product.name.toLowerCase().includes(query));
        populateData(searchedProducts);

    });
    document.querySelector('.products').addEventListener('click', function (event) {
        // Check if the clicked element is a "View Details" button
        if (event.target.classList.contains('buy--btn')) {
            // Extract the product ID from the data-product-id attribute
            const productId = parseInt(event.target.getAttribute('data-product-id')) || 0;

            // Redirect to the product details page with the corresponding product ID
            window.location.href = 'product_details.html?id=' + productId;
        }
    });

    function populateData(products) {
        productContainer.innerHTML = '';
        products.forEach(createItem)
    }
    function createItem(product) {
        var el =
            '<div class="equipment">' +
            '<div class="equipment-item">' +
            '<img src="' + product.image + '" class="card-img-top">' +
            '<h2 class="card-title">' + product.name + '</h1>' +
            '<h3 class="card-text">' + product.ratings + ' out of 5</h3>' +
            '<h2 class="card-text">' + "$" + product.price + '</h2>' +
            '<h2 class="card-text offer">' + product.offers + '</h2>' +
            '<div class="equipment"><button class="buy--btn" data-product-id=' + product.id + ' onclick="viewDetails(' + product.id + ') ">View Details</button></div>' +
            '</div>';

        productContainer.innerHTML += el
    }
    function viewDetails(productId) {
        // Redirect to the product details page with the corresponding product ID
        window.location.href = 'product_details.html?id=' + productId;
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Fetch product details using the product ID passed in from the main page
    const productId = getProductIdFromUrl();
    const product = getProductDetails(productId);

    // Display product details on the page
    displayProductDetails(product);


});

function getProductIdFromUrl() {
    // Extract the product ID from the URL (you might need to adjust this based on your URL structure)
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 0;
}

function getProductDetails(productId) {
    // Fetch product details from the products array based on the product ID
    return products.find(product => product.id === productId);
}

function displayProductDetails(product) {
    // Display product details on the page as needed
    if (product) {
        // Display product name
        const productNameElement = document.getElementById('productName');
        productNameElement.textContent = product.name;

        // Display product ratings
        const productRatingsElement = document.getElementById('productRatings');
        productRatingsElement.textContent = 'Ratings: ' + product.ratings + ' out of 5';

        // Display product price
        const productPriceElement = document.getElementById('productPrice');
        productPriceElement.textContent = 'Price: $' + product.price;

        // Display product offers
        const productOffersElement = document.getElementById('productOffers');
        productOffersElement.textContent = 'Offers: ' + product.offers;

        // Display product category
        const productCategoryElement = document.getElementById('productCategory');
        productCategoryElement.textContent = 'Category: ' + product.category;

        // Display product description
        const productDescriptionElement = document.getElementById('productDescription');
        productDescriptionElement.textContent = 'Description: ' + product.description;

        // Add more code to display other product details as needed
        const productImageElement = document.getElementById('productImage');
        productImageElement.src = product.image;
    }
}

function goBack() {
    window.history.back();
}

function reserveEquipment() {
    // Redirect to the reservation page
    window.location.href = 'reservation.html'; // Replace with your reservation page URL
}






// JavaScript function to go back to the Create Account page
function goBack() {
    window.location.href = 'home.html';
}
