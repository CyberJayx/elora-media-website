document.addEventListener('DOMContentLoaded', () => {
    
    // High-Contrast Menu Mobile System Handler
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.navigation-links');
    const individualLinks = document.querySelectorAll('.nav-item, .nav-cta');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinksContainer.classList.toggle('active');
            
            // Clean mechanical translation lines for mobile menu icons
            const lines = menuToggle.querySelectorAll('.toggle-line');
            if(navLinksContainer.classList.contains('active')) {
                lines[0].style.transform = 'translateY(4.5px) rotate(45deg)';
                lines[1].style.transform = 'translateY(-4.5px) rotate(-45deg)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            }
        });
    }

    // Auto Collapse Interface Layout Hooks
    individualLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                menuToggle.click();
            }
        });
    });

    // Production Lead-Onboarding Data Intercept Management
    const briefForm = document.getElementById('corporateBriefForm');
    const logsContainer = document.getElementById('submissionLogs');

    if (briefForm) {
        briefForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            logsContainer.style.color = 'var(--text-light-muted)';
            logsContainer.innerText = "Transmitting parameters to partner network...";

            const clientEntity = document.getElementById('client_name').value;

            setTimeout(() => {
                logsContainer.style.color = 'var(--accent-gold)';
                logsContainer.innerText = `Transmission verified. Thank you, ${clientEntity}. An executive partner will review your brief.`;
                briefForm.reset();
            }, 1000);
        });
    }
});
