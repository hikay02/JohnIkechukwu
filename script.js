document.addEventListener('DOMContentLoaded', () => {
    // 1. Calculate Age
    const ageEl = document.getElementById('age');
    const today = new Date();
    const birthDate = new Date(1993, 11, 4); // Dec 4, 1993
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; }
    ageEl.textContent = age;

    // 2. Update Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 3. Dark Mode Toggle
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 4. Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});