document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) {
        console.error("Hamburger ya NavLinks nahi mila!");
        return;
    }

    // Hamburger click pe menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
    });

    // Kisi bhi link pe click karne pe menu band ho jaaye
    const navItems = navLinks.querySelectorAll('.linkItem');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
        });
    });

});