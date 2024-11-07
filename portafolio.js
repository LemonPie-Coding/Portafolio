let text = "¡Bienvenidos a mi portafolio!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

const modal = document.getElementById('modal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');
    const modalVideo = document.getElementById('clear-mind_test');

    // Abre el modal y reproduce el video
    openModal.onclick = () => {
        modal.classList.add('show');
        modalVideo.play(); // Reproduce el video al abrir el modal
    };

    // Cierra el modal y pausa el video
    closeModal.onclick = () => {
        modal.classList.remove('show');
        modalVideo.pause(); // Pausa el video
        modalVideo.currentTime = 0; // Resetea el video al inicio
    };

    // Pausar el video también si el modal se cierra al hacer clic fuera de la ventana modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            modalVideo.pause(); // Pausa el video
            modalVideo.currentTime = 0; // Resetea el video al inicio
        }
    };