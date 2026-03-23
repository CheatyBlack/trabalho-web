document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Erro: Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Erro: O formato do e-mail informado é inválido. Utilize o formato usuario@dominio.com.");
            return;
        }

        alert(`Mensagem enviada com sucesso!\n\nObrigado pelo contato, ${nome}.`);

        form.reset();
    });

});