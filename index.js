document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8; 

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});


document.querySelector(".arrow").addEventListener("click", function() {
    document.querySelector(".First-section").scrollIntoView({ behavior: "smooth" });
}); 



document.addEventListener("scroll", function () {
    const arrow = document.querySelector(".arrow");
    if (window.scrollY > 50) {
        arrow.classList.add("hidden");
    } else {
        arrow.classList.remove("hidden");
    }
}); 