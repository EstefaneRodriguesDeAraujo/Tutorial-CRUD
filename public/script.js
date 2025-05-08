function salvarUsuario() {
    const nome = document.getElementById("nome").value;
    fetch("http://localhost:3000/salvar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome })
    })
    .then(res => res.json())
    .then(() => listarUsuarios()); // Atualiza a lista de usuários
   }
    // Função para listar usuários cadastrados
    function salvarUsuario() {
        const nome = document.getElementById("nome").value;
        fetch("http://localhost:3000/salvar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome })
        })
        .then(res => res.json())
        .then(() => listarUsuarios()); // Atualiza a lista de usuários
       }

       listarUsuarios();
    