$(document).ready(function () {

    var carrito = [];

    $('.product-carousel img, .product-table img').hover(
        function () {
            $(this).css('transform', 'scale(1.1)'); 
        },
        function () {
            $(this).css('transform', 'scale(1)'); 
        }
    );


    $('.comprar-btn').on('click', function () {

        var $producto = $(this).closest('.product-cell');
        var imagenSrc = $producto.find('.product-content img').attr('src');
        var nombreProducto = $producto.find('.product-name').text();
        var precioProducto = $producto.find('.product-price').text();


        carrito.push({
            imagen: imagenSrc,
            nombre: nombreProducto,
            precio: precioProducto
        });


        actualizarCarritoSidebar();

        actualizarContadorCarrito();
    });

function actualizarCarritoSidebar() {
    var $carritoLista = $('#lista-carrito');
    $carritoLista.empty(); 


    var total = 0;


    carrito.forEach(function (producto, index) {
        var $itemCarrito = $('<li>');
        $itemCarrito.html(`
            <div class="carrito-item">
                <span class="eliminar-item" data-index="${index}"><i class="fas fa-trash"></i></span>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-item-imagen">
                <p>${producto.nombre}</p>
                <p>${producto.precio}</p>
            </div>
        `);
        $carritoLista.append($itemCarrito);
        total += parseFloat(producto.precio.replace('$', ''));
    });


    $carritoLista.find('.carrito-item-imagen').css({
        'max-width': '80px',
        'height': 'auto',
        'margin-right': '10px'
    });


    $('#total-carrito').text('Total = $' + total.toFixed(2));


    $carritoLista.find('.eliminar-item').on('click', function () {
        var index = $(this).data('index');
        eliminarProducto(index);
        actualizarCarritoSidebar();
        actualizarContadorCarrito();
    });
}




$('.barra-lateral').append(`
    <button class="btn btn-success realizar-pedido-btn">Realizar Pedido</button>
`);


$('.realizar-pedido-btn').on('click', function () {

    alert('Pedido realizado con éxito. Gracias por su compra.');

    carrito = [];
    actualizarCarritoSidebar();
    actualizarContadorCarrito();
});





function eliminarProducto(index) {
    carrito.splice(index, 1);
}





    function actualizarContadorCarrito() {
        var contador = carrito.length;
        $('#contador-carrito').text(contador);
    }


    function mostrarBarraLateral() {

        $(".barra-lateral").addClass("abierta");
    }


    function ocultarBarraLateral() {

        $(".barra-lateral").removeClass("abierta");
    }


    $('#icono-carrito').on('click', function () {

        if ($(".barra-lateral").hasClass("abierta")) {

            ocultarBarraLateral();
        } else {

            mostrarBarraLateral();
        }
    });


    $('.cerrar-barra-lateral').on('click', function () {
        ocultarBarraLateral();
    });





});
