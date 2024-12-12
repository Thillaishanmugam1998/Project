// Placeholder for JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");

    // Example: Sliding functionality for the slider
    const slider = document.querySelector(".slider");
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount += 300;
        if (scrollAmount >= slider.scrollWidth) {
            scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);
});
