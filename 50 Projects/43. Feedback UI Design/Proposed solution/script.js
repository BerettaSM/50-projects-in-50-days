const ratings = document.querySelectorAll('.rating');
const sendButton = document.getElementById('send');
const panel = document.getElementById('panel');

panel.addEventListener('click', switchActiveRating);

sendButton.addEventListener('click', sendReview);

function switchActiveRating(e) {
    const clickedRating = e.target.closest('.rating');
    if(!clickedRating) return;
    selectRating(clickedRating);
}

function selectRating(rating) {
    removeActiveRatings();
    rating.classList.add('active');
}

function removeActiveRatings() {
    ratings.forEach((rating) => rating.classList.remove('active'));
}

function sendReview(e) {
    const selectedRating = getSelectedRatingValue();
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improved our
        customer support.</p>
    `
}

function getSelectedRatingValue() {
    const activeRating = Array.prototype.find.call(ratings, (rating) => {
        return rating.classList.contains('active');
    });
    return activeRating.querySelector('small').textContent;
}
