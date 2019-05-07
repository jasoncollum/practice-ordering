// Faker Products.js
var faker = require('faker')

// function generateProducts() {
//     var products = []
//     for (var id = 0; id < 20; id++) {
//         var productName = faker.commerce.productName()
//         var productPrice = faker.commerce.price()
//         var productDescription = faker.lorem.paragraph()
//         var productQuantity = faker.random.number()
//         var productImage = faker.image.fashion()

//         products.push({
//             "id": id,
//             "name": productName,
//             "price": productPrice,
//             "quantity": productQuantity,
//             "description": productDescription,
//             "image": productImage
//         })
//     }
//     return { "products": products }
// }

function generateReviews() {
    var reviews = []
    for (var id = 0; id < 20; id++) {
        var reviewerName = faker.internet.userName()
        var review = faker.lorem.sentence()

        reviews.push({
            "id": id,
            "name": reviewerName,
            "review": review
        })
    }
    return { "reviews": reviews }
}

// module.exports = generateProducts
module.exports = generateReviews