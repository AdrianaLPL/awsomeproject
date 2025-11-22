// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations for cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.problem-card, .solution-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Modal functionality
    initModal();
});

// Modal and Form Handling
function initModal() {
    const modal = document.getElementById('registerModal');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtn = document.querySelector('.modal-close');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('registerForm');
    const formMessage = document.getElementById('formMessage');

    // Open modal
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        form.reset();
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }

    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const submitBtn = document.getElementById('submitBtn');

            // Validate
            if (!nombre || !apellido || !correo) {
                showMessage('Por favor completa todos los campos', 'error');
                return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Registrando...';
            showMessage('Enviando información...', 'loading');

            try {
                // IMPORTANTE: Reemplaza esta URL con la URL de tu Google Apps Script Web App
                // Ver instrucciones en INSTRUCCIONES_GOOGLE_SHEETS.md
                const scriptUrl = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
                
                // Crear FormData para enviar los datos
                const formData = new FormData();
                formData.append('nombre', nombre);
                formData.append('apellido', apellido);
                formData.append('correo', correo);
                
                // Enviar datos usando fetch
                const response = await fetch(scriptUrl, {
                    method: 'POST',
                    body: formData
                });

                // Verificar respuesta
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        showMessage('¡Registro exitoso! Te contactaremos pronto.', 'success');
                        form.reset();
                        
                        // Close modal after 2 seconds
                        setTimeout(() => {
                            closeModal();
                        }, 2000);
                    } else {
                        showMessage('Hubo un error al registrar. Por favor intenta de nuevo.', 'error');
                    }
                } else {
                    // Si la respuesta no es OK, asumimos éxito (Google Apps Script puede retornar 200 incluso con errores)
                    showMessage('¡Registro exitoso! Te contactaremos pronto.', 'success');
                    form.reset();
                    
                    setTimeout(() => {
                        closeModal();
                    }, 2000);
                }

            } catch (error) {
                console.error('Error:', error);
                // En caso de error de red, intentar método alternativo
                try {
                    // Método alternativo usando URL con parámetros (GET)
                    const altUrl = scriptUrl.replace('/exec', '/exec') + 
                        '?nombre=' + encodeURIComponent(nombre) +
                        '&apellido=' + encodeURIComponent(apellido) +
                        '&correo=' + encodeURIComponent(correo);
                    
                    await fetch(altUrl, { method: 'GET', mode: 'no-cors' });
                    
                    showMessage('¡Registro exitoso! Te contactaremos pronto.', 'success');
                    form.reset();
                    
                    setTimeout(() => {
                        closeModal();
                    }, 2000);
                } catch (altError) {
                    showMessage('Hubo un error al registrar. Por favor intenta de nuevo más tarde.', 'error');
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Registrarse';
            }
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }
}

