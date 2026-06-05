document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura básica de dados para validar o funcionamento
    const formData = new FormData(this);
    console.log("Formulário enviado!");
    
    // Efeito visual no botão
    const btn = document.querySelector('.submit-btn');
    btn.innerText = "Processing...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Registration Successful!");
        btn.innerText = "Submit";
        btn.style.opacity = "1";
    }, 1500);
});
