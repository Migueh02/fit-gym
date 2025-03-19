function initMap() {
    var ubicacion = {lat: -34.397, lng: 150.644};
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: ubicacion
    });
    var marker = new google.maps.Marker({
        position: ubicacion,
        map: mapa
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeButtons = document.querySelectorAll('.close');
    const backToTopButton = document.getElementById('backToTop');

    loginLink.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    registerLink.addEventListener('click', () => {
        registerModal.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'usuario' && password === 'contraseña') {
            alert('Iniciaste sesión, bienvenido');
            loginModal.style.display = 'none';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var newUsername = document.getElementById('newUsername').value;
        var newPassword = document.getElementById('newPassword').value;

        if (newUsername && newPassword) {
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            registerModal.style.display = 'none';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input[type="text"]');

    searchButton.addEventListener('click', () => {
        alert(`Buscando: ${searchInput.value}`);
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchButton.click();
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    initMap();
});