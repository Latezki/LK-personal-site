const contactForm = document.querySelector(".contact-form");
const formButton = document.querySelector(".form-button");

formButton.addEventListener("click", function(event) {
    contactForm.reportValidity();
    event.preventDefault();
});