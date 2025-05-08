document.addEventListener("DOMContentLoaded", () => {
    const themeSwitchCheckbox = document.getElementById("theme-switch");

    // Theme switch logic
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === "dark-theme") {
            themeSwitchCheckbox.checked = true;
        }
    }

    themeSwitchCheckbox.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme");
        const theme = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", theme);
    });

    // Testimonial slider logic
    const testimonials = document.querySelectorAll(".testimonial-item");
    const nextButton = document.querySelector(".next-testimonial-btn");
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add("active");
    }

    // Automatically slide every 5 seconds
    setInterval(showNextTestimonial, 5000);

    // Manually slide to the next testimonial
    nextButton.addEventListener("click", showNextTestimonial);

});