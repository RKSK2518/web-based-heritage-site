document.addEventListener('DOMContentLoaded', () => {

    // Function to show a section and hide others
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(sec => sec.classList.remove('active'));
        const target = document.getElementById(sectionId);
        if(target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Optional: login form demo alert
    const loginForm = document.querySelector('.login-form form');
    if(loginForm){
        loginForm.addEventListener('submit', function(e){
            e.preventDefault();
            alert('Login successful! (Demo)');
            showSection('home');
            loginForm.reset();
        });
    }
});
