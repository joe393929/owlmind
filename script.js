// ---- Hamburger toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ---- Toggle full article (read more / close) ----
document.querySelectorAll('.toggle-article').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (!target) return;

        target.classList.toggle('open');

        if (target.classList.contains('open')) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        const card = target.closest('.post-card');
        if (card) {
            const readMoreLink = card.querySelector('.read-more');
            if (readMoreLink) {
                if (target.classList.contains('open')) {
                    readMoreLink.innerHTML = '<span>Close</span> <i class="fas fa-chevron-up"></i>';
                } else {
                    readMoreLink.innerHTML = '<span>Read full</span> <i class="fas fa-arrow-right"></i>';
                }
            }
        }
    });
});

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---- Click post title to open article ----
document.querySelectorAll('.post-title a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.post-card');
        if (card) {
            const toggleBtn = card.querySelector('.toggle-article');
            if (toggleBtn) toggleBtn.click();
        }
    });
});

console.log('🦉 Owlmind loaded successfully');
