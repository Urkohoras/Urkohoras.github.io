// --- CAPTURA DE ELEMENTOS ---
const candado = document.getElementById('candado');
const estadoSistema = document.getElementById('estado-sistema');
const tituloCabecera = document.getElementById('titulo-cabecera');
const pantallaFinal = document.getElementById('pantalla-final');

// Nivel 1
const bloquePrueba1 = document.getElementById('prueba-1');
const inputRespuesta1 = document.getElementById('respuesta-1');
const btnComprobar1 = document.getElementById('btn-comprobar-1');
const mensajeError1 = document.getElementById('mensaje-error');

// Nivel 2
const bloquePrueba2 = document.getElementById('prueba-2');
const zonaApagon = document.getElementById('zona-apagon');
const oscuridad = document.getElementById('oscuridad');
const inputRespuesta2 = document.getElementById('respuesta-2');
const btnComprobar2 = document.getElementById('btn-comprobar-2');
const mensajeError2 = document.getElementById('mensaje-error-2');

// Nivel 3
const bloquePrueba3 = document.getElementById('prueba-3');
const inputRespuesta3 = document.getElementById('respuesta-3');
const btnComprobar3 = document.getElementById('btn-comprobar-3');
const mensajeError3 = document.getElementById('mensaje-error-3');

// --- RESPUESTAS CORRECTAS ---
const RESPUESTAS_VALIDAS_1 = ["15/08/2024", "15-08-2024", "15/8/2024", "15/08/24", "15-08-24"];
const CODIGO_SECRETO = "1233345";
const RESPUESTA_FINAL = "me miran raro";

// ==========================================
// LÓGICA NIVEL 1 -> TRANSICIÓN A NIVEL 2
// ==========================================
btnComprobar1.addEventListener('click', () => {
    const intento = inputRespuesta1.value.trim();

    if (RESPUESTAS_VALIDAS_1.includes(intento)) {
        candado.classList.replace('fa-lock', 'fa-lock-open');
        candado.style.color = '#1DB954'; 
        btnComprobar1.style.background = '#1DB954'; 
        mensajeError1.style.display = 'none';
        
        estadoSistema.style.color = '#1DB954';
        estadoSistema.innerHTML = 'NIVEL 1 SUPERADO<br><span style="color:#aaa; font-size:0.8rem;">Cargando interfaz del Nivel 2...</span>';
        
        setTimeout(() => {
            // Reinicio estético a modo "Bloqueado Nivel 2"
            candado.classList.replace('fa-lock-open', 'fa-lock');
            candado.style.color = '#dc2743'; 
            estadoSistema.style.color = '#dc2743';
            estadoSistema.innerHTML = 'FIREWALL SECUNDARIO DETECTADO<br><span style="color:#dc2743; font-size:0.8rem;">Encuentra la anomalía visual.</span>';

            bloquePrueba1.style.display = 'none';
            bloquePrueba2.style.display = 'block';
        }, 2000);
    } else {
        mensajeError1.style.display = 'block';
        inputRespuesta1.value = ''; 
        inputRespuesta1.style.border = '1px solid #dc2743';
        setTimeout(() => { inputRespuesta1.style.border = '1px solid rgba(255,255,255,0.2)'; }, 1000);
    }
});

// ==========================================
// LÓGICA NIVEL 2: EL EFECTO LINTERNA
// ==========================================
function moverLinterna(e) {
    const rect = zonaApagon.getBoundingClientRect();
    let x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    let y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    oscuridad.style.background = `radial-gradient(circle 50px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.95) 80%, #000 100%)`;
}
zonaApagon.addEventListener('mousemove', moverLinterna);
zonaApagon.addEventListener('touchmove', moverLinterna);
const apagarLinterna = () => { oscuridad.style.background = '#000'; };
zonaApagon.addEventListener('mouseleave', apagarLinterna);
zonaApagon.addEventListener('touchend', apagarLinterna);

// ==========================================
// LÓGICA NIVEL 2 -> TRANSICIÓN A NIVEL 3
// ==========================================
btnComprobar2.addEventListener('click', () => {
    const intento2 = inputRespuesta2.value.trim();

    if (intento2 === CODIGO_SECRETO) {
        candado.classList.replace('fa-lock', 'fa-lock-open');
        candado.style.color = '#1DB954'; 
        btnComprobar2.style.background = '#1DB954'; 
        mensajeError2.style.display = 'none';
        
        estadoSistema.style.color = '#1DB954';
        estadoSistema.innerHTML = 'NIVEL 2 SUPERADO<br><span style="color:#aaa; font-size:0.8rem;">Accediendo a la bóveda final...</span>';
        
        setTimeout(() => {
            // Reinicio estético a modo "Bloqueado Nivel 3"
            candado.classList.replace('fa-lock-open', 'fa-lock');
            candado.style.color = '#dc2743'; 
            estadoSistema.style.color = '#dc2743';
            estadoSistema.innerHTML = 'NÚCLEO DEL SISTEMA BLOQUEADO<br><span style="color:#dc2743; font-size:0.8rem;">Desencriptación sónica requerida.</span>';

            bloquePrueba2.style.display = 'none';
            bloquePrueba3.style.display = 'block';
        }, 2000);
    } else {
        mensajeError2.style.display = 'block';
        inputRespuesta2.value = ''; 
        inputRespuesta2.style.border = '1px solid #dc2743';
        setTimeout(() => { inputRespuesta2.style.border = '1px solid rgba(255,255,255,0.2)'; }, 1000);
    }
});

// --- LÓGICA DE REPRODUCCIÓN DE AUDIO ---
const btnAudio = document.getElementById('btn-audio');
const audioSecreto = document.getElementById('audio-secreto');

btnAudio.addEventListener('click', () => {
    // Reproducimos el audio
    audioSecreto.play();
    
    // Cambiamos el botón temporalmente para dar feedback visual
    btnAudio.innerHTML = '<i class="fa-solid fa-volume-high"></i> REPRODUCIENDO...';
    btnAudio.style.background = '#1DB954';
    btnAudio.style.color = '#ffffff';

    // A los 5 segundos (o lo que dure tu audio), el botón vuelve a la normalidad
    setTimeout(() => {
        btnAudio.innerHTML = '<i class="fa-solid fa-play"></i> REPRODUCIR PISTA DE AUDIO';
        btnAudio.style.background = 'rgba(29, 185, 84, 0.1)';
        btnAudio.style.color = '#1DB954';
    }, 5000); 
});

// ==========================================
// LÓGICA NIVEL 3: VICTORIA FINAL
// ==========================================
btnComprobar3.addEventListener('click', () => {
    
    // 1. CORTAR EL AUDIO DE RAÍZ
    audioSecreto.pause();
    audioSecreto.currentTime = 0; // Lo devuelve al inicio
    
    // 2. REINICIAR EL BOTÓN VISUALMENTE (Por si seguía en verde)
    btnAudio.innerHTML = '<i class="fa-solid fa-play"></i> REPRODUCIR PISTA DE AUDIO';
    btnAudio.style.background = 'rgba(29, 185, 84, 0.1)';
    btnAudio.style.color = '#1DB954';

    // 3. VALIDACIÓN (El resto de tu código igual)
    const intento3 = inputRespuesta3.value.trim().toLowerCase();

    if (intento3 === RESPUESTA_FINAL) {
        // Rompemos la seguridad
        candado.classList.replace('fa-lock', 'fa-lock-open');
        candado.style.color = '#1DB954'; 
        btnComprobar3.style.background = '#1DB954'; 
        btnComprobar3.textContent = 'SISTEMA HACKEADO';
        mensajeError3.style.display = 'none';
        
        estadoSistema.style.color = '#1DB954';
        estadoSistema.innerHTML = 'ACCESO TOTAL CONCEDIDO<br><span style="color:#aaa; font-size:0.8rem;">Desplegando archivo confidencial...</span>';
        
        // Transición a la pantalla de captura de leads
        setTimeout(() => {
            tituloCabecera.textContent = 'SISTEMA DESBLOQUEADO';
            tituloCabecera.style.color = '#1DB954';
            estadoSistema.style.display = 'none';
            bloquePrueba3.style.display = 'none';
            pantallaFinal.style.display = 'block';
        }, 2000);
        
    } else {
        mensajeError3.style.display = 'block';
        inputRespuesta3.value = ''; 
        inputRespuesta3.style.border = '1px solid #dc2743';
        setTimeout(() => { inputRespuesta3.style.border = '1px solid rgba(255,255,255,0.2)'; }, 1000);
    }
});

// ==========================================
// LÓGICA DE CAPTURA DE LEAD Y RECOMPENSA
// ==========================================
const formularioFinal = document.getElementById('formulario-final');
const btnSubmitFinal = document.getElementById('btn-submit-final');
const contenedorFormulario = document.getElementById('contenedor-formulario');
const formError = document.getElementById('form-error');
const recompensaFinal = document.getElementById('recompensa-final');

// Interceptamos el momento en que le dan al botón de enviar correo
formularioFinal.addEventListener('submit', async function(event) {
    // ESTO ES CLAVE: Detiene la redirección automática de Formspree
    event.preventDefault(); 
    
    // Feedback visual de que está pensando
    btnSubmitFinal.textContent = "ENCRIPTANDO...";
    btnSubmitFinal.style.opacity = "0.7";
    
    // Empaquetamos los datos del formulario
    let data = new FormData(event.target);
    
    try {
        // Hacemos el envío por debajo (AJAX)
        const response = await fetch(event.target.action, {
            method: formularioFinal.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            // ÉXITO: Ocultamos el formulario y mostramos el reproductor del adelanto
            contenedorFormulario.style.display = 'none';
            recompensaFinal.style.display = 'block';
        } else {
            // Fallo de Formspree
            formError.style.display = 'block';
            btnSubmitFinal.textContent = "UNIRME A LA LISTA";
            btnSubmitFinal.style.opacity = "1";
        }
    } catch (error) {
        // Fallo de red del usuario
        formError.innerHTML = "Fallo de conexión. Revisa tu red.";
        formError.style.display = 'block';
        btnSubmitFinal.textContent = "UNIRME A LA LISTA";
        btnSubmitFinal.style.opacity = "1";
    }
});

// Lógica para reproducir los 10 segundos del adelanto
const btnAdelanto = document.getElementById('btn-adelanto');
const audioAdelanto = document.getElementById('audio-adelanto');

btnAdelanto.addEventListener('click', () => {
    audioAdelanto.play();
    btnAdelanto.innerHTML = '<i class="fa-solid fa-volume-high"></i> REPRODUCIENDO...';
    btnAdelanto.style.background = '#1DB954';
    btnAdelanto.style.color = '#ffffff';

    // A los 10 segundos, el botón se reinicia
    setTimeout(() => {
        btnAdelanto.innerHTML = '<i class="fa-solid fa-play"></i> ESCUCHAR "CHEESECAKE!!"';
        btnAdelanto.style.background = 'rgba(29, 185, 84, 0.1)';
        btnAdelanto.style.color = '#1DB954';
    }, 10000); 
});