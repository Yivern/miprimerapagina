function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  
  function redireccion(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
    if (validateEmail(email)) {
      alert('Correo electrónico enviado correctamente.');
      location.href = "../index.html";
    } else {
      alert('Por favor ingrese un correo electrónico válido.');
    }
  }
  
  const myForm = document.getElementById('myForm');
  myForm.addEventListener("submit", redireccion);
  
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });