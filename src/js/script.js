document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector("#menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("translate-y-0", "opacity-100");
            mobileMenu.classList.remove("-translate-y-full", "opacity-0");
        } else {
            mobileMenu.classList.add("-translate-y-full", "opacity-0");
            setTimeout(() => mobileMenu.classList.add("hidden"), 300);
        }
    });
});
