// You can add JavaScript code here if needed, for example, for animations or form validation.
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("h2, p, ul");
    elements.forEach((el, index) => {
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.transition = "opacity 1s ease-in-out";
            el.style.opacity = "1";
        }, index * 300);
    });
});
