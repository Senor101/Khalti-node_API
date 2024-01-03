function checkIsLoggedIn() {
    const cookies = document.cookie.split(';');
    // console.log(cookies);
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'isLoggedIn' && value.trim() === 'true') {
            return true;
        }
    }
    return false;
}

if(!checkIsLoggedIn()){
    window.location.href = '/login'
}

function redirectToPayment(productName, productPrice, productId){
    window.location.href = `http://localhost:8000/payment?name=${productName}&price=${productPrice}&pid=${productId}`
}
// Fetch products from the backend API using Axios
axios.get('http://localhost:8000/api/v1/products')
    .then(response => {
        // Handle the received products data
        const products = response.data;

        // Select the productList div to display products
        const productListDiv = document.getElementById('productList');

        // Iterate through each product and create HTML elements to display them
        products.data.forEach(product => {
            // Create a div for each product
            const productDiv = document.createElement('div');
            productDiv.className = 'bg-white p-6 rounded-lg shadow-lg';

            // Create elements to display product information
            const productName = document.createElement('h2');
            productName.className = 'text-xl font-bold';
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.className = 'text-sm text-gray-600';
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.className = 'text-lg font-bold mt-2';
            productPrice.textContent = `$${product.price}`;

            // Create a purchase button
            const purchaseButton = document.createElement('button');
            purchaseButton.className = 'block bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 mt-4';
            purchaseButton.textContent = 'Purchase';

            purchaseButton.addEventListener('click', () => {
                redirectToPayment(product.name, product.price, product.id)
            })

            // Append elements to the product div
            productDiv.appendChild(productName);
            productDiv.appendChild(productDescription);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(purchaseButton);

            // Append the product div to the productList container
            productListDiv.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });