const cards = {
  nombre: document.querySelector('input[name="nombre"]'),
  email: document.querySelector('input[name="email"]'),
  telefono: document.querySelector('input[name="telefono"]'),
  direccion: document.querySelector('input[name="direccion"]')
};

document.querySelector('.form__reg').addEventListener('submit', function(event) {
  let isValid = true;

  // Validación de dirección de correo electrónico
  const emailValue = cards.email.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailValue)) {
    isValid = false;
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
  }

  // Validación de dirección (puede ser personalizada según tus requerimientos)
  const direccionValue = cards.direccion.value.trim();
  if (direccionValue.length < 5) {
    isValid = false;
    alert('La dirección debe tener al menos 5 caracteres.');
  }

  if (!isValid) {
    event.preventDefault(); // Evitar que el formulario se envíe si hay errores
  }
});