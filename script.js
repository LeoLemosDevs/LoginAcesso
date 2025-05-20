document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login realizado com sucesso!");
        // Aqui você pode redirecionar para outra página
    } else {
        alert("Usuário ou senha inválidos!");
    }
});
