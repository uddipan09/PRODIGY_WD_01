window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Reset background color when scrolled back to top
    }
});