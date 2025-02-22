let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('active',window.scrollY > 0);
});
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.querySelector(".newsletter button").addEventListener("click", function() {
        let email = document.querySelector(".newsletter input").value;
        if(email) {
            alert("Thank you for subscribing!");
        } else {
            alert("Please enter a valid email.");
        }
    });
});
