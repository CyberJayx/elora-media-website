document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle mobile dropdown on the new pill menu
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navigation-links');
    const links = document.querySelectorAll('.navigation-links a');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            const bars = menuBtn.querySelectorAll('.bar');
            
            if(navLinks.classList.contains('show')) {
                bars[0].style.transform = 'translateY(4.5px) rotate(45deg)';
                bars[1].style.transform = 'translateY(-4.5px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.transform = 'none';
            }
        });
    }

    // Auto-close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                menuBtn.click();
            }
        });
    });

    // Form handling
    const form = document.getElementById('creativeForm');
    const msg = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            msg.style.color = 'var(--neon-blue)';
            msg.innerText = "Routing your brief to the creative team...";

            setTimeout(() => {
                msg.style.color = 'var(--neon-lime)';
                msg.innerText = "Brief captured! We'll be in touch.";
                form.reset();
            }, 1500);
        });
    }
});
