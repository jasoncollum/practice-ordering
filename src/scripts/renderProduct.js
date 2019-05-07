// Render product to DOM
import createReviews from "./createReviews";
import API from "./db-calls";

const displayContainer = document.querySelector('.output');

function renderProduct(product) {
    const card = document.createElement('div');
    card.className = 'card';

    const productBtn = document.createElement('button');
    productBtn.textContent = 'Reviews';
    productBtn.setAttribute('id', `product-btn--${product.id}`)

    const name = document.createElement('h2');
    const desc = document.createElement('p');
    const price = document.createElement('p');
    const quantity = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = product.name;
    desc.textContent = product.description;
    price.textContent = `$${product.price}`;
    quantity.textContent = `Quantity: ${product.quantity}`;
    image.src = product.image;

    card.append(name, desc, price, quantity, image, productBtn);

    // Render product to DOM
    displayContainer.append(card);

    // Add reviews and render to DOM
    // API.getReviews(product.id).then(product => {
    //     let reviewsDiv = createReviews(product)
    //     displayContainer.append(reviewsDiv)
    // })
}

displayContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = e.target.id.split('--')[1];
    displayContainer.innerHTML = '';

    API.getOneProduct(productId).then(product => {
        renderProduct(product)
        API.getReviews(productId).then(product => {
            let reviewsDiv = createReviews(product)
            displayContainer.append(reviewsDiv)
        })
    })

})

export default renderProduct;