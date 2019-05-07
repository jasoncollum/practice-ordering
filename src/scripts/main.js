console.log('working')

import renderNavbar from "./navbar";
import API from "./db-calls";
import renderProduct from "./renderProduct";

// Render navbar to DOM
renderNavbar();

API.getProducts().then(allProducts => {
    allProducts.forEach(product => {
        renderProduct(product)
    })
})

// Get sone product and render to DOM
// API.getOneProduct(2).then(product => {
//     renderProduct(product)
// })

