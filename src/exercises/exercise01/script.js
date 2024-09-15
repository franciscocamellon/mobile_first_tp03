document.getElementById('menuToggle').addEventListener('click', 
    function () {
        const logo = document.getElementById('logo');
        const navLinks = document.getElementById('navLinks');
        logo.classList.toggle('deactive');
        navLinks.classList.toggle('active');
    }
);
  