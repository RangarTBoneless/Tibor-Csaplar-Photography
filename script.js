document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll('a[href^="#"]');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove("active");
        });

        const target = document.querySelector(id);
        if (target && target.tagName === "SECTION") {
            target.classList.add("active");
            // Remove scrolling to prevent jumps
            // target.scrollIntoView({ behavior: "smooth" });
        }
    }

    links.forEach(link => {
        link.addEventListener("click", e => {
            const id = link.getAttribute("href");

            // Ignore lightbox links (#img1, #img2, etc.)
            if (id.startsWith("#img")) return;

            e.preventDefault();
            showSection(id);
        });
    });

    // Do NOT show anything by default
    sections.forEach(section => section.classList.remove("active"));
});
