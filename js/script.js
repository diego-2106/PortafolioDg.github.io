    //Scroll
    window.onscroll = () => {
    const header = document.querySelector('header');

    header.classList.toggle('ch-bgcolor', window.scrollY > 800)
}


const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo')
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');


    function alertValidar() {
        if (nombre.value == '' || correo.value == ''|| asunto.value == '' || mensaje.value == '') {
            alertaError();
             //Muestro alerta de envio
    } else {
        alertaEnviado();
    }
}

    function alertaEnviado() {
        Swal.fire({
            title: "El formulario se ha enviado correctamente.",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            position: 'center'
            });
    }

    function alertaError() {
        Swal.fire({
            title: "Hubo un problema!",
            text: "Hay campos sin completar.",
            icon: "error",
            showConfirmButton: false,
            timer: 3000,
            position: 'center'
            });
    }
