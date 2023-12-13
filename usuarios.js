document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    function actualizarListaUsuarios() {
        userList.innerHTML = "";
        storedUsers.forEach((user) => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><img src="${user.imagen}" alt="${user.nombre}" class="user-image"></td>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
            `;
            userList.appendChild(newRow);
        });
    }
    actualizarListaUsuarios();
    userForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const imagen = document.getElementById("imagen").value;
        if (nombre && email && imagen) {
            const newUser = {
                nombre: nombre,
                email: email,
                imagen: imagen,
            };
            storedUsers.push(newUser);
            localStorage.setItem("usuarios", JSON.stringify(storedUsers));
            actualizarListaUsuarios();
            userForm.reset();
        }
    });
});
