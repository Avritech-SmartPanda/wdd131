const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
 
        feedback.textContent = `Thank you, ${formData.get("name")}! We'll get back to you shortly.`;
        feedback.style.display = "block";
        form.reset();
 
        setTimeout(() => {
            feedback.textContent = "";
            feedback.style.display = "none";
        }, 5000);
    });
});