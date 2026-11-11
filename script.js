document.addEventListener("DOMContentLoaded", () => {
    // Set up the IntersectionObserver to trigger block-by-block animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the block is visible
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Optional: Stop observing once it has animated in
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe every element with the reveal-block class
    document.querySelectorAll(".reveal-block").forEach((block, index) => {
        // Optional staggered delay based on position if desired
        block.style.transitionDelay = `${index * 0.08}s`;
        observer.observe(block);
    });
});
