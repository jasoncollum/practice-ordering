const reviewsDiv = document.createElement('div');
reviewsDiv.className = 'reviews-div';

function createReviews(product) {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';

    const reviewsH2 = document.createElement('h2');
    reviewsH2.textContent = 'Reviews: ';
    reviewsDiv.append(reviewsH2);

    const reviewsArray = product.reviews;
    reviewsArray.forEach(userReview => {
        const name = document.createElement('h3');
        const review = document.createElement('p');

        name.textContent = userReview.name;
        review.textContent = userReview.review;

        reviewDiv.append(name, review);
        reviewsDiv.appendChild(reviewDiv);
    })

    return reviewsDiv
}

export default createReviews;