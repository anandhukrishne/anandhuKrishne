// Preloader logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('port-preloader');
    if (preloader) {
        preloader.classList.add('loaded');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Floating Header & Back to Top Logic
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (header) {
        // Natural header is at top: 10px; so threshold is approx header height + 20px
        // But to be precise, we get the initial absolute bottom of the header + 10px
        const initialTriggerPoint = header.offsetTop + header.offsetHeight + 10;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > initialTriggerPoint) {
                        header.classList.add('is-floating');
                        if (backToTopBtn) {
                            backToTopBtn.style.display = 'flex';
                        }
                    } else {
                        header.classList.remove('is-floating');
                        if (backToTopBtn) {
                            backToTopBtn.style.display = 'none';
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Theme switch logic (scoped to portfolio styles)
const portThemeToggle = document.getElementById('portThemeToggle');
const htmlEl = document.documentElement;

// Set Default Dark Theme or Get LocalStorage Pref
const savedTheme = localStorage.getItem('port-theme') || 'dark';
if (savedTheme === 'light') {
    htmlEl.setAttribute('data-port-theme', 'light');
    if(portThemeToggle) portThemeToggle.textContent = '🌙';
} else {
    htmlEl.setAttribute('data-port-theme', 'dark');
    if(portThemeToggle) portThemeToggle.textContent = '☀️';
}

if (portThemeToggle) {
    portThemeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-port-theme');
        if (currentTheme === 'dark' || !currentTheme) {
            htmlEl.setAttribute('data-port-theme', 'light');
            localStorage.setItem('port-theme', 'light');
            portThemeToggle.textContent = '🌙';
        } else {
            htmlEl.setAttribute('data-port-theme', 'dark');
            localStorage.setItem('port-theme', 'dark');
            portThemeToggle.textContent = '☀️';
        }
    });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', () => {
            const isActive = mobileNav.classList.contains('active');
            
            if (isActive) {
                mobileNav.classList.remove('active');
                mobileBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                `;
            } else {
                mobileNav.classList.add('active');
                mobileBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                `;
            }
        });

        // Close when clicking a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                `;
            });
        });
    }
});
