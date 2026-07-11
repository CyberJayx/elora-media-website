document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Management
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            navToggle.classList.toggle('open');
            
            // Subtle indicator conversion animation for the hamburger menu icon
            const bars = navToggle.querySelectorAll('.bar');
            if(mainNav.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Auto-Close Mobile Menu on Link Click Setup
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                navToggle.click();
            }
        });
    });

    // Client-Side Client Request Interactive Logic Handling
    const leadForm = document.getElementById('leadForm');
    const formStatus = document.getElementById('formStatus');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Visual loading state cue
            formStatus.style.color = 'var(--text-muted)';
            formStatus.innerText = "Transmitting vision parameters...";

            const clientName = document.getElementById('name').value;
            
            // Simulating API integration delay for validation workflows
            setTimeout(() => {
                formStatus.style.color = '#2F855A';
                formStatus.innerText = `Thank you, ${clientName}. The Elora team has captured your brief! We will be in touch shortly.`;
                leadForm.reset();
            }, 1200);
        });
    }
});
