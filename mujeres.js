// Añadir la clase 'mobile-view' al body cuando el ancho de la pantalla es menor de 768px
if (window.innerWidth < 768) {
    document.body.classList.add('mobile-view');
} else {
    document.body.classList.remove('mobile-view');
}
