// Database calls

const baseURL = "http://localhost:3000";

const API = {
    getProducts() {
        return fetch(`${baseURL}/products`).then(res => res.json())
    },
    getOneProduct(productId) {
        return fetch(`${baseURL}/products/${productId}`).then(res => res.json())
    },
    getReviews(productId) {
        return fetch(`${baseURL}/products/${productId}?_embed=reviews`).then(res => res.json())
    }
}

export default API