document.addEventListener("DOMContentLoaded", () => {
    // Set up the IntersectionObserver to trigger animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // % of when block is visable
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // optional
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // observe every block reveal class
    document.querySelectorAll(".reveal-block").forEach((block, index) => {
        // optional
        block.style.transitionDelay = `${index * 0.08}s`;
        observer.observe(block);
    });
});
