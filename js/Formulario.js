document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const asuntoInput = document.getElementById('asunto');
    const mensajeTextarea = document.getElementById('mensaje');
    const submitBtn = document.getElementById('submitBtn');

    const nombreError = document.getElementById('nombreError');
    const emailError = document.getElementById('emailError');
    const asuntoError = document.getElementById('asuntoError');
    const mensajeError = document.getElementById('mensajeError');

    function validateNombre() {
        const nombreValue = nombreInput.value.trim();
        if (nombreValue === '') {
            nombreError.textContent = 'Por favor, ingresa tu nombre.';
            nombreError.style.display = 'block';
            return false;
        } else if (nombreValue.length < 50) {
            nombreError.textContent = 'El nombre debe tener al menos 50 caracteres.';
            nombreError.style.display = 'block';
            return false;
        } else {
            nombreError.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
            emailError.style.display = 'block';
            return false;
        } else if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateAsunto() {
        const asuntoValue = asuntoInput.value.trim();
        if (asuntoValue === '') {
            asuntoError.textContent = 'Por favor, ingresa el asunto.';
            asuntoError.style.display = 'block';
            return false;
        } else {
            asuntoError.style.display = 'none';
            return true;
        }
    }

    function validateMensaje() {
        const mensajeValue = mensajeTextarea.value.trim();
        if (mensajeValue === '') {
            mensajeError.textContent = 'Por favor, ingresa tu mensaje.';
            mensajeError.style.display = 'block';
            return false;
        } else if (mensajeValue.length < 300) {
            mensajeError.textContent = 'El mensaje debe tener al menos 300 caracteres.';
            mensajeError.style.display = 'block';
            return false;
        } else {
            mensajeError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isNombreValid = validateNombre();
        const isEmailValid = validateEmail();
        const isAsuntoValid = validateAsunto();
        const isMensajeValid = validateMensaje();

        return isNombreValid && isEmailValid && isAsuntoValid && isMensajeValid;
    }

    // Event listeners para validar en tiempo real
    nombreInput.addEventListener('input', validateNombre);
    emailInput.addEventListener('input', validateEmail);
    asuntoInput.addEventListener('input', validateAsunto);
    mensajeTextarea.addEventListener('input', validateMensaje);

    // Event listener para validar el formulario al enviar
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar el envío por defecto del formulario

        if (validateForm()) {
            // Aquí puedes realizar el envío del formulario si es válido
            alert('Formulario enviado con éxito!');
            // window.location.href = form.action; // Descomenta esta línea para redirigir a una página de agradecimiento
        } else {
            // Mostrar un mensaje de error general si el formulario no es válido
            alert('Por favor, completa todos los campos correctamente antes de enviar.');
        }
    });
});
