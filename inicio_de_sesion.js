document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "usuario" && password === "contrasena") {
        window.location.href = "eleccion.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});

document.getElementById("registerButton").addEventListener("click", function () {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    alert("Registrado con éxito como " + newUsername);
});
